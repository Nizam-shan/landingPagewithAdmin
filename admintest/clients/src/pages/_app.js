import { useEffect } from "react";
import Router from "next/router";
// import { initGA, logPageView } from 'analytics';
// import "components/modal/modal.css";
import "typeface-dm-sans";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";

export default function CustomApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // initGA();
  //   // logPageView();
  //   Router.events.on('routeChangeComplete', logPageView);
  // }, []);

  return <Component {...pageProps} />;
}
