import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { translation_zh } from 'locales/zh';
import { translation_en } from 'locales/en';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const router = useRouter();
  const lang = router?.locale == 'en' ? translation_en : translation_zh;
  return (
    <>
      <Head>
        <title>{lang.studentScoreSheet}</title>
        <meta name="description" content="Score Sheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout" data-test="components-Layout">
        <main>{children}</main>
        <footer>All Right Reserved</footer>
      </div>
    </>
  );
}

export default Layout;
