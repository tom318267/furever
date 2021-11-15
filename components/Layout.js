import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Bellota:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Furever Pets",
  description: "Adopt a pet to change your life.",
  keywords: "adoption, pets, dogs, cats",
};

export default Layout;
