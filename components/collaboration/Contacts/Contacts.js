export default function Contacts() {
  return (
    <div className="flex flex-col gap-[40px] w-[50%] h-full">
      <span className="uppercase text-[40px]">сотрудничество</span>
      <div className="flex flex-col">
        <span className="opacity-50 text-[16px]">
          по вопросам сотрудничества
        </span>
        <a className="text-[26px] w-fit" href="tel:+74951112233">
          +7 (495) 111-22-33
        </a>
      </div>
    </div>
  );
}
