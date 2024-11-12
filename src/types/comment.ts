import { User } from './user';

export interface Comment {
  id: string;
  date: string;
  comment: string;
  user: User;
  rating: number;
}
