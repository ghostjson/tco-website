import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '@components/Layout';
import Footer from '@components/Footer';

export default function Article({ content, meta }) {
  return (
    <Layout>
      <img
        src={meta.cover_image}
        alt=''
        className='w-full h-64 object-cover brightness-75'
      />
      {/* <div className='pb-16 pt-8 px-2 xl:px-64'> */}
      <div className='grid grid-cols-1 md:grid-cols-6 pb-16 pt-8'>
        <div className='col-span-0 md:col-span-1'></div>
        <ReactMarkdown className='markdown col-span-4'>{content}</ReactMarkdown>
        <div className='col-span-0 md:col-span-1'></div>
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/articles'));

  const paths = files.map((fname) => ({
    params: {
      slug: fname.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  // getting file contents from slug
  const mdWithMeta = fs.readFileSync(
    path.join('src/articles/', `${slug}.md`),
    'utf-8'
  );

  const { content, data: meta } = matter(mdWithMeta);

  return {
    props: {
      content,
      meta,
    },
  };
}
