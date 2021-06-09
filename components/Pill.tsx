type PillType = {
  className?: string;
  children: React.ReactNode;
};
const Pill = ({ className, children }: PillType) => {
  return (
    <span
      className={`py-2 px-6 ${className} rounded-full flex items-center justify-center`}
    >
      {children}
    </span>
  );
};

export default Pill;
