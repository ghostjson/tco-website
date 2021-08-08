import SocialIconBar from 'src/components/SocialIconBar';

type ServiceFooter = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  className: string;
};

const ServiceFooter = ({ children, title, subtitle, className }) => {
  return (
    <footer
      className={`text-white p-8 md:p-16  xl:p-24  font-calibri font-regular ${
        className ? className : ''
      }`}>
      <div className='flex justify-left xl:justify-between mb-0'>
        <h2 className='text-4xl uppercase tracking-wide text-left'>{title}</h2>
        <SocialIconBar className='hidden xl:flex' />
      </div>
      <div className='uppercase text-xl xl:text-2xl -mt-2'>{subtitle}</div>
      <section className='text-lg md:text-xl tracking-wide mt-6 xl:w-10/12'>
        {children}
      </section>
      <SocialIconBar className='flex xl:hidden justify-end mt-6' />
    </footer>
  );
};

export default ServiceFooter;
