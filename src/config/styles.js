import React from 'react';
import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from './constants';


export default StyleSheet.create({
	container: {
		flex: 1, backgroundColor: PRIMARY_COLOR,
	},
	safeArea: {
		flex: 0, backgroundColor: PRIMARY_COLOR,
	},
	scrollView: {
		flex: 1,
		height: '100%',
	},
	scrollViewContainer: {
		backgroundColor: PRIMARY_COLOR,
	},
	header: {
		height: 40, flexDirection: 'row', padding: 10, backgroundColor: '#FFF', borderBottomWidth: 1,
		borderBottomColor: '#000',
		marginTop: 40,
	},
	headerTextContainer: { flex: 1, alignItems: 'center', width: '100%' },
	headerText: {
		color: '#3a00ff',
		fontStyle: 'italic',
		fontWeight: 'bold',
		fontSize: 18,
		zIndex: 999,
		justifyContent: 'flex-end',
	},
});
