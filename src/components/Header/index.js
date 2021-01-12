import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import config from '../../../app.config';
import styles from '../../config/styles';

const Header = (props) => {
	const { onRefresh } = props;

	return (
		<View style={styles.header}>
			<View style={styles.headerTextContainer}>
				<Text style={styles.headerText} onPress={() => onRefresh()}>{config.extra.appName}</Text>
			</View>
		</View>
	);
};

Header.propTypes = {
	onRefresh: PropTypes.func.isRequired,
};

export default Header;
