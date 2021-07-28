import React from 'react';

type BlogCardProps = {
  variant: 'dark' | 'light';
  title: string;
  image: string;
};

const BlogCard = ({ variant, title, image }: BlogCardProps) => (
  <article
    className={`${
      variant === 'light' ? ' bg-[#999999]' : 'bg-[#666666]'
    } p-2 pl-4 xl:pl-2 w-full xl:w-1/6  flex xl:flex-col-reverse justify-between  space-x-1 text-white h-16 xl:h-auto xl:items-center`}>
    <p className='line-clamp-2 xl:line-clamp-none xl:py-2'>{title}</p>
    <img src={image} alt={title} className='w-12 xl:w-full self-center' />
  </article>
);

export default BlogCard;
