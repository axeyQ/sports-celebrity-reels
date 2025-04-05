'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ReelItem from './ReelItem';
import Loading from '@/components/ui/Loading';

const VideoReel = ({ initialVideos = [] }) => {
  const [videos, setVideos] = useState(initialVideos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const reelContainerRef = useRef(null);
  
  // Function to fetch more videos when the user scrolls near the end
  const fetchMoreVideos = async () => {
    if (loading || !hasMore) return;
    
    try {
      setLoading(true);
      const lastVideoId = videos[videos.length - 1]?.id;
      
      // In a real app, you'd fetch from an API
      // For now, we'll simulate a fetch with a timeout
      setTimeout(() => {
        // Simulate 3 more videos
        const newVideos = Array(3).fill(0).map((_, index) => ({
          id: `simulated-${lastVideoId}-${index}`,
          title: `Simulated Video ${index + 1}`,
          description: 'This is a simulated video for infinite scrolling demonstration',
          videoUrl: '/placeholder/videos/placeholder.mp4',
          thumbnailUrl: '/placeholder/thumbnails/placeholder.jpg',
          duration: 60,
          views: Math.floor(Math.random() * 100000),
          likes: Math.floor(Math.random() * 10000),
          shares: Math.floor(Math.random() * 1000),
          athlete: {
            id: 'a1',
            name: 'Simulated Athlete',
            sport: 'Sports',
            profileImage: '/placeholder/athletes/placeholder.jpg'
          }
        }));
        
        // Add the new videos to our state
        setVideos(prev => [...prev, ...newVideos]);
        setLoading(false);
        
        // Set hasMore to false after a few pages to demonstrate the end
        if (videos.length > 15) {
          setHasMore(false);
        }
      }, 1500);
      
    } catch (error) {
      console.error('Error fetching more videos:', error);
      setLoading(false);
    }
  };

  // Handle scroll events to determine current video
  const handleScroll = () => {
    if (!reelContainerRef.current) return;
    
    const container = reelContainerRef.current;
    const items = container.querySelectorAll('[data-reel-item]');
    
    let closestItem = 0;
    let minDistance = Infinity;
    
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const distance = Math.abs(rect.top + rect.height / 2 - center);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestItem = index;
      }
    });
    
    if (closestItem !== currentIndex) {
      setCurrentIndex(closestItem);
    }
    
    // Check if we need to load more videos
    // If we're viewing the last 2 videos, fetch more
    if (closestItem >= videos.length - 2 && !loading && hasMore) {
      fetchMoreVideos();
    }
  };
  
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videos, currentIndex, loading, hasMore]);
  
  return (
    <div className="relative">
      <div ref={reelContainerRef} className="space-y-2">
        {videos.map((video, index) => (
          <ReelItem
            key={video.id}
            video={video}
            isActive={index === currentIndex}
            index={index}
          />
        ))}
        
        {loading && (
          <div className="py-8 flex justify-center">
            <Loading size="medium" color="primary" text="Loading more videos..." />
          </div>
        )}
        
        {!hasMore && videos.length > 0 && (
          <div className="py-8 text-center text-sports-gray">
            <p>You've reached the end of the feed</p>
            <button 
              className="mt-4 sports-button-secondary"
              onClick={() => setCurrentIndex(0)}
            >
              Back to top
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoReel;