export type Film = {
  id: string
  title: string
  description: string
  postDate: Date
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
