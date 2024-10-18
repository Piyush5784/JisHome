import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Button from "./Button";

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = ["Home", "About", "Services", "Pages", "Contact", "Blog"];
  return (
    <div className="h-[150px]">
      <div className="rounded-full border  shadow-lg flex justify-between m-4 mt-0 p-4 items-center">
        <a href="logo" className="text-xl font-semibold">
          MyLogo
        </a>
        <div className="md:flex gap-10 hidden ">
          {navItems.map((item, idx) => (
            <a href={item} key={idx} className="hover:underline ">
              {item}
            </a>
          ))}
        </div>
        <div className="md:flex gap-4 hidden ">
          <button className="border border-black rounded-full px-5 py-2 hover:bg-black duration-200 hover:text-white">
            Log In
          </button>
          <Button>Sign up Free </Button>
        </div>
        <div className="md:hidden" onClick={() => setShowMenu((c) => !c)}>
          <FiMenu size={25} />
        </div>
      </div>

      <div
        className={`flex duration-300 flex-col bg-customWhite border justify-center items-center shadow-xl relative ${
          showMenu ? "top-0" : "top-[-500px]"
        }  m-4 rounded-3xl p-1`}
      >
        <div className="border-b w-full text-center p-2">
          {navItems.map((item, idx) => (
            <div key={idx} className="w-full text-center border-b p-2">
              <a href="Contact" className="hover:underline hover:text-white">
                {item}
              </a>
            </div>
          ))}
        </div>

        <button className="w-full p-2 border-b">Log In</button>
        <div className="p-1">
          <Button>Sign up free</Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;