const SocialIconBar = ({ className }: { className: string }) => {
  return (
    <span className={`flex space-x-2 ${className}`}>
      <a href='https://api.whatsapp.com/send?phone=6583337803'>
        <img
          src='/icons/whatsapp.svg'
          alt='whatsapp icon'
          className='h-12 w-12'
        />
      </a>
      <a href='https://www.facebook.com/thecreativeoracle/' target='_blank'>
        <img
          src='/icons/facebook.svg'
          alt='facebook icon'
          className='h-12 w-12'
        />
      </a>
      <a href='#'>
        <img src='/icons/share.svg' alt='share icon' className='h-12 w-12' />
      </a>
    </span>
  );
};

export default SocialIconBar;
