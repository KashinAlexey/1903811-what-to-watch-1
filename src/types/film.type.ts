import { GenreType } from './genre-type.enum.js';
import { User } from './user.type.js';

export type Film = {
  title: string
  description: string
  postDate: Date
  genre: GenreType
  released: number
  previewVideoLink: string
  videoLink: string
  starring: string[]
  director: string
  runTime: number
  posterImage: string
  backgroundImage: string
  backgroundColor: string
  rating: number
  commentsCount: number
  user: User
}

export type Films = Film[];
