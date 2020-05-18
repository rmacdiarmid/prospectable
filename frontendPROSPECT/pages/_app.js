import App from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props
      return <Component {...pageProps} />
    }
  }

export default MyApp;



