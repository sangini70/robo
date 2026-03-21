import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="py-16 sm:py-24 border-b border-neutral-900 mb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <span className="w-8 h-[1px] bg-white"></span>
              <span className="text-xs uppercase tracking-[0.15em] text-neutral-300 font-medium">Guide 01</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
              로보어드바이저로 시작하는<br className="hidden sm:block" />
              스마트한 자산관리
            </h1>
            <p className="text-base md:text-lg text-neutral-400 font-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              초보자도 쉽게 이해할 수 있는 로보어드바이저 투자 가이드와 최신 트렌드를 확인하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/post/what-is-robo-advisor"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest rounded-sm text-black bg-white hover:bg-neutral-200 transition-colors"
              >
                기초 가이드 읽기
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-800 text-xs font-medium uppercase tracking-widest rounded-sm text-white hover:bg-neutral-900 transition-colors"
              >
                사이트 소개
              </Link>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="flex-1 w-full max-w-md lg:max-w-none mx-auto">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3 rounded-sm overflow-hidden bg-neutral-900 relative">
              <img
                src="https://picsum.photos/seed/robohero/800/600.webp"
                alt="로보어드바이저 일러스트"
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
