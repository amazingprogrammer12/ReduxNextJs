import * as React from 'react'
import type { AppProps } from 'next/app'
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;







// function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
//   return (
//     <SSRKeycloakProvider
//       keycloakConfig={keycloakCfg}
//       persistor={Persistors.Cookies(cookies)}
//     >
//       <Component {...pageProps}></Component>
//     </SSRKeycloakProvider>
//   );
// }

// function parseCookies(req?: IncomingMessage) {
//   if (!req || !req.headers) {
//     return {};
//   }
//   return cookie.parse(req.headers.cookie || "");
// }

// MyApp.getInitialProps = async (context: AppContext) => {
//   // Extract cookies from AppContext
//   return {
//     cookies: parseCookies(context?.ctx?.req),
//   };
// };

// export default MyApp;
