import { MockData } from '../../types/mock-data.type.js';
import { getRandomItem, getRandomItems } from '../../utils/random.js';
import { FilmGeneratorInterface } from './film-generator.interface.js';

export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const genre = getRandomItem<string>(this.mockData.genres);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const posterImage = getRandomItem<string>(this.mockData.posterImages);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const backgroundImage = getRandomItem<string>(this.mockData.backgroundImages);
    const backgroundColor = getRandomItem<string>(this.mockData.backgroundColores);
    const rating = getRandomItem<string>(this.mockData.ratings);
    const scoresCount = getRandomItem<string>(this.mockData.scoresCounts);
    const director = getRandomItem<string>(this.mockData.directors);
    const starrings = getRandomItems<string>(this.mockData.starrings).join(';');
    const runTime = getRandomItem<string>(this.mockData.runTimes);
    const released = getRandomItem<string>(this.mockData.released);
    const isFavorite = getRandomItem<string>(this.mockData.isFavorites);
    const videoLink = getRandomItem<string>(this.mockData.videoLinks);
    const previewVideoLink = getRandomItem<string>(this.mockData.previewVideoLinks);

    return [
      name, posterImage, previewImage, backgroundImage, backgroundColor, description, rating,
      scoresCount, director, starrings,
      runTime, genre, released, videoLink, previewVideoLink,
      isFavorite,
    ].join('\t');
  }
}
