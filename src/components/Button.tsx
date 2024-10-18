import { ReactNode } from "react";

const Button = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <button
      className={`rounded-full bg-black px-3 py-2 text-white hover:bg-slate-800 duration-200 ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
