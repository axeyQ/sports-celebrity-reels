'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const CategoryFilter = ({ categories, initialCategory = 'all' }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || initialCategory
  );
  const scrollContainerRef = useRef(null);
  const activeBtnRef = useRef(null);
  
  // Update URL when category changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (activeCategory === 'all') {
      params.delete('category');
    } else {
      params.set('category', activeCategory);
    }
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  }, [activeCategory, router, searchParams]);
  
  // Scroll active button into view
  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeBtn = activeBtnRef.current;
      
      // Calculate position to center the button
      const scrollLeft = activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
      
      // Smooth scroll to position
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);
  
  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  return (
    <div className="relative">
      {/* Fade indicators for horizontal scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-sports-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-sports-dark to-transparent z-10 pointer-events-none" />
      
      {/* Scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="flex space-x-2 overflow-x-auto scrollbar-hide py-2 px-4 -mx-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            ref={category.id === activeCategory ? activeBtnRef : null}
            className={`
              px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200
              ${
                category.id === activeCategory
                  ? 'bg-sports-primary text-white font-medium shadow-md'
                  : 'bg-gray-100 dark:bg-sports-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-sports-secondary/80'
              }
            `}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;