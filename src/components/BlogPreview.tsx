import BlogCard from 'src/components/BlogCard';

type BlogPreviewProps = {
  blogData: {
    title: string;
    image: string;
  }[];
};

const BlogPreview: React.FC<BlogPreviewProps> = ({ blogData }) => {
  return (
    <div className='flex flex-col xl:flex-row justify-between xl:justify-evenly items-center space-y-2 px-2 xl:px-16 my-6 xl:my-20'>
      {blogData.map((blog, index) => (
        <BlogCard
          variant={index % 2 === 0 ? 'light' : 'dark'}
          image={blog.image}
          key={index}
          title={blog.title}
        />
      ))}
    </div>
  );
};

export default BlogPreview;
