export type Page = 'home' | 'about' | 'sermons' | 'ministries' | 'events' | 'give' | 'contact';

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  series: string;
  duration: string;
  youtubeId?: string;
  audioUrl?: string; // placeholder audio
  summary: string;
  thumbnail: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Special Service' | 'Youth' | 'Women' | 'Men' | 'Community' | 'General';
  image: string;
}

export interface Ministry {
  id: string;
  name: string;
  iconName: string; // matches Lucide icons dynamically
  tagline: string;
  description: string;
  leader: string;
  meetingTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface LeaderProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
}
