import { User } from './user';

export interface Comment {
  id: string;
  date: string;
  comment: string;
  user: User;
  rating: number;
}

export interface NewComment {
  offerID: string;
  comment: string;
  rating: 4;
}
