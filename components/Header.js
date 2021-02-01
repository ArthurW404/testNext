import React from "react";
import Head from "next/head";

const Header = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
