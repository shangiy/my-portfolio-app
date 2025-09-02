
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    toggleVisibility();
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    } else {
      setScrollProgress(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const circumference = 2 * Math.PI * 20; // 2 * pi * r (radius is 20)
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      aria-label="Scroll to top"
    >
      <div className="relative h-12 w-12">
        <svg
          className="h-full w-full"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="rotate-[-90deg] origin-center"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUp className="h-6 w-6 text-primary" />
        </div>
      </div>
    </button>
  );
}
