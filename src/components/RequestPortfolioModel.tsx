import { useState } from 'react';
import useStore from 'src/store';

const RequestPortfolioModel = () => {
  const toggleModel = useStore((state) => state.toggleModel);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preference, setPreference] = useState('Web');
  const [errors, setErrors] = useState('');

  const generateLink = () => {
    if (name === '' || phone === '') {
      setErrors('Please fill all fields');
      setTimeout(() => {
        setErrors('');
      }, 3000);
    }

    if (name !== '' && phone !== '') {
      const link =
        'https://api.whatsapp.com/send?phone=6282268472818&text=' +
        'Hi%2C%20%2AThe%20Creative%20Oracle%2A.%20%0AI%20am%20interested%20in%20your%20portfolio.The%20following%20are%20my%20details%0A%2AName%2A%20%3A%20' +
        name +
        '%0A%2APhone%2A%3A%20' +
        phone +
        '%0A%2APortfolio%20Preference%2A%3A%20' +
        preference;

      location.assign(link);
    }
  };

  return (
    <div className='absolute inset-0 z-[100]'>
      <div className='relative w-full h-screen'>
        <div
          className='bg-black bg-opacity-30 w-full h-full absolute'
          onClick={() => toggleModel()}></div>
        <div className='bg-white p-4 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-4xl font-bold text-center font-agaramondPro px-10 pb-2'>
            Portfolio Request
          </h1>
          {errors !== '' && (
            <div className='bg-red-300 border-1 border-red-700 py-2 px-4'>
              {errors}
            </div>
          )}
          <label htmlFor='name'>Name:</label>
          <input
            className='border-2 p-2 rounded mb-2'
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='phone'>Phone No:</label>
          <input
            className='border-2 p-2 rounded mb-2'
            type='text'
            name='phone'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor='portolio'>Portfolio Preference</label>
          <select
            name='portolio'
            id='portolio'
            className='py-2 border-2 mb-4 cursor-pointer'
            value={preference}
            onChange={(e) => setPreference(e.target.value)}>
            <option value='Web'>Web</option>
            <option value='Branding'>Branding</option>
            <option value='Marketing'>Marketing</option>
          </select>

          <button
            className='bg-gray-700 py-3 px-8 text-white font-calibri'
            onClick={generateLink}>
            Send your Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestPortfolioModel;
