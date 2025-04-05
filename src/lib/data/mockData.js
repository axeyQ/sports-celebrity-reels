// Mock data for development

export const athletes = [
    {
      id: 'a1',
      name: 'Michael Jordan',
      sport: 'Basketball',
      team: 'Chicago Bulls',
      career: '1984-2003',
      profileImage: '/placeholder/athletes/michael-jordan.jpg',
      coverImage: '/placeholder/covers/michael-jordan-cover.jpg',
      followers: 1250000,
      likes: 3800000,
      videoCount: 15,
      biography: 'Michael Jeffrey Jordan is a former American professional basketball player and businessman. His biography on the official NBA website states: "By acclamation, Michael Jordan is the greatest basketball player of all time." He played fifteen seasons in the NBA, winning six NBA championships with the Chicago Bulls.',
      highlights: [
        { year: '1991', text: 'First NBA Championship' },
        { year: '1992', text: 'Second NBA Championship & Olympic Gold Medal' },
        { year: '1993', text: 'Three-peat: Third NBA Championship' },
        { year: '1996', text: 'Fourth NBA Championship after return from retirement' },
        { year: '1997', text: 'Fifth NBA Championship' },
        { year: '1998', text: 'Sixth NBA Championship & Finals MVP' }
      ],
      awards: [
        { name: 'NBA MVP', year: '1988, 1991, 1992, 1996, 1998' },
        { name: 'NBA Finals MVP', year: '1991, 1992, 1993, 1996, 1997, 1998' },
        { name: 'NBA All-Star', year: '1985-1993, 1996-1998, 2002, 2003' },
        { name: 'NBA Scoring Champion', year: '1987-1993, 1996-1998' }
      ]
    },
    {
      id: 'a2',
      name: 'Serena Williams',
      sport: 'Tennis',
      team: null,
      career: '1995-2022',
      profileImage: '/placeholder/athletes/serena-williams.jpg',
      coverImage: '/placeholder/covers/serena-williams-cover.jpg',
      followers: 980000,
      likes: 2500000,
      videoCount: 12,
      biography: 'Serena Jameka Williams is an American former professional tennis player. Considered among the greatest tennis players of all time, she was ranked world No. 1 in singles by the Women\'s Tennis Association (WTA) for 319 weeks, including a joint-record 186 consecutive weeks, and finished as the year-end No. 1 five times.',
      highlights: [
        { year: '1999', text: 'First Grand Slam singles title (US Open)' },
        { year: '2002-03', text: 'First "Serena Slam" (four consecutive Grand Slam titles)' },
        { year: '2010', text: 'Return to world No. 1 ranking after injury' },
        { year: '2012', text: 'Olympic Gold Medal in Singles and Doubles' },
        { year: '2014-15', text: 'Second "Serena Slam"' },
        { year: '2017', text: 'Australian Open victory while pregnant' }
      ],
      awards: [
        { name: 'Grand Slam Singles Titles', year: '23 titles (1999-2017)' },
        { name: 'Olympic Gold Medals', year: '2000, 2008, 2012' },
        { name: 'WTA Player of the Year', year: '2002, 2008, 2009, 2012, 2013, 2015' },
        { name: 'Sports Illustrated Sportsperson of the Year', year: '2015' }
      ]
    },
    {
      id: 'a3',
      name: 'Lionel Messi',
      sport: 'Soccer',
      team: 'Inter Miami CF',
      career: '2004-present',
      profileImage: '/placeholder/athletes/lionel-messi.jpg',
      coverImage: '/placeholder/covers/lionel-messi-cover.jpg',
      followers: 1800000,
      likes: 4200000,
      videoCount: 18,
      biography: 'Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d\'Or awards and a record six European Golden Shoes.',
      highlights: [
        { year: '2005', text: 'First La Liga title with Barcelona' },
        { year: '2009', text: 'First Champions League victory & Ballon d\'Or' },
        { year: '2011', text: 'Second Champions League title' },
        { year: '2015', text: 'Historic treble (La Liga, Copa del Rey, Champions League)' },
        { year: '2021', text: 'First major international trophy (Copa America)' },
        { year: '2022', text: 'FIFA World Cup victory with Argentina' }
      ],
      awards: [
        { name: 'Ballon d\'Or', year: '2009, 2010, 2011, 2012, 2015, 2019, 2021' },
        { name: 'FIFA World Cup Golden Ball', year: '2014, 2022' },
        { name: 'UEFA Champions League Top Scorer', year: '2009, 2010, 2011, 2012, 2015, 2019' },
        { name: 'La Liga Top Scorer', year: '2010, 2012, 2013, 2017, 2018, 2019, 2020' }
      ]
    },
    {
      id: 'a4',
      name: 'Usain Bolt',
      sport: 'Track & Field',
      team: null,
      career: '2004-2017',
      profileImage: '/placeholder/athletes/usain-bolt.jpg',
      coverImage: '/placeholder/covers/usain-bolt-cover.jpg',
      followers: 870000,
      likes: 1950000,
      videoCount: 10,
      biography: 'Usain St. Leo Bolt is a Jamaican former sprinter, widely considered the greatest sprinter of all time. He is the world record holder in the 100 metres, 200 metres, and 4 × 100 metres relay. An eight-time Olympic gold medallist, Bolt is the only sprinter to win Olympic 100 m and 200 m titles at three consecutive Olympics (2008, 2012, and 2016).',
      highlights: [
        { year: '2008', text: 'Beijing Olympics: 3 Gold medals & 3 World Records' },
        { year: '2009', text: 'World Championships: 100m & 200m World Records' },
        { year: '2012', text: 'London Olympics: First to defend 100m & 200m titles' },
        { year: '2013', text: 'World Championships: 3 Gold medals' },
        { year: '2015', text: 'World Championships: 3 more Gold medals' },
        { year: '2016', text: 'Rio Olympics: Historic "Triple-Triple" (9 Gold medals)' }
      ],
      awards: [
        { name: 'Olympic Gold Medals', year: '8 (2008, 2012, 2016)' },
        { name: 'World Championship Gold Medals', year: '11 (2009, 2011, 2013, 2015)' },
        { name: 'IAAF World Athlete of the Year', year: '2008, 2009, 2011, 2012, 2013, 2016' },
        { name: 'Laureus World Sportsman of the Year', year: '2009, 2010, 2013, 2017' }
      ]
    },
    {
      id: 'a5',
      name: 'Simone Biles',
      sport: 'Gymnastics',
      team: 'United States',
      career: '2013-present',
      profileImage: '/placeholder/athletes/simone-biles.jpg',
      coverImage: '/placeholder/covers/simone-biles-cover.jpg',
      followers: 920000,
      likes: 2100000,
      videoCount: 11,
      biography: 'Simone Arianne Biles is an American artistic gymnast. With a combined total of 37 Olympic and World Championship medals, Biles is the most decorated American gymnast and is considered one of the greatest and most dominant gymnasts of all time.',
      highlights: [
        { year: '2013', text: 'First World Championship gold medal' },
        { year: '2014', text: 'Four gold medals at World Championships' },
        { year: '2016', text: 'Rio Olympics: 4 gold medals, 1 bronze' },
        { year: '2018', text: 'Return after hiatus, dominant World Championship' },
        { year: '2019', text: 'Most decorated gymnast in World Championship history' },
        { year: '2021', text: 'Tokyo Olympics: Prioritizing mental health' }
      ],
      awards: [
        { name: 'Olympic Medals', year: '7 (2016, 2020)' },
        { name: 'World Championship Medals', year: '25 (2013-2019, 2021)' },
        { name: 'BBC Sports Personality World Sport Star', year: '2019' },
        { name: 'AP Female Athlete of the Year', year: '2016, 2019' }
      ]
    }
  ];
  
  export const videos = [
    {
      id: 'v1',
      title: 'The Last Dance: Michael Jordan\'s Final Championship',
      description: 'Relive Michael Jordan\'s incredible journey to his sixth and final NBA championship with the Chicago Bulls in 1998.',
      videoUrl: '/placeholder/videos/jordan-last-dance.mp4',
      thumbnailUrl: '/placeholder/thumbnails/jordan-last-dance.jpg',
      duration: 68,
      views: 1250000,
      likes: 89700,
      shares: 12400,
      createdAt: '2025-03-15T08:30:00Z',
      athlete: {
        id: 'a1',
        name: 'Michael Jordan',
        sport: 'Basketball',
        profileImage: '/placeholder/athletes/michael-jordan.jpg'
      },
      tags: ['basketball', 'nba', 'chicago-bulls', 'championship']
    },
    {
      id: 'v2',
      title: 'Serena Williams: 23 Grand Slam Journey',
      description: 'From her first US Open win to becoming the most decorated tennis player in the Open Era, follow Serena Williams\' remarkable career.',
      videoUrl: '/placeholder/videos/serena-grand-slams.mp4',
      thumbnailUrl: '/placeholder/thumbnails/serena-grand-slams.jpg',
      duration: 72,
      views: 890000,
      likes: 75300,
      shares: 9800,
      createdAt: '2025-03-18T10:15:00Z',
      athlete: {
        id: 'a2',
        name: 'Serena Williams',
        sport: 'Tennis',
        profileImage: '/placeholder/athletes/serena-williams.jpg'
      },
      tags: ['tennis', 'grand-slam', 'champion', 'goat']
    },
    {
      id: 'v3',
      title: 'Messi\'s World Cup Glory',
      description: 'After years of heartbreak, Lionel Messi finally completes his legacy with Argentina\'s 2022 World Cup victory in Qatar.',
      videoUrl: '/placeholder/videos/messi-world-cup.mp4',
      thumbnailUrl: '/placeholder/thumbnails/messi-world-cup.jpg',
      duration: 65,
      views: 1850000,
      likes: 156000,
      shares: 24700,
      createdAt: '2025-03-20T14:45:00Z',
      athlete: {
        id: 'a3',
        name: 'Lionel Messi',
        sport: 'Soccer',
        profileImage: '/placeholder/athletes/lionel-messi.jpg'
      },
      tags: ['soccer', 'football', 'world-cup', 'argentina']
    },
    {
      id: 'v4',
      title: 'Bolt: The Fastest Man in History',
      description: 'Usain Bolt\'s journey from Jamaica to becoming the fastest man ever and dominating three Olympic Games.',
      videoUrl: '/placeholder/videos/usain-bolt-legacy.mp4',
      thumbnailUrl: '/placeholder/thumbnails/usain-bolt-legacy.jpg',
      duration: 58,
      views: 760000,
      likes: 68200,
      shares: 8900,
      createdAt: '2025-03-22T09:30:00Z',
      athlete: {
        id: 'a4',
        name: 'Usain Bolt',
        sport: 'Track & Field',
        profileImage: '/placeholder/athletes/usain-bolt.jpg'
      },
      tags: ['olympics', 'sprinting', 'world-record', 'jamaica']
    },
    {
      id: 'v5',
      title: 'Simone Biles: Defying Gravity',
      description: 'How Simone Biles revolutionized gymnastics with her unprecedented skills and courage both on and off the mat.',
      videoUrl: '/placeholder/videos/simone-biles-skills.mp4',
      thumbnailUrl: '/placeholder/thumbnails/simone-biles-skills.jpg',
      duration: 62,
      views: 920000,
      likes: 84500,
      shares: 11200,
      createdAt: '2025-03-25T11:20:00Z',
      athlete: {
        id: 'a5',
        name: 'Simone Biles',
        sport: 'Gymnastics',
        profileImage: '/placeholder/athletes/simone-biles.jpg'
      },
      tags: ['gymnastics', 'olympics', 'mental-health', 'champion']
    },
    {
      id: 'v6',
      title: 'Jordan\'s Flu Game: The Ultimate Performance',
      description: 'Despite battling severe illness, Michael Jordan delivered one of the most iconic performances in NBA Finals history in 1997.',
      videoUrl: '/placeholder/videos/jordan-flu-game.mp4',
      thumbnailUrl: '/placeholder/thumbnails/jordan-flu-game.jpg',
      duration: 59,
      views: 1050000,
      likes: 92800,
      shares: 14100,
      createdAt: '2025-03-28T15:10:00Z',
      athlete: {
        id: 'a1',
        name: 'Michael Jordan',
        sport: 'Basketball',
        profileImage: '/placeholder/athletes/michael-jordan.jpg'
      },
      tags: ['basketball', 'nba', 'chicago-bulls', 'nba-finals']
    },
    {
      id: 'v7',
      title: 'Serena vs Venus: A Sisterly Rivalry',
      description: 'The Williams sisters changed tennis forever, competing against each other in 9 Grand Slam finals while remaining best friends off the court.',
      videoUrl: '/placeholder/videos/williams-sisters.mp4',
      thumbnailUrl: '/placeholder/thumbnails/williams-sisters.jpg',
      duration: 67,
      views: 780000,
      likes: 71600,
      shares: 9300,
      createdAt: '2025-03-30T12:45:00Z',
      athlete: {
        id: 'a2',
        name: 'Serena Williams',
        sport: 'Tennis',
        profileImage: '/placeholder/athletes/serena-williams.jpg'
      },
      tags: ['tennis', 'sisters', 'rivalry', 'grand-slam']
    },
    {
      id: 'v8',
      title: 'Messi at Barcelona: The Golden Era',
      description: 'For over two decades, Lionel Messi and FC Barcelona created magic, winning everything and redefining how football should be played.',
      videoUrl: '/placeholder/videos/messi-barcelona.mp4',
      thumbnailUrl: '/placeholder/thumbnails/messi-barcelona.jpg',
      duration: 71,
      views: 1620000,
      likes: 143000,
      shares: 19800,
      createdAt: '2025-04-02T09:15:00Z',
      athlete: {
        id: 'a3',
        name: 'Lionel Messi',
        sport: 'Soccer',
        profileImage: '/placeholder/athletes/lionel-messi.jpg'
      },
      tags: ['soccer', 'football', 'barcelona', 'la-liga']
    },
    {
      id: 'v9',
      title: 'Beijing 2008: Bolt Breaks Records',
      description: 'At the 2008 Olympics, a young Usain Bolt stunned the world by breaking world records while celebrating before the finish line.',
      videoUrl: '/placeholder/videos/bolt-beijing.mp4',
      thumbnailUrl: '/placeholder/thumbnails/bolt-beijing.jpg',
      duration: 55,
      views: 890000,
      likes: 76500,
      shares: 10200,
      createdAt: '2025-04-05T14:30:00Z',
      athlete: {
        id: 'a4',
        name: 'Usain Bolt',
        sport: 'Track & Field',
        profileImage: '/placeholder/athletes/usain-bolt.jpg'
      },
      tags: ['olympics', 'beijing', 'world-record', 'sprinting']
    },
    {
      id: 'v10',
      title: 'The Biles: Gymnastics\' Most Difficult Skill',
      description: 'Named after her, the Biles is a gymnastics move so difficult that few would even attempt it. This is how Simone made the impossible possible.',
      videoUrl: '/placeholder/videos/the-biles-skill.mp4',
      thumbnailUrl: '/placeholder/thumbnails/the-biles-skill.jpg',
      duration: 63,
      views: 1150000,
      likes: 97000,
      shares: 15600,
      createdAt: '2025-04-08T10:20:00Z',
      athlete: {
        id: 'a5',
        name: 'Simone Biles',
        sport: 'Gymnastics',
        profileImage: '/placeholder/athletes/simone-biles.jpg'
      },
      tags: ['gymnastics', 'skills', 'innovation', 'world-championships']
    }
  ];
  
  // Categories for filtering
  export const categories = [
    { id: 'all', name: 'For You' },
    { id: 'basketball', name: 'Basketball' },
    { id: 'soccer', name: 'Soccer' },
    { id: 'tennis', name: 'Tennis' },
    { id: 'track', name: 'Track & Field' },
    { id: 'gymnastics', name: 'Gymnastics' },
    { id: 'football', name: 'Football' },
    { id: 'baseball', name: 'Baseball' },
    { id: 'hockey', name: 'Hockey' },
    { id: 'golf', name: 'Golf' }
  ];
  
  // Helper functions to access mock data
  export const getAthleteById = (id) => {
    return athletes.find(athlete => athlete.id === id) || null;
  };
  
  export const getVideoById = (id) => {
    return videos.find(video => video.id === id) || null;
  };
  
  export const getVideosByAthlete = (athleteId) => {
    return videos.filter(video => video.athlete.id === athleteId);
  };
  
  export const getVideosByCategory = (category) => {
    if (category === 'all') return videos;
    return videos.filter(video => video.athlete.sport.toLowerCase() === category.toLowerCase());
  };
  
  export const getLatestVideos = (limit = 5) => {
    return [...videos]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit);
  };
  
  export const getTrendingVideos = (limit = 5) => {
    return [...videos]
      .sort((a, b) => (b.views + b.likes * 2) - (a.views + a.likes * 2))
      .slice(0, limit);
  };