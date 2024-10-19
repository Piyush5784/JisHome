import { ReactNode } from "react";

const ButtonWithGlow = ({
  children,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div>
      {" "}
      <a
        className={`inline-flex  justify-center whitespace-nowrap rounded-full px-3.5 py-3 text-md font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-950 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] hover:scale-115 duration-200 scale-105`}
        href="#0"
      >
        {children}
      </a>
    </div>
  );
};

export default ButtonWithGlow;
