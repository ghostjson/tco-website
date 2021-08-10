import BlogPreview from 'src/components/BlogPreview';
import BoldHeading from 'src/components/BoldHeading';
import Layout from 'src/components/Layout';
import QuizIntro from 'src/components/QuizIntro';
import SocialIconBar from 'src/components/SocialIconBar';

const Resource = ({ title, content, quiz }) => {
  return (
    <Layout>
      <div className='h-[60vh] xl:h-screen  relative flow-root bg-gradient-to-tr from-[#783333] via-[#863939] to-[#B14C4C]'>
        <div className='absolute top-20 px-8 left-1/2 transform -translate-x-1/2 w-full xl:w-auto'>
          <BoldHeading heading={title} />
          <p className='font-agaramondPro text-center text-white mt-5 text-sm xl:text-lg w-full xl:w-1/2 xl:transform xl:translate-x-1/2'>
            {content}
          </p>
        </div>
        <img
          src='/illustrations/resource-banner.png'
          alt=''
          className='absolute  -bottom-0 xl:-bottom-0'
        />
      </div>
      <div className='relative bg-white -mt-2 z-20 h-20'>
        <SocialIconBar className='absolute right-1 top-2 md:right-8 scale-75 xl:scale-100' />
      </div>
      <QuizIntro className='px-2 mb-10' data={quiz} />

      {/* preview of all the blogs  */}
      <BlogPreview blogData={dummyBlogs} />
    </Layout>
  );
};

export default Resource;

export async function getStaticProps() {
  console.log(`fetching to ${process.env.CMS_URL}/resource`);

  const res = await fetch(`${process.env.CMS_URL}/resource`);
  const data: any = await res.json();
  return {
    props: {
      title: data.Title,
      content: data.Content,
      quiz: data.Quiz,
    },
  };
}

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
