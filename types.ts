export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'alumni' | 'sponsor' | 'admin';
  verified_student: boolean;
  avatarUrl: string;
  college?: string;
  bio?: string;
  skills?: string[];
  portfolio?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
  resumeUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  attendees: number;
  capacity: number;
  imageUrl: string;
  category: 'Tech' | 'Business' | 'Design' | 'Workshop' | 'Hackathon' | 'Competition';
  speaker?: {
    name: string;
    title: string;
  };
}


export interface Sponsor {
  id: string;
  companyName: string;
  logoUrl: string;
  benefits: string[];
}

export interface Submission {
  user: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  proposal: string;
  fileUrl?: string;
  timestamp: string;
}

export interface FreelanceTask {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  status: 'open' | 'in_progress' | 'completed';
  creator: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  submissions?: Submission[];
}

export interface Internship {
  id: string;
  companyName: string;
  companyLogoUrl: string;
  title: string;
  requirements: string[];
  duration: string;
  stipend: string;
}

export interface Blog {
  id: string;
  author: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  title: string;
  contentSnippet: string;
  category: string;
  views: number;
}

export interface Comment {
    user: Pick<User, 'id' | 'name' | 'avatarUrl'>;
    text: string;
}

export interface Reel {
    id: string;
    user: Pick<User, 'id' | 'name' | 'avatarUrl' | 'college'>;
    videoUrl: string;
    thumbnailUrl: string;
    description: string;
    likes: number;
    shares: number;
    comments: Comment[];
}

export interface ChatMessage {
  id: string;
  sender: Pick<User, 'id' | 'name' | 'avatarUrl'> | 'ai' | 'user';
  text: string;
  timestamp: string;
}

export interface RewardTransaction {
  id: string;
  description: string;
  points: number;
  type: 'earn' | 'redeem';
  date: string;
}

export interface LeaderboardEntry {
  rank: number;
  user: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  points: number;
}

export interface Wallet {
  balance: number;
  transactions: RewardTransaction[];
}

export interface Notification {
  id: string;
  type: 'event' | 'reward' | 'achievement' | 'message' | 'reel';
  text: string;
  date: string;
  read: boolean;
}


// FIX: Added missing Alumni type definition.
export interface Alumni {
  id: string;
  user: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  currentCompany: string;
  graduationYear: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EarningTask {
  id: string;
  title: string;
  description: string;
  points: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  creator: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  projectUrl?: string;
}

export interface Mentor {
  id: string;
  user: Pick<User, 'id' | 'name' | 'avatarUrl'>;
  company: string;
  role: string;
  expertise: string[];
}