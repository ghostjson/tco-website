import BlogCard from 'src/components/BlogCard';

interface BlogPreviewProps {
  blogData: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    cover_image: string;
  }[];
}
const BlogPreview: React.FC<BlogPreviewProps> = ({ blogData }) => {
  return (
    <div className='flex flex-col xl:flex-row justify-between xl:justify-evenly items-center space-y-2 px-2 xl:px-16 my-6 xl:my-20'>
      {blogData.map((blog, index) => (
        <BlogCard
          variant={index % 2 === 0 ? 'light' : 'dark'}
          image={blog.cover_image}
          key={index}
          title={blog.title}
          slug={blog.slug}
        />
      ))}
    </div>
  );
};

export default BlogPreview;
