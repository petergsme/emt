import { isIOS, isAndroid, isMobile } from 'react-device-detect';

interface AppUrls {
  emticket: {
    ios: string;
    android: string;
  };
  emtvalencia: {
    ios: string;
    android: string;
  };
  general: {
    ios: string;
    android: string;
  };
}

const APP_URLS: AppUrls = {
  emticket: {
    ios: 'https://apps.apple.com/es/app/emticket/id1525564743',
    android: 'https://play.google.com/store/apps/details?id=com.justride.emtvalencia',
  },
  emtvalencia: {
    ios: 'https://apps.apple.com/es/app/emt-valencia/id563794473',
    android: 'https://play.google.com/store/apps/details?id=es.emtvalencia.emt',
  },
  general: {
    ios: 'https://apps.apple.com/es/developer/emt-valencia/id563794476',
    android: 'https://play.google.com/store/apps/developer?id=EMT+Valencia&hl=es',
  },
};

export const useAppDownload = () => {
  const getStoreUrl = (appType: keyof AppUrls = 'general'): string => {
    if (isIOS) return APP_URLS[appType].ios;
    if (isAndroid) return APP_URLS[appType].android;
    return APP_URLS[appType].ios; // Fallback para desktop
  };

  const redirectToStore = (appType: keyof AppUrls = 'general') => {
    const url = getStoreUrl(appType);
    window.open(url, '_blank');
  };

  return {
    getStoreUrl,
    redirectToStore,
    deviceType: isIOS ? 'ios' : isAndroid ? 'android' : 'desktop',
    isMobile,
  };
};
