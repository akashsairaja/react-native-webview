import React from 'react';
import {
	Animated, Image,
	View,
} from 'react-native';
import TouchableScale from '../TouchableScale';

const DEFAULT_SIZE = 200;
const INTERVAL = 1000;
const ANIMATION_DURATION = 3000;

const Loader = (props) => {

	const [circles, updateCircles] = React.useState([]);

	React.useEffect(() => {
		setTimeout(() => {
			addMoreCircles();
		}, INTERVAL);
		return () => {
			clearTimeout(INTERVAL);
		};
	}, []);

	let animatedA = 0;
	let opacityA = 0;
	const addMoreCircles = () => {
		const SIZE = props.size || DEFAULT_SIZE;
		animatedA = new Animated.Value(0.20);
		opacityA = new Animated.Value(1);
		const { color } = props;

		const circle = (
			<Animated.View style={{
				height: SIZE,
				zIndex: 999,
				width: SIZE,
				position: 'absolute',
				borderRadius: SIZE / 2,
				borderColor: color || 'red',
				borderWidth: 2,
				backgroundColor: color || 'rgba(230,69,121,0.5)',
				opacity: opacityA,
				transform: [{
					scale: animatedA,
				}],
			}}>
			</Animated.View>
		);
		circles.push(circle);
		const newCircles = [...circles];
		updateCircles(newCircles);

		Animated.parallel([
			Animated.timing(animatedA, {
				toValue: 1,
				duration: ANIMATION_DURATION,
				useNativeDriver: true,

			}),
			Animated.timing(opacityA, {
				toValue: 0,
				duration: ANIMATION_DURATION,
				useNativeDriver: true,

			}),
		]).start(() => {
			circles.shift();
			updateCircles(circles);
		});
	};

	const onPress = () => {
		addMoreCircles();
		if (props.onPress) {
			props.onPress();
		}
	};

	const SIZE = props.size || DEFAULT_SIZE;
	const IMAGE = props.image;

	const IMAGE_SIZE = SIZE / 100 * 30;
	return (
		<View style={{
			flex: 1,
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			<View style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>
				{
					circles.map((item, key) =>
						(<React.Fragment key={key}>
							{item}
						</React.Fragment>),
					)
				}

				<View style={{ zIndex: 1000, position: 'absolute' }}>
					<TouchableScale onPress={() => onPress()}>
						<View style={{
							shadowColor: '#000',
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.20,
							shadowRadius: 4.65,
							elevation: 6,
						}}>
							<View style={{
								height: IMAGE_SIZE,
								width: IMAGE_SIZE,
								borderRadius: IMAGE_SIZE / 2,
								borderColor: '#FFF',
								borderWidth: IMAGE_SIZE / 12,
								backgroundColor: '#FFF',
								alignItems: 'center',
								justifyContent: 'center',
								overflow: 'hidden',
							}}>
								<Image style={{
									height: '100%',
									width: '100%',
									borderColor: '#FFF',
								}} source={require('../../../assets/musicloader.gif')}
									   resizeMode={'cover'}/>
							</View>

						</View>
					</TouchableScale>
				</View>
			</View>
		</View>
	);
};
export default Loader;
