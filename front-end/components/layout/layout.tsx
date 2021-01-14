import React, {FunctionComponent} from "react";
import Head from "next/head";

import type {ChildrenProp} from "../Interfaces/contacts"

const Layout: FunctionComponent<ChildrenProp> = ({children}) => {
  return (
    <>
      <Head>
        <title>Contact App MERN + Next.js</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="Description" content="Contact CRUD made with MERN stack + Next JS in Front" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
