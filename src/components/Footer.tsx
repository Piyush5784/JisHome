import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col pl-5 md:pl-0 md:flex-row justify-around items-start pt-20 bg-customBlack text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col font-bold text-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready To <br /> Work With Us
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-4 py-3 hover:bg-white hover:text-black mt-10 border-white duration-200 rounded-full border text-lg">
            <div className="flex gap-2 items-center justify-center ">
              Contact us <GoArrowUp size={25} className="rotate-45" />
            </div>
          </button>
        </motion.div>
      </div>

      <div className="pt-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          if you're not happy, we're not happy. <br className="md:hidden" /> We
          work tirelessly <br className="hidden md:block" /> to make sure your
          experience is delightful. That's why we offer <br /> the happiness
          guarantee.
        </motion.p>
        <div className="h-[0.5px] my-4 bg-gray-500 rounded"></div>

        <div className="flex gap-5 md:gap-20">
          <div>
            <motion.p
              className="py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Contact Us
            </motion.p>
            <motion.p
              className="pb-10 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => (window.location.href = "mailto:info@jishome.com")}
            >
              Email: <br />
              info@jishome.com
            </motion.p>
            <motion.p
              className="pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Phone: <br />
              +91 9085883000
              <br />
              +91 7099002100
            </motion.p>
            <motion.p
              className="pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              {" "}
              Address: <br />
              <div className="flex items-center justify-start">
                <FaLocationDot />
                Athgoan (Balaji point)
              </div>
              <div className="flex items-center justify-start mt-1">
                <FaLocationDot />
                GS Road (ABC)
              </div>
            </motion.p>
          </div>
          <div>
            <motion.p
              className="py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Social Media
            </motion.p>
            <motion.p
              className="pb-10 hover:underline cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                className="flex justify-center items-center gap-2 hover:underline cursor-pointer"
                href="https://www.instagram.com/jainInteriorsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
                jainInteriorsolutions
              </a>
            </motion.p>

            <motion.p
              className="pb-10 hover:underline cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Facebook
            </motion.p>
            <motion.p
              className="pb-10 hover:underline cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Behance
            </motion.p>
            <motion.p
              className="pb-10 hover:underline cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Twitter
            </motion.p>
            <motion.p
              className="pb-10 hover:underline cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Linkedin
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
