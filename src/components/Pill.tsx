import { motion } from 'framer-motion';
type PillType = {
  className?: string;
  children: React.ReactNode;
};
const Pill = ({ className, children }: PillType) => {
  return (
    <span className={`${className} flex items-center justify-center`}>
      {children}
    </span>
  );
};

export default Pill;
