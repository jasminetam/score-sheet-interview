import React from 'react';
import { useRouter } from 'next/router';
import { translation_zh } from 'locales/zh';
import { translation_en } from 'locales/en';
import { FaLanguage } from 'react-icons/fa';
import Link from 'next/link';

function Header() {
  const router = useRouter();
    const lang = router?.locale == 'en' ? translation_en : translation_zh;
    
  return (
    <div className="header" data-test="components-Header">
      <Link href="/">
        <h1>{lang.studentScoreSheet}</h1>
      </Link>
      <div
        className="lang-switcher"
        onClick={() =>
          router?.push(router.asPath, router.asPath, {
            locale: router?.locale === 'zh' ? 'en' : 'zh',
          })
        }
      >
        <FaLanguage size={35} />
        {router?.locale == 'en' ? '中文' : 'English'}
      </div>
    </div>
  );
}

export default Header;
