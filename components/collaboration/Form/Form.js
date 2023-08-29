'use client';

import styles from './form.module.css';
import {useState} from 'react';
import Button from '@/components/global/Button/Button';
import Check from '@/components/collaboration/Form/Icons/Check';
import Link from 'next/link';

export default function Form() {
  const [data, setData] = useState({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const renderInput = ({type, placeholder, index}) => {
    const handler = ({target: {value}}) => {
      setData(old => {
        const newData = {...old};
        newData[type] = value || undefined;
        return newData;
      });
    };

    return (
      <div
        key={index}
        className={`${styles.formInput} relative flex flex-col ${
          type === 'message' ? 'mt-[50px]' : ''
        }`}>
        <input
          minLength={1}
          onChange={handler}
          className="bg outline-none border-b-[2px] border-b-white border-opacity-20"
        />
        <label
          className={`pointer-events-none absolute opacity-50 bottom-[6px] transition-transform ${
            data[type] && styles.filled
          }`}>
          {placeholder}
        </label>
      </div>
    );
  };

  const inputs = [
    {type: 'name', placeholder: 'Ваше имя'},
    {type: 'email', placeholder: 'Ваш e-mail'},
    {type: 'message', placeholder: 'Ваше сообщение'},
  ];

  return (
    <div className="flex flex-col gap-[70px] w-[50%]">
      <span className="text-[28px] opacity-80">
        Напишите нам, и мы предоставим всю необходимую информацию.
      </span>
      {inputs.map(({type, placeholder}, index) =>
        renderInput({type, placeholder, index}),
      )}
      <div className="flex gap-[25px] items-center">
        <Check />
        <div className="opacity-50 flex flex-col text-[12px]">
          <span>заполняя форму, вы даёте</span>
          <Link href="#" className="border-b-[1px] border-opacity-50">
            согласие на обработку персональных данных
          </Link>
        </div>
        <Button
          title="Отправить"
          callback={() => {
            console.log(data);
          }}
        />
      </div>
    </div>
  );
}
