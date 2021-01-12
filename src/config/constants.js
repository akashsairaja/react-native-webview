import config from '../../app.config';

export const PRIMARY_COLOR = '#2D2D2D';

export const WEBSITE_URL = config.extra.appURL;

export const CACHE_ENABLED = true;

export const INJECTED_JS = `
  window.onscroll = function() {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop
      }),     
    )`;



