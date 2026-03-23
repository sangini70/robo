import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { PostCard } from '../components/PostCard';
import { posts } from '../posts';
import AdBlock from "../components/AdBlock";
export function Home() {
  return (
    <>
      <Helmet>
        <title>robo-advisor.kr - 로보어드바이저 투자 가이드</title>
        <meta name="description" content="초보자도 쉽게 이해할 수 있는 로보어드바이저 투자 가이드와 최신 트렌드를 확인하세요." />
        <link rel="canonical" href="https://robo-advisor.kr/" />
      </Helmet>
      
      <Hero />
<AdBlock slot="1473653131" />

<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

  <div className="mb-12 border-b border-neutral-900 pb-6">
    <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium block mb-3">
      Latest Updates
    </span>
    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
      최신 글
    </h2>
  </div>

  {/* 광고를 여기로 이동 */}
  <AdBlock slot="2875947290" />

  <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    {posts.map((post) => (
      <PostCard key={post.slug} post={post} />
    ))}
  </div>
        </div>
    </>
  );
};
