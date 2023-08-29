export default function Button({title, callback}) {
  return (
    <button
      type="button"
      className="py-[23px] px-[54px] border-[1px] border-white hover:bg-white hover:text-black transition-colors"
      onClick={callback}>
      {title}
    </button>
  );
}
