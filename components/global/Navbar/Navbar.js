'use client';

import {useState} from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [page, setPage] = useState('сотрудничество');

  const pages = [
    {name: 'о бренде', url: '#'},
    {name: 'ответственность', url: '#'},
    {name: 'где купить', url: '#'},
    {name: 'поддержка', url: '#'},
    {name: 'контакты', url: '#'},
    {name: 'сотрудничество', url: '#'},
  ];

  return (
    <div className="flex flex-wrap items-center w-full justify-around h-full border-b-[1px] border-b-white border-opacity-20 ">
      <Link href="#" className="text-[32px] my-[35px]">
        LOGO
      </Link>
      <div className="flex flex-wrap gap-[47px] h-full">
        {pages.map(item => {
          const style = `h-full uppercase hover:opacity-100 transition-opacity ${
            page === item.name
              ? 'opacity-100 border-b-white border-b-[1px]'
              : 'opacity-50'
          }`;

          return (
            <Link href={item.url} key={pages.indexOf(item)} legacyBehavior>
              <a className={style} onClick={() => setPage(item.name)}>
                {item.name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
