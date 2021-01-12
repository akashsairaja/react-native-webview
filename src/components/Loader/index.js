import React from 'react';
import PropTypes from 'prop-types';

import { View, Dimensions } from 'react-native';


import Loader from './Loader';

const { width } = Dimensions.get('window');

const AppLoader = ({ loading }) => {
	if (loading) {
		return (
			<View style={{
				position: 'absolute',
				bottom: 0,
				top: 0,
				zIndex: 9999999,
				height: '100%',
				width: width,
				alignItems: 'center',
				justifyContent: 'center',
				flex: 1,
				backgroundColor: 'rgba(0,0,0,0.5)',
			}}>
				<Loader loading={loading} color={"#ff7f29"}/>
			</View>
		);
	}
	return null;
};
AppLoader.propTypes = {
	loading: PropTypes.bool.isRequired,
};
export default AppLoader;
