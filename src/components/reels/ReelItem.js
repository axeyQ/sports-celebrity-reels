'use client';

import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';
import ReelControls from './ReelControls';

const ReelItem = ({ video, isActive, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false
  });
  
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(video.likes || 0);
  const [isSaved, setIsSaved] = useState(false);
  
  // Determine if the video should play based on visibility and active state
  const shouldPlay = isActive && inView;
  
  // Track video view once
  const [hasTrackedView, setHasTrackedView] = useState(false);
  
  useEffect(() => {
    if (shouldPlay && !hasTrackedView) {
      // In a real app, you'd make an API call to track the view
      console.log(`Tracking view for video: ${video.id}`);
      setHasTrackedView(true);
    }
  }, [shouldPlay, hasTrackedView, video.id]);
  
  // Handle like action
  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikeCount(prev => newLikedState ? prev + 1 : prev - 1);
    
    // In a real app, you'd make an API call here
    console.log(`${newLikedState ? 'Liked' : 'Unliked'} video: ${video.id}`);
  };
  
  // Handle save action
  const handleSave = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    
    // In a real app, you'd make an API call here
    console.log(`${newSavedState ? 'Saved' : 'Unsaved'} video: ${video.id}`);
  };
  
  // Handle share action
  const handleShare = () => {
    // In a real app, this would open a share dialog
    console.log(`Sharing video: ${video.id}`);
    alert(`Sharing video: ${video.title}`);
  };
  
  return (
    <div 
      ref={ref} 
      data-reel-item
      className="relative w-full max-w-xl mx-auto bg-white dark:bg-sports-secondary rounded-xl overflow-hidden shadow-md mb-4"
    >
      {/* Video Player */}
      <div className="aspect-[9/16] w-full bg-black overflow-hidden">
        <VideoPlayer 
          src={video.videoUrl} 
          poster={video.thumbnailUrl}
          playing={shouldPlay}
          preload={index < 3 ? "auto" : "none"}
        />
      </div>
      
      {/* Video Info */}
      <div className="p-4">
        <div className="flex items-start">
          <Link href={`/athlete/${video.athlete.id}`}>
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
              <Image
                src={video.athlete.profileImage}
                alt={video.athlete.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          </Link>
          
          <div className="flex-1 min-w-0">
            <Link href={`/athlete/${video.athlete.id}`} className="block hover:underline">
              <h3 className="font-bold text-lg truncate">{video.athlete.name}</h3>
            </Link>
            <p className="text-sports-gray text-sm">{video.athlete.sport}</p>
          </div>
        </div>
        
        <h2 className="font-semibold text-lg mt-3">{video.title}</h2>
        <p className="text-sports-gray mt-1 truncate-2-lines">{video.description}</p>
        
        {/* Controls */}
        <ReelControls 
          videoId={video.id}
          likes={likeCount}
          shares={video.shares}
          isLiked={isLiked}
          isSaved={isSaved}
          onLike={handleLike}
          onShare={handleShare}
          onSave={handleSave}
        />
        
        {/* Video Stats */}
        <div className="mt-3 text-sm text-sports-gray flex items-center">
          <span>{new Intl.NumberFormat().format(video.views)} views</span>
          <span className="mx-2">•</span>
          <span>
            {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReelItem;