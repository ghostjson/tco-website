import useStore from 'src/store';

const RequestPortfolioModel = () => {
  const toggleModel = useStore((state) => state.toggleModel);
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
          <label htmlFor='name'>Name:</label>
          <input
            className='border-2 p-2 rounded mb-2'
            type='text'
            name='name'
            id='name'
          />
          <label htmlFor='phone'>Phone No:</label>
          <input
            className='border-2 p-2 rounded mb-2'
            type='text'
            name='phone'
            id='phone'
          />
          <label htmlFor='portolio'>Portfolio Preference</label>
          <select
            name='portolio'
            id='portolio'
            className='py-2 border-2 mb-4 cursor-pointer'>
            <option value='Web'>Web</option>
            <option value='Branding'>Branding</option>
            <option value='Marketing'>Marketing</option>
          </select>

          <button className='bg-gray-700 py-3 px-8 text-white font-calibri'>
            Send your Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestPortfolioModel;
