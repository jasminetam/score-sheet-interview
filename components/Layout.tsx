import React from 'react';
import Head from 'next/head';

interface Props {
    children: React.ReactNode
}

function Layout({ children }: Props) {

  return (
    <>
      <Head>
        <title>Score Sheet</title>
        <meta name="description" content="Score Sheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
