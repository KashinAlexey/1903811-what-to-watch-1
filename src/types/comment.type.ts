import { User } from './user.type.js';

export type Comment = {
  id: number
  comment: string
  date: string
  rating: number
  user: User
}

export type Comments = Comment[];
