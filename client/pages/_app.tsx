import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// MyApp.getInitialProps = async (appContext: any) => {
//   let pageProps = {};

//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   }

//   return {
//     pageProps,
//   };
// };

export default wrapper.withRedux(MyApp);
