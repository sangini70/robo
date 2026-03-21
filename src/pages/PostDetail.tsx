import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Markdown from 'react-markdown';
import { posts } from '../data/posts';
import { AdSense } from '../components/AdSense';

export function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>{post.title} - robo-advisor.kr</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.thumbnail} />
        <link rel="canonical" href={`https://robo-advisor.kr/post/${post.slug}`} />
      </Helmet>

      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">{post.category}</span>
          <span className="w-8 h-[1px] bg-neutral-800"></span>
          <time dateTime={post.date} className="text-xs text-neutral-500 font-light">{post.date}</time>
        </div>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-neutral-400 font-light leading-relaxed">
          {post.description}
        </p>
      </header>

      <div className="w-full aspect-[21/9] rounded-sm overflow-hidden mb-16 bg-neutral-900 relative">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 border border-white/5"></div>
      </div>

      {/* Top AdSense */}
      <AdSense slotId="post-top-ad" className="mb-12" />

      <div className="prose prose-lg prose-invert prose-neutral mx-auto leading-relaxed">
        <Markdown>{post.content}</Markdown>
      </div>

      {/* Middle AdSense (Simulated placement) */}
      <AdSense slotId="post-middle-ad" className="my-12" />

      <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap gap-3">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs font-medium tracking-widest uppercase text-neutral-500 border border-neutral-800 px-3 py-1.5 rounded-sm">
            #{tag}
          </span>
        ))}
      </div>

      {/* Bottom AdSense */}
      <AdSense slotId="post-bottom-ad" className="mt-12" />
    </article>
  );
}
