import { Place } from './place';
import { User } from './user';

export interface Offer extends Place {
  isFavorite: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}
