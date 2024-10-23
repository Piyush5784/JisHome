import { RiSparkling2Line } from "react-icons/ri";
import ButtonWithGlow from "./ButtonWithGlow";
import Topbar from "./Topbar";
const HeroSection = () => {
  return (
    <div className="lg:mx-20 h-screen p-5">
      <Topbar />
      <div className=" font-bold flex items-center justify-center text-center ">
        <div className="flex items-center flex-col text-white pt-10 mb-10 ">
          <span className="rounded-full w-[200px] text-slate-900 border-slate-950 flex items-center border p-3 justify-center">
            <RiSparkling2Line className=" text-[2rem]" />
            <p className=" text-[1rem] w-full font-light text-slate-900">
              Impresive Designs
            </p>
          </span>
          <p className="text-6xl">
            Beautiful Designs <br /> For Everyone
          </p>
          <p className="font-light pt-5 ">
            Transform your living spaces into a reflection of your unique style.
            Whether you're dreaming of a modern, <br /> minimalist home or a
            cozy, rustic retreat, our team at JainInteriors will bring your
            vision to life.
          </p>
          <div className="flex gap-4 p-3">
            <ButtonWithGlow>Get Started</ButtonWithGlow>
            <button className=" rounded-full px-3 hover:bg-slate-200 duration-200 font-light bg-white text-black">
              {" "}
              Latest Designs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
