import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group cursor-pointer flex flex-col">
      <Link to={`/post/${post.slug}`} className="block w-full aspect-[4/3] bg-neutral-900 overflow-hidden mb-6 relative rounded-sm">
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
      
      <div className="flex justify-between items-start mb-3 gap-4">
        <h3 className="text-xl font-medium tracking-tight text-neutral-100 group-hover:text-white transition-colors">
          <Link to={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <span className="text-xs text-neutral-500 font-medium tracking-[0.2em] uppercase shrink-0 mt-1">
          {post.category}
        </span>
      </div>
      
      <p className="text-sm text-neutral-400 font-light leading-relaxed line-clamp-2 mb-4">
        {post.description}
      </p>
      
      <div className="mt-auto flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs text-neutral-600">#{tag}</span>
          ))}
        </div>
        <time dateTime={post.date} className="text-xs text-neutral-600 font-light">
          {post.date}
        </time>
      </div>
    </article>
  );
}
