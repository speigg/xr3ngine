import { initGA, logPageView } from '@xr3ngine/client-core/src/common/components/analytics';
import Api from "@xr3ngine/client-core/src/world/components/editor/Api";
import { ApiContext } from '@xr3ngine/client-core/src/world/components/editor/contexts/ApiContext';
import GlobalStyle from '@xr3ngine/client-core/src/world/components/editor/GlobalStyle';
import theme from "@xr3ngine/client-core/src/world/components/editor/theme";
import DeviceDetector from 'device-detector-js';
import { fromJS } from 'immutable';
import withRedux from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import Head from 'next/head';
import querystring from 'querystring';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { connect, Provider } from 'react-redux';
import { Dispatch, Store } from 'redux';
import { ThemeProvider } from "styled-components";
import url from 'url';
import './styles.scss';
import i18n from 'i18next';
import translation from '../../i18n/en/translation.json';
import { initReactI18next } from 'react-i18next';
import { getI18nConfigs as getClientCoreI18nConfigs } from '@xr3ngine/client-core';
import { configureStore } from '@xr3ngine/client-core/src/store';
import { dispatchAlertError } from '@xr3ngine/client-core/src/common/reducers/alert/service';
import { getDeviceType } from '@xr3ngine/client-core/src/common/reducers/devicedetect/actions';
import { restoreState } from '@xr3ngine/client-core/src/persisted.store';
import LanguageDetector from 'i18next-browser-languagedetector';

const config = getConfig().publicRuntimeConfig;

const resources = {
  en: {
    translation,
  },
};

const namespace = [ 'translation' ];

const subPackageTranslations = [
  getClientCoreI18nConfigs()
];

for (let t of subPackageTranslations) {
  for (let key of Object.keys(t.resources)) {
    if (!resources[key]) resources[key] = t.resources[key];
    else resources[key] = { ...resources[key], ...t.resources[key] };
  }

  for (let ns of t.namespace) {
    if (!namespace.includes(ns)) namespace.push(ns);
  }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  ns: namespace,
  defaultNS: 'translation',
  lng: 'en',
  resources,
});

interface Props extends AppProps {
  store: Store;
}

const mapStateToProps = (state: any): any => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): any => ({
});

const MyApp = (props: Props): any => {
  const { Component, pageProps, store } = props;

  const [api, setApi] = useState<Api>();
  // State that is used to render the page component if this one is mounted on client side.
  const [isMounted, setIsMounted] = useState(false);

  const getDeviceInfo = async (): Promise<any> => {
    const deviceInfo = { device: {}, WebXRSupported: false };
    const deviceDetector = new DeviceDetector();
    const userAgent = navigator.userAgent;
    deviceInfo.device = deviceDetector.parse(userAgent);
    if ((navigator as any).xr === undefined) {
      deviceInfo.WebXRSupported = false;
    } else {
      deviceInfo.WebXRSupported = await (navigator as any).xr.isSessionSupported('immersive-vr');
    }
    store.dispatch(getDeviceType(deviceInfo));
  };
  const initApp = useCallback(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    // NOTE: getDeviceInfo is an async function, but here is running
    // without `await`.

    store.dispatch(restoreState());
    initGA();
    logPageView();
    getDeviceInfo();
    const urlParts = url.parse(window.location.href);
    const query = querystring.parse(urlParts.query);
    if (query.error != null) {
      store.dispatch(dispatchAlertError(store.dispatch, query.error as string));
      delete query.error;
      const stringifiedQuery = querystring.stringify(query);
      window.history.replaceState(
        {},
        document.title,
        urlParts.pathname + stringifiedQuery
      );
    }
    setApi(new Api());
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(initApp, []);

  return (
    <Fragment>
      <Head>
        <title>{config.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0', shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ApiContext.Provider value={api}>
          {/* <CssBaseline /> */}
          <GlobalStyle />
          <Provider store={store}>
            {isMounted && <Component {...pageProps} />}
          </Provider>
        </ApiContext.Provider>
      </ThemeProvider>
    </Fragment>
  );
};
export default withRedux(configureStore, {
  serializeState: (state) => state.toJS(),
  deserializeState: (state) => fromJS(state)
})(connect(mapStateToProps, mapDispatchToProps)(MyApp));