import { motion } from "framer-motion";

const Steps = () => {
  return (
    <div className="bg-[#f2efed] mt-14 p-5">
      <div className="text-center p-10">
        <motion.p
          className="font-bold text-5xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          See How We Work
        </motion.p>
        <motion.p
          className="pt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Collaborate with your designer online on our easy <br /> to use
          platform
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row justify-around">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-[#5f5f5f]">STEP 01</span>
            <p className="text-4xl font-semibold">Get Started</p>
            <p className="py-5">
              Share your photos and inspiration, in addition to the <br />
              things you want to keep so we can match you with the <br />
              perfect designer for your space, style, and budget.
            </p>
            <div className="h-[1px] bg-gray-400 rounded my-4"></div>

            <span className="text-[#5f5f5f]">STEP 02</span>
            <p className="text-4xl font-semibold">Design Together</p>
            <p className="py-5">
              See your space transformed online and collaborate with <br />
              your designer to share what you like and dislike.
            </p>
            <div className="h-[1px] bg-gray-400 rounded my-4"></div>

            <span className="text-[#5f5f5f]">STEP 03</span>
            <p className="text-4xl font-semibold">Shop & Save</p>
            <p className="py-5">
              After you receive your final design, a curated shopping <br />
              list of products can be purchased.
            </p>
            <div className="h-[1px] bg-gray-400 rounded mb-10 md:mb-0"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={"/ContentImage2.jpg"}
            alt="reload"
            height={300}
            width={500}
            className="rounded"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;
