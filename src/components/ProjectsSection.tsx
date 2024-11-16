import { motion } from "framer-motion";
import DarkButton from "./DarkButton";

const ProjectsSection = () => {
  return (
    <div>
      <div className="p-5 bg-customBlack">
        <div className="flex w-full flex-col md:flex-row justify-around mb-10 text-white md:gap-64">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-bold text-6xl pt-10">Our Projects</p>
            <p className="py-8">
              Let's see how we are working. Discover the best interior <br />
              design for your sweet home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="pt-10">
              <DarkButton text="View all project" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row pb-20 justify-center items-center gap-20 text-white ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={"/CarouselImage.jpg"}
              height={350}
              width={350}
              alt="reload"
            />
            <p className="text-4xl font-semibold pt-10">Modern Kitchen</p>
            <p className="pt-10">
              The style of the interior was defined as modern <br />
              in light colors. Main materials used in project <br /> are
              wallpaper etc.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={"/CarouselImage2.jpg"}
              height={350}
              width={350}
              alt="reload"
            />
            <p className="text-4xl font-semibold pt-10">Interior Work</p>
            <p className="pt-10">
              The entire interior is the beginning of the <br />
              history of the house, such as colors, lighting, <br /> and
              materials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={"/CarouselImage3.jpg"}
              height={350}
              width={350}
              alt="reload"
            />
            <p className="text-4xl font-semibold pt-10">Elegant Living Room</p>
            <p className="pt-10">
              This living room design seamlessly blends <br /> comfort with
              style, featuring a sleek TV setup <br />
              and a plush sofa perfect for relaxation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
