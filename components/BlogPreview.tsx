type BlogPreviewProps = {
  blogData: {
    title: string;
    image: string;
  }[];
};

const BlogPreview: React.FC<BlogPreviewProps> = ({ blogData }) => {
  return (
    <div className='flex flex-col items-center space-y-2 px-2 my-6 xl:my-20'>
      {blogData.map((blog, index) => (
        <article
          className={`${
            index % 2 === 0 ? ' bg-[#999999]' : 'bg-[#666666]'
          } p-2 pl-4 w-full xl:w-1/4  flex justify-between space-x-1 text-white h-16`}>
          <p className='line-clamp-2'>{blog.title}</p>
          <img src={blog.image} alt={blog.title} className='w-12' />
        </article>
      ))}
    </div>
  );
};

export default BlogPreview;
