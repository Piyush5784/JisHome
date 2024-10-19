import React from "react";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  desc: string;
  price: string[];
  options: {
    icon: React.ReactNode;
    info: string;
  }[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  desc,
  price,
  options,
}) => {
  return (
    <motion.div
      className="bg-white shadow-lg border border-black rounded-lg p-6 md:w-[350px]"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        <h2 className="font-bold text-lg text-black">{title}</h2>
        <p className="text-gray-500">{desc}</p>
        <div className="flex items-baseline mt-4">
          <span className="text-4xl text-black">
            {price[0]}
            {price[1]}
          </span>
          <span className="text-lg text-gray-500 ml-2">/{price[2]}</span>
        </div>
      </div>
      <ul className="mb-6">
        {options.map((option, index) => (
          <li key={index} className="flex items-center mb-2 text-gray-700">
            {option.icon}
            <span className="ml-2">{option.info}</span>
          </li>
        ))}
      </ul>
      <motion.button
        className="w-full bg-black text-white hover:bg-white hover:text-black py-2 rounded-full border hover:border-black duration-150"
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;
