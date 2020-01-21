import '../css/style.css'
import '../css/cart.css'
import '../css/Checkout.css'
import '../css/home.css'
import '../css/login.css'
import '../css/navbar.css'
import '../css/products.css'
import '../css/products.css'

import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from '../store/store';
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}
export default withRedux(reduxStore)(MyApp);