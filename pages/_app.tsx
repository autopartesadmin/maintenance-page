import "../styles/globals.css";

import type { AppProps } from "next/app";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HubspotProvider>
      <Component {...pageProps} />
    </HubspotProvider>
  );
}

export default MyApp;
