import { categories, getTrendingVideos } from '@/lib/data/mockData';
import VideoReel from '@/components/reels/VideoReel';
import CategoryFilter from '@/components/ui/CategoryFilter';

export const metadata = {
  title: 'Sports Celebrity Reels - Discover Sports History',
  description: 'Explore AI-generated video reels of sports celebrities and their greatest moments in history.',
};

export default function HomePage() {
  // In a real app, we would fetch this data from an API
  const trendingVideos = getTrendingVideos(6);
  
  return (
    <div className="min-h-screen pb-16">
      {/* Hero section */}
      <section className="relative h-[50vh] md:h-[70vh] bg-sports-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sports-dark z-10" />
        
        {/* Placeholder for video background */}
        <div className="absolute inset-0 bg-sports-primary opacity-40"></div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl">
            Discover Sports History Through AI-Generated Reels
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Immerse yourself in the legendary moments of sports icons, 
            brought to life through cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="sports-button-primary text-lg px-8 py-3">
              Explore Reels
            </button>
            <button className="sports-button-secondary text-lg px-8 py-3">
              Browse Athletes
            </button>
          </div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-12">
        <div className="sports-container">
          <h2 className="text-3xl font-bold mb-6">Popular Categories</h2>
          
          <CategoryFilter categories={categories} />
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Sports History Reels</h2>
            
            {/* Video Reel Component */}
            <VideoReel initialVideos={trendingVideos} />
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 bg-gray-50 dark:bg-sports-dark">
        <div className="sports-container text-center">
          <h2 className="text-3xl font-bold mb-12">Why Sports Reels?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-sports-secondary rounded-xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-sports-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Narratives</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced AI creates compelling, factual stories about the greatest moments in sports history.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-sports-secondary rounded-xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-sports-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Immersive Reels Format</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seamless vertical scrolling experience optimized for mobile viewing, just like your favorite social apps.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-sports-secondary rounded-xl shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-sports-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality & Accuracy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each reel is meticulously researched and fact-checked to ensure historical accuracy and educational value.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-sports-primary text-white">
        <div className="sports-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Sports History?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sports fans learning about their favorite athletes through our AI-generated reels.
          </p>
          <button className="bg-white text-sports-primary hover:bg-gray-100 sports-button text-lg px-8 py-3">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}