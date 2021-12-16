import "../styles/globals.css";

import type { AppProps } from "next/app";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HubspotProvider>
      <Component {...pageProps} />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-10823040061"
      />
      <Script id="script-ads-1">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-10823040061');`}
      </Script>
      <Script id="script-ads-2">
        {`function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-10823040061/vKT4CLWS4IoDEL346ago', 'event_callback': callback }); return false; } `}
      </Script>
    </HubspotProvider>
  );
}

export default MyApp;
