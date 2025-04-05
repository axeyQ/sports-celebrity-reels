'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-sports-dark/90 backdrop-blur-md shadow-md' : 
                    'bg-transparent'
      }`}
    >
      <div className="sports-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image 
                src="/logo.svg" 
                alt="Sports Reels Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-sports-primary">SportsReels</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/explore" className="nav-link">Explore</Link>
            <Link href="/athletes" className="nav-link">Athletes</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="sports-button-secondary">
              Sign In
            </button>
            <button className="sports-button-primary">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-sports-secondary shadow-lg rounded-b-xl animate-fadeIn">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-sports-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/explore" 
                className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-sports-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                href="/athletes" 
                className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-sports-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Athletes
              </Link>
              <Link 
                href="/about" 
                className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-sports-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col pt-2 space-y-2">
                <button className="sports-button-secondary w-full">
                  Sign In
                </button>
                <button className="sports-button-primary w-full">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;