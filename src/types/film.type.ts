export type Film = {
  id: number
  name: string
  description: string
  postDate: string
  genre: string
  released: number
  previewVideoLink: string
  videoLink: string
  starring: string[]
  director: string
  runTime: number
  previewImage: string
  posterImage: string
  backgroundImage: string
  backgroundColor: string
  rating: number
  scoresCount: number
  isFavorite: boolean
}

export type Films = Film[];
