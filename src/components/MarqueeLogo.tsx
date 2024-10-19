import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { BsDropbox, BsSlack, BsSnapchat } from "react-icons/bs";
import { FaSteamSquare } from "react-icons/fa";

const MarqueeLogo = () => {
  const marqueeItems = [
    { label: "Google", icon: null },
    { label: "DropBox", icon: <BsDropbox size={30} /> },
    { label: "Slack", icon: <BsSlack size={30} /> },
    { label: "Snapchat", icon: <BsSnapchat size={30} /> },
    { label: "Zoom", icon: null },
    { label: "Stream", icon: <FaSteamSquare size={30} /> },
    { label: "Coinbase", icon: null },
  ];

  return (
    <div className="p-5 pt-8 opacity-60">
      <Marquee>
        <div className="flex gap-24 overflow-hidden">
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item.icon && item.icon} {/* Only render icon if present */}
              <p className="text-2xl font-bold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeLogo;
