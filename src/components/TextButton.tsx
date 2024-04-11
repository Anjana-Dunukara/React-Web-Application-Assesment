const TextButton = ({ text, type }: { text: string; type: string }) => {
  const bg_color = type === "primary" ? " bg-secondary" : " bg-emerald-400";
  const text_color = type === "primary" ? " text-white" : " text-black";
  const hover_color =
    type === "primary" ? " hover:bg-secondary-hover" : " hover:bg-emerald-500";
  const active_color =
    type === "primary" ? " active:bg-gray-500" : " active:bg-emerald-600";

  const style =
    "w-[129px] mx-auto py-[12px] px-[2opx] rounded-[4px] font-bold mt-4 md:text-[14px] transition ease-in-out hover:scale-105" +
    bg_color +
    text_color +
    hover_color +
    active_color;

  return <button className={style}>{text}</button>;
};

export default TextButton;
