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
    <div className="flex flex-wrap items-center w-full justify-around border-b-[1px] border-b-white border-opacity-20 ">
      <Link href="#" className="text-[32px] my-[35px]">
        LOGO
      </Link>
      <menu className="flex flex-wrap gap-[47px] items-center list-none">
        {pages.map((item, index) => {
          const style = `relative uppercase hover:opacity-100 transition-opacity ${
            page === item.name
              ? 'opacity-100 before:absolute before:bottom-[-48px] before:bg-white before:h-[1px] before:w-full'
              : 'opacity-50'
          }`;

          return (
            <li className={style} key={index}>
              <Link href={item.url} legacyBehavior>
                <a onClick={() => setPage(item.name)}>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </menu>
    </div>
  );
}
