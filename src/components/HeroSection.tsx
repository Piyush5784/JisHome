import { RiSparkling2Line } from "react-icons/ri";
import ButtonWithGlow from "./ButtonWithGlow";
import Topbar from "./Topbar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="lg:mx-20 h-screen p-5">
      <Topbar />
      <div className="font-bold flex items-center justify-center text-center">
        <div className="flex items-center flex-col text-white pt-10 mb-10">
          {/* Animated Icon Section */}
          <motion.span
            className="rounded-full w-[200px] text-slate-900 border-slate-950 flex items-center border p-3 justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <RiSparkling2Line className="text-[2rem]" />
            <p className="text-[1rem] w-full font-light text-slate-900">
              Impresive Designs
            </p>
          </motion.span>

          {/* Animated Title */}
          <motion.p
            className="text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Beautiful Designs <br /> For Everyone
          </motion.p>

          {/* Animated Subtitle */}
          <motion.p
            className="font-light pt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your living spaces into a reflection of your unique style.{" "}
            <br />
            Whether you're dreaming of a modern, minimalist home or a cozy,
            rustic retreat, <br />
            our team at @info will bring your vision to life.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex gap-4 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ButtonWithGlow>Get Started</ButtonWithGlow>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full px-3 hover:bg-slate-200 duration-200 font-light bg-white text-black"
            >
              Latest Designs
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
