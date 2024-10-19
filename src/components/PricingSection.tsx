import { motion } from "framer-motion";
import React from "react";
import { BiMinusCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import PricingCard from "./PricingCard"; // Adjust the path as necessary

export const PricingSection: React.FC = () => {
  const cards = [
    {
      title: "Basic",
      desc: "Ideal for small spaces",
      price: ["$", "199", "project"],
      options: [
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Initial consultation",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Mood board creation",
        },
        {
          icon: <BiMinusCircle className="h-5 w-5 text-black" />,
          info: "3D renderings",
        },
        {
          icon: <BiMinusCircle className="h-5 w-5 text-black" />,
          info: "Furniture sourcing",
        },
        {
          icon: <BiMinusCircle className="h-5 w-5 text-black" />,
          info: "On-site visits",
        },
      ],
    },
    {
      title: "Standard",
      desc: "Perfect for medium-sized projects",
      price: ["$", "499", "project"],
      options: [
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Initial consultation",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Mood board creation",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "3D renderings",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Furniture sourcing",
        },
        {
          icon: <BiMinusCircle className="h-5 w-5 text-black" />,
          info: "On-site visits",
        },
      ],
    },
    {
      title: "Premium",
      desc: "Comprehensive design for large spaces",
      price: ["$", "999", "project"],
      options: [
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Initial consultation",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Mood board creation",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "3D renderings",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "Furniture sourcing",
        },
        {
          icon: <BsCheckCircleFill className="h-5 w-5 text-black" />,
          info: "On-site visits",
        },
      ],
    },
  ];

  return (
    <motion.section
      className="md:px-40 p-5 border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto mt-10">
        <motion.h1
          className="mb-4 font-bold text-lg text-black mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Design Packages
        </motion.h1>
        <motion.h2
          className="mb-4 text-2xl lg:text-4xl max-w-2xl text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Choose a package that fits your space and style.
        </motion.h2>
        <motion.p
          className="mb-10 text-gray-500 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Compare the features of each package below to find the perfect match
          for your interior design needs.
        </motion.p>
        <div className="flex flex-col md:flex-row w-full justify-around md:gap-20 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <PricingCard {...card} />
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-10 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          All packages include free unlimited revisions and premium support. You
          also have 30 days to request a refund.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PricingSection;
