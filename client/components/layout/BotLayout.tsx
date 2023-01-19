import React from "react";
import Head from "next/head";
import Header from "./header/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BotLayout = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src="https://embed.tawk.to/63bd4f0b47425128790ca5ed/1gmdnpi97"
          charSet="UTF_8"
          crossOrigin="*"
        ></script>
      </Head>

      <Header />
      <ToastContainer position="bottom-right" />
      {children}
    </div>
  );
};

export default BotLayout;