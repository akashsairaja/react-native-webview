import React from 'react';
import PropTypes from 'prop-types';

import { Animated, TouchableOpacity } from 'react-native';

const TouchableScale = (props) => {

	const {  onPress, children } = props;
	const animatedValue = new Animated.Value(1);

	const handlePressIn = () => {
		if (!props.loading) {
			Animated.spring(animatedValue, {
				toValue: 0.9,
			}).start();
		}
	};

	const handlePressOut = () => {
		Animated.spring(animatedValue, {
			toValue: 1,

		}).start();
	};
	const animatedStyle = {
		transform: [{ scale: animatedValue }],
	};

	return (
		<TouchableOpacity {...props} activeOpacity={0.8} onPressIn={() => handlePressIn()}
						  onPressOut={() => handlePressOut()}
						  onPress={props.loading ? console.log('button disabled already loading') : onPress}>
			<Animated.View {...props} style={[animatedStyle]}>
				{children}
			</Animated.View>
		</TouchableOpacity>
	);
};

TouchableScale.propTypes = {
	children: PropTypes.node.isRequired,
	onPress: PropTypes.func.isRequired,
};


export default TouchableScale;
