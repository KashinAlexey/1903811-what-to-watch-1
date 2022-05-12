import { GenreType } from './genre-type.enum.js';

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
}

export type Films = Film[];
