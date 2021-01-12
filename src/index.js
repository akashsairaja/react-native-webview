import React from 'react';
import { View, RefreshControl, SafeAreaView, ScrollView, BackHandler } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { WebView } from 'react-native-webview';

import Loading from './components/Loader';
import Header from './components/Header';

import styles from './config/styles';
import {
	CACHE_ENABLED, WEBSITE_URL,
	INJECTED_JS,
} from './config/constants';

enableScreens();

const Root = () => {

	const [isPullToRefreshedEnabled, updateIsPullToRefreshEnabled] = React.useState(false);
	const [scrollViewHeight, updateScrollViewHeight] = React.useState(0);
	const [isLoading, updateIsLoading] = React.useState(false);
	const webViewRef = React.useRef(null);

	const onRefresh = () => webViewRef.current.reload();

	const onAndroidBackPress = () => {
		if (webViewRef.current != null) {
			webViewRef.current.goBack();
			return true;
		}
		return false;
	};


	React.useLayoutEffect(() => {
		if (Platform.OS === 'android') {
			BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
		}
		return () => {
			if (Platform.OS === 'android') {
				BackHandler.removeEventListener('hardwareBackPress');
			}
		};
	}, []);

	const onWebViewMessage = (e) => {
		const { data } = e.nativeEvent;
		try {
			const { scrollTop } = JSON.parse(data);
			updateIsPullToRefreshEnabled(scrollTop === 0);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View style={styles.container}>
			<Loading loading={isLoading}/>
			<SafeAreaView style={styles.safeArea}/>
			<Header onRefresh={onRefresh}/>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollViewContainer}
				onLayout={e => updateScrollViewHeight(e.nativeEvent.layout.height)}
				refreshControl={
					<RefreshControl
						refreshing={false}
						enabled={isPullToRefreshedEnabled}
						onRefresh={onRefresh}
						tintColor="transparent"
						colors={['transparent']}
						style={{ backgroundColor: 'transparent' }}
					/>
				}>
				<WebView
					ref={webViewRef}
					bounce={false}
					onLoadStart={() => updateIsLoading(true)}
					onLoad={() => updateIsLoading(false)}
					originWhiteList={['*']}
					style={{
						flex: 1,
						height: scrollViewHeight,
					}}
					useWebKit={true}
					cacheEnabled={CACHE_ENABLED}
					renderError={() => console.log('error')}
					source={{ uri: WEBSITE_URL }}
					javaScriptEnabled={true}
					onMessage={onWebViewMessage}
					injectedJavaScript={INJECTED_JS}
				/>
			</ScrollView>
		</View>
	);
};


export default Root;
