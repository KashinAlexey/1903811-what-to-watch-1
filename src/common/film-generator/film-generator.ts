import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { FilmGeneratorInterface } from './film-generator.interface.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const genre = getRandomItem<string>(this.mockData.genres);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const posterImage = getRandomItem<string>(this.mockData.posterImages);
    const backgroundImage = getRandomItem<string>(this.mockData.backgroundImages);
    const backgroundColor = getRandomItem<string>(this.mockData.backgroundColores);
    const rating = getRandomItem<string>(this.mockData.ratings);
    const director = getRandomItem<string>(this.mockData.directors);
    const starrings = getRandomItems<string>(this.mockData.starrings).join(';');
    const runTime = getRandomItem<string>(this.mockData.runTimes);
    const released = getRandomItem<string>(this.mockData.released);
    const videoLink = getRandomItem<string>(this.mockData.videoLinks);
    const previewVideoLink = getRandomItem<string>(this.mockData.previewVideoLinks);
    const postDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const author = getRandomItem<string>(this.mockData.users);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);

    return [
      name, posterImage, backgroundImage, backgroundColor, description, rating,
      director, starrings,
      runTime, genre, released,
      author, email, avatar,
      videoLink, previewVideoLink,
      postDate,
    ].join('\t');
  }
}
