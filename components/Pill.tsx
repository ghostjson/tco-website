import { motion } from 'framer-motion';
type PillType = {
  className?: string;
  children: React.ReactNode;
};
const Pill = ({ className, children }: PillType) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${className} rounded-full flex items-center justify-center`}>
      {children}
    </motion.span>
  );
};

export default Pill;
