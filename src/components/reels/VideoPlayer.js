'use client';

import { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ src, poster, playing = false, preload = 'metadata' }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  
  // Handle play/pause based on visibility
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (playing) {
      try {
        // Using Promise to handle autoplay restrictions
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
            })
            .catch(err => {
              // Auto-play was prevented, handle accordingly
              console.warn('Autoplay was prevented:', err);
              // We could show a play button here for user interaction
              setError('Tap to play');
            });
        }
      } catch (err) {
        setError('Failed to play video');
        console.error(err);
      }
    } else {
      videoRef.current.pause();
    }
  }, [playing]);

  // Handle video loaded event
  const handleLoaded = () => {
    setIsLoaded(true);
    setError(null);
  };
  
  // Handle mute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  
  // Handle manual play for error recovery
  const handleManualPlay = () => {
    if (!videoRef.current || !error) return;
    
    videoRef.current.play()
      .then(() => {
        setError(null);
      })
      .catch(err => {
        console.error('Manual play failed:', err);
        setError('Video playback error');
      });
  };
  
  return (
    <div className="relative w-full h-full bg-black">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      {error && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 cursor-pointer"
          onClick={handleManualPlay}
        >
          <div className="bg-black bg-opacity-70 px-4 py-2 rounded-full text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        poster={poster}
        preload={preload}
        playsInline
        muted={isMuted}
        loop
        onLoadedData={handleLoaded}
        onError={() => setError('Failed to load video')}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Mute/Unmute button */}
      <button 
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-20"
        onClick={toggleMute}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;