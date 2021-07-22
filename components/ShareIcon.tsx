import { useState } from 'react';
import {} from 'react-icons/ai';
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail, HiX } from 'react-icons/hi';

const ShareIcon = () => {
  const [showShareIcons, setShowShareIcons] = useState<boolean>(false);
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: 'The Creative Oracle',
        url: 'https://the-creative-oracle.netlify.app/',
      });
    } else {
      setShowShareIcons(true);
    }
  }
  return (
    <span className='cursor-pointer relative'>
      <img
        src='/icons/share.svg'
        alt='share icon'
        className='h-12 w-12'
        onClick={handleShare}
      />
      {showShareIcons && (
        <div className='flex items-center absolute top-[-120%] xl:top-[-105%] right-0 space-x-2 '>
          <div className='flex flex-col justify-center space-y-4'>
            <span className='cursor-pointer bg-white p-2 rounded-full border-2 border-blue-400 hover:bg-blue-400 flex items-center justify-center text-blue-400 hover:text-white hover:border-white'>
              <FaTelegramPlane className='w-6 h-6' />
            </span>
            <span className='cursor-pointer bg-white p-2 rounded-full border-2 border-blue-300 hover:bg-blue-300 flex items-center justify-center text-blue-300 hover:text-white hover:border-white'>
              <FaTwitter className='w-6 h-6' />
            </span>
          </div>
          <div className='flex flex-col justify-center space-y-4'>
            <span className='cursor-pointer bg-white p-2 rounded-full border-2 border-green-400 hover:bg-green-400 flex items-center justify-center text-green-400 hover:text-white hover:border-white'>
              <FaWhatsapp className='w-6 h-6' />
            </span>
            <span className='cursor-pointer bg-white p-2 rounded-full border-2 border-blue-500 hover:bg-blue-500 flex items-center justify-center text-blue-500 hover:text-white hover:border-white'>
              <FaFacebookF className='w-6 h-6' />
            </span>
            <span className='cursor-pointer bg-white p-2 rounded-full border-2 border-red-800 hover:bg-red-800 flex items-center justify-center text-red-800 hover:text-white hover:border-white'>
              <HiOutlineMail className='w-6 h-6' />
            </span>
          </div>
          <div className='flex flex-col justify-center space-y-4'>
            <span
              className='bg-white p-2 rounded-full border-2 border-black hover:bg-black flex items-center justify-center text-black hover:text-white hover:border-white'
              onClick={() => {
                setShowShareIcons(false);
              }}>
              <HiX className='w-8 h-8' />
            </span>
          </div>
        </div>
      )}
    </span>
  );
};

export default ShareIcon;
