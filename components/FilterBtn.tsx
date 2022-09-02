import React from 'react'
import { useRouter } from 'next/router';
import { translation_zh } from 'locales/zh';
import { translation_en } from 'locales/en';

interface Props {
    show: boolean;
    setShow:　React.Dispatch<React.SetStateAction<boolean>>;
}

function FilterBtn({show, setShow}: Props) {
    const router = useRouter();
    const lang = router?.locale == 'en' ? translation_en : translation_zh;

  return (
    <div className="filter-show" data-test="components-FilterBtn" >
    <button onClick={() => setShow(!show)}>
      {show ? `${lang.close}` : `${lang.filter}`}
    </button>
  </div>
  )
}

export default FilterBtn