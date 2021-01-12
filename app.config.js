export default {
	'name': 'webview',
	'slug': 'webview',
	'version': '1.0.0',
	'orientation': 'portrait',
	'icon': './assets/icon.png',
	'splash': {
		'image': './assets/splash.png',
		'resizeMode': 'contain',
		'backgroundColor': '#FFF',
	},
	'updates': {
		'fallbackToCacheTimeout': 0,
	},
	'assetBundlePatterns': [
		'**/*',
	],
	'ios': {
		'supportsTablet': true,
	},
	'web': {
		'favicon': './assets/favicon.png',
	},
	extra: {
		appName: 'Ganna webview',
		appURL: 'https://gaana.com/',
	},
};
