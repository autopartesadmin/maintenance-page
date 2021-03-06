import * as React from "react";
import "../styles/globals.css";
import type { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import Script from "next/script";
import { GA_MEASUREMENT_ID, pageview } from "@/lib/gtag";
import { useRouter } from "next/router";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <HubspotProvider>
      {getLayout(<Component {...pageProps} />)}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-10823040061"
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script id="script-ads-1">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-10823040061');`}
      </Script>
      <Script id="script-ads-2">
        {`function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-10823040061/vKT4CLWS4IoDEL346ago', 'event_callback': callback }); return false; } `}
      </Script>
    </HubspotProvider>
  );
};
export default App;
