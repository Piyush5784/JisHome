import { GoArrowUp } from "react-icons/go";

const DarkButton = ({ text }: { text: string }) => {
  return (
    <button className="px-8 py-2 hover:bg-white hover:text-black text-white border rounded-full flex gap-3">
      {text} <GoArrowUp size={25} className="rotate-45" />
    </button>
  );
};

export default DarkButton;
