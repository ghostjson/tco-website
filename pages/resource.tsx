import BlogPreview from '@components/BlogPreview';
import Layout from '@components/Layout';
import QuizIntro from '@components/QuizIntro';
import SocialIconBar from '@components/SocialIconBar';

const Resource = () => {
  return (
    <Layout>
      <div className='h-[40vh] md:h-[64vh] xl:h-screen  relative flow-root bg-gradient-to-tr from-[#783333] via-[#863939] to-[#B14C4C]'>
        <img
          src='/illustrations/resource-banner.png'
          alt=''
          className='absolute  -bottom-0 xl:-bottom-0'
        />
      </div>
      <div className='relative bg-white -mt-2 z-20 h-20'>
        <SocialIconBar className='absolute right-1 top-2 md:right-8 scale-75 xl:scale-100' />
      </div>
      <QuizIntro className='px-2 mb-10' />

      {/* preview of all the blogs  */}
      <BlogPreview blogData={dummyBlogs} />
    </Layout>
  );
};

export default Resource;

const dummyBlogs = [
  {
    title: 'Discover the most effective brand image for your company.',
    image: 'https://dummyimage.com/mediumrectangle',
  },
  {
    title:
      'Choosing the right color can affect your sales, find out how people did it',
    image: 'https://dummyimage.com/mediumrectangle',
  },
  {
    title:
      'No traffic to your website? Make the most of your web assets to boost your website',
    image: 'https://dummyimage.com/mediumrectangle',
  },
];
