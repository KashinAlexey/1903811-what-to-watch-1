import { Film } from '../types/film.type.js';
import crypto from 'crypto';

export const createFilm = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, posterImage, previewImage, backgroundImage, backgroundColor, description, rating,  scoresCount, director, starring, runTime, genre, released, id, videoLink, previewVideoLink, createdDate, isFavorite] = tokens;
  return {
    title,
    posterImage,
    previewImage,
    backgroundImage,
    backgroundColor,
    description,
    rating: Number.parseInt(rating, 10),
    scoresCount: Number.parseInt(scoresCount, 10),
    director,
    starring: starring.split(';'),
    runTime: Number.parseInt(runTime, 10),
    genre,
    released: Number.parseInt(released, 10),
    id,
    videoLink,
    previewVideoLink,
    postDate: new Date(createdDate),
    isFavorite: isFavorite === 'true',
  } as Film;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};
