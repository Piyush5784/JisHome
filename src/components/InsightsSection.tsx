import { GoArrowUp } from "react-icons/go";
import Insights from "./Insights";
import { motion } from "framer-motion";

const InsightsSection = () => {
  return (
    <div className="p-5">
      <Insights />
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-60 gap-20">
        {/* Image with animation */}
        <motion.div
          className="md:pt-10 md:pl-10 lg:pl-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={"/ContentImage.jpg"}
            alt="reload"
            height={300}
            width={500}
            className="rounded"
          />
        </motion.div>

        {/* Text with animation */}
        <motion.div
          className="md:pl-10 lg:pl-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-6xl font-bold">
            Enhance Your <br /> Interior <br /> Through Design
          </p>
          <p className="pt-10 text-xl">
            Our practice is Designing complete environments exceptional <br />
            buildings, communities and places in special situations, where{" "}
            <br /> a unique historic or nature environment requests an
            especially <br /> thoughtful and innovative solution.
          </p>

          {/* Button with animation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 bg-white text-black mt-10 hover:bg-gray-950 hover:text-white duration-200 rounded-full border-black border text-lg"
          >
            <div className="flex gap-2 items-center justify-center ">
              About us <GoArrowUp size={25} className="rotate-45" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InsightsSection;
