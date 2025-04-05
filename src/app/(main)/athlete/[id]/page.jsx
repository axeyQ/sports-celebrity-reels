import Link from 'next/link';
import Image from 'next/image';
import { getAthleteById, getVideosByAthlete } from '@/lib/data/mockData';
import VideoReel from '@/components/reels/VideoReel';

export async function generateMetadata({ params }) {
  const athlete = getAthleteById(params.id);
  
  if (!athlete) {
    return {
      title: 'Athlete Not Found',
      description: 'The requested athlete profile could not be found.'
    };
  }
  
  return {
    title: `${athlete.name} - Sports Celebrity Reels`,
    description: `Explore ${athlete.name}'s legendary ${athlete.sport} career through AI-generated video reels.`
  };
}

export default function AthletePage({ params }) {
  const athlete = getAthleteById(params.id);
  const videos = getVideosByAthlete(params.id);
  
  if (!athlete) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="sports-container">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Athlete Not Found</h1>
            <p className="text-sports-gray mb-8">
              The athlete you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/" className="sports-button-primary">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-16">
      {/* Hero section with athlete cover image */}
      <div className="h-[30vh] md:h-[40vh] bg-sports-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-sports-primary opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sports-dark"></div>
      </div>
      
      <div className="sports-container relative -mt-20">
        {/* Athlete Profile Header */}
        <div className="bg-white dark:bg-sports-secondary rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="md:w-1/4 flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-sports-secondary shadow-lg">
                <div className="w-full h-full bg-sports-gray relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    {athlete.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-2">{athlete.name}</h1>
              <p className="text-sports-gray mb-4">{athlete.sport}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-sports-dark px-4 py-2 rounded-full text-center">
                  <span className="block font-bold text-xl">{athlete.videoCount}</span>
                  <span className="text-sm text-sports-gray">Videos</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-sports-dark px-4 py-2 rounded-full text-center">
                  <span className="block font-bold text-xl">{new Intl.NumberFormat().format(athlete.followers)}</span>
                  <span className="text-sm text-sports-gray">Followers</span>
                </div>
                
                <div className="bg-gray-100 dark:bg-sports-dark px-4 py-2 rounded-full text-center">
                  <span className="block font-bold text-xl">{new Intl.NumberFormat().format(athlete.likes)}</span>
                  <span className="text-sm text-sports-gray">Likes</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="sports-button-primary">
                  Follow
                </button>
                <button className="sports-button-secondary">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bio Section */}
        <div className="bg-white dark:bg-sports-secondary rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {athlete.biography}
          </p>
          
          {athlete.career && (
            <div className="mb-4">
              <span className="font-semibold">Career: </span>
              <span>{athlete.career}</span>
            </div>
          )}
          
          {athlete.team && (
            <div className="mb-4">
              <span className="font-semibold">Team: </span>
              <span>{athlete.team}</span>
            </div>
          )}
        </div>
        
        {/* Videos Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Videos</h2>
          
          {videos.length > 0 ? (
            <VideoReel initialVideos={videos} />
          ) : (
            <div className="text-center py-12 bg-white dark:bg-sports-secondary rounded-xl shadow-md">
              <p className="text-sports-gray mb-4">No videos available for this athlete yet.</p>
              <button className="sports-button-secondary">
                Request Videos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}