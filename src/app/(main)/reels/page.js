import { categories, getLatestVideos } from '@/lib/data/mockData';
import VideoReel from '@/components/reels/VideoReel';
import CategoryFilter from '@/components/ui/CategoryFilter';

export const metadata = {
  title: 'Sports Reels - Vertical Feed',
  description: 'Explore sports history with our vertical video reels feed.',
};

export default function ReelsPage() {
  // In a real app, we would fetch from an API based on the filter
  const videos = getLatestVideos(10);
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="sports-container">
        <h1 className="text-3xl font-bold mb-6">Sports History Reels</h1>
        
        <CategoryFilter categories={categories} />
        
        <div className="mt-8">
          <VideoReel initialVideos={videos} />
        </div>
      </div>
    </div>
  );
}