import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <Link
            href={ctaLink}
            className="inline-block px-8 py-4 bg-white text-yellow-600 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
          >
            {ctaText}
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
};
