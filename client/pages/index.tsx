import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useIsAdmin, useIsEmployee } from "../hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(3434);

  useIsAdmin();
  useIsEmployee();
  useEffect(() => {
    console.log(3434);
  }, []);

  useEffect(() => {
    
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"20388ea2c54f8e5ba9237d6526b2b9bac","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

  })

  return (
    <>
      <Layout title={"Perilla"}>
        {" "}
        {/* <Script
          async
          src="https://embed.tawk.to/63bd4f0b47425128790ca5ed/1gmdnpi97"
          charSet="UTF_8"
          crossOrigin="*"
        /> */}
        <div>
          <h1>786</h1>
        </div>
      </Layout>
    </>
  );
}
