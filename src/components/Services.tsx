import { PiDatabaseThin } from "react-icons/pi";
import { SiWikidata } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="lg:h-screen p-10 text-center">
      <motion.p
        className="py-10 text-6xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Services We're Providing
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We are working primarily in and around London and the Home Counties, on
        schemes <br /> that range from small intimate spaces to large projects.
      </motion.p>

      <div className="flex items-center flex-col md:pl-20 lg:flex-row gap-32 p-5 pb-0 pt-10 justify-center">
        <motion.div
          className="flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <VscWorkspaceTrusted size={80} />
          <div>
            <p className="text-3xl py-5">Architecture</p>
            <p className="text-gray-500">
              We develop the full cycle of project <br /> documentation & full
              details. Our <br /> Clients satisfaction is most priority
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PiDatabaseThin size={80} />
          <div>
            <p className="text-3xl py-5">Interior Work</p>
            <p className="text-gray-500">
              we will take care of the interior <br /> design, build &
              management of all <br /> kind of living projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SiWikidata size={80} />
          <div>
            <p className="text-3xl py-5">Retail Designs</p>
            <p className="text-gray-500">
              We can help you with the retails <br /> interior design and third
              party <br />
              management to create best.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
