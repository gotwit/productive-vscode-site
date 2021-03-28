import { useEffect } from "react";
import { load, trackPageview } from "fathom-client";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    load("IZCOEGMK", {
      includedDomains: ["productivevscode.com"],
      url: "https://wildcat.codesalt.io/script.js",
    });
    trackPageview();
  }, []);

  return <Component {...pageProps} />;
}
