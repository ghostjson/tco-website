import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '@components/Layout';

export default function Article({ content, meta }) {
  return (
    <Layout>
      <img
        src={meta.cover_image}
        alt=''
        className='w-full h-64 object-cover brightness-75'
      />
      <ReactMarkdown className='markdown'>{content}</ReactMarkdown>
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
