import { motion } from "framer-motion";
import { PiBatteryVerticalFullFill } from "react-icons/pi";
import { PiBatteryVerticalLowBold } from "react-icons/pi";
// eslint-disable-next-line react/prop-types
const Logo = ({ isPowerOn }) => {
  return (
    <div className="absolute top-2 right-5 flex items-center gap-1.5 text-2xl font-bold">
    <h2>Battery</h2>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      key={isPowerOn ? "full" : "low"}
    >
      {isPowerOn ? (
        <PiBatteryVerticalLowBold />
      ) : (
        <PiBatteryVerticalFullFill />
      )}
    </motion.div>
  </div>
  );
};

export default Logo;
