import { readFileSync } from 'fs';
import { Films } from '../../types/film.type.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Films {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, posterImage, previewImage, backgroundImage, backgroundColor, description, rating,  scoresCount, director, starring, runTime, genre, released, id, videoLink, previewVideoLink, createdDate, isFavorite]) => ({
        title,
        posterImage,
        previewImage,
        backgroundImage,
        backgroundColor,
        description,
        rating: Number.parseInt(rating, 10),
        scoresCount: Number.parseInt(scoresCount, 10),
        director,
        starring: starring.split(';')
          .map((name) => (name)),
        runTime: Number.parseInt(runTime, 10),
        genre,
        released: Number.parseInt(released, 10),
        id: Number.parseInt(id, 10),
        videoLink,
        previewVideoLink,
        postDate: new Date(createdDate),
        isFavorite: isFavorite === 'true',
      })
      );
  }
}
