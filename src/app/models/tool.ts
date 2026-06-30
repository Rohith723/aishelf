export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  icon: string;
  featured?: boolean;
  new?: boolean;
}