import {Film} from '../../types/film.type.js';
import typegoose, {getModelForClass, Ref} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses.js';
import { GenreType } from '../../types/genre-type.enum.js';
import { UserEntity } from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface FilmEntity extends Base {}

@modelOptions({
  schemaOptions: {
    collection: 'films'
  }
})

export class FilmEntity extends TimeStamps {
  constructor(data: Film) {
    super();

    this.title = data.title;
    this.description = data.description;
    this.postDate = data.postDate;
    this.genre = data.genre;
    this.released = data.released;
    this.previewVideoLink = data.previewVideoLink;
    this.videoLink = data.videoLink;
    this.starring = data.starring;
    this.director = data.director;
    this.runTime = data.runTime;
    this.posterImage = data.posterImage;
    this.backgroundImage = data.backgroundImage;
    this.backgroundColor = data.backgroundColor;
    this.rating = data.rating;
  }

  @prop({
    type: String,
    required: true,
    minlength: [2, 'Min length for title is 2'],
    maxLength: [100, 'Max length for title is 100'],
  })
  public title!: string;

  @prop({
    type: String,
    required: true,
    minlength: [20, 'Min length for description is 20'],
    maxLength: [1024, 'Max length for description is 1024'],
  })
  public description!: string;

  @prop({
    required: true,
    default: new Date()
  })
  public postDate!: Date;

  @prop({
    type: () => String,
    required: true,
    enum: GenreType
  })
  public genre!: GenreType;

  @prop({required: true})
  public released!: number;

  @prop({required: true})
  public rating!: number;

  @prop({required: true})
  public previewVideoLink!: string;

  @prop({required: true})
  public videoLink!: string;

  @prop({
    type: String,
    required: true,
  })
  public starring!: string[];

  @prop({
    type: String,
    required: true,
    minlength: [2, 'Min length for director is 2'],
    maxLength: [50, 'Max length for director is 50'],
  })
  public director!: string;

  @prop({required: true})
  public runTime!: number;

  @prop({default: 0})
  public commentsCount!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop({required: true})
  public posterImage!: string;

  @prop({required: true})
  public backgroundImage!: string;

  @prop({required: true})
  public backgroundColor!: string;
}

export const FilmModel = getModelForClass(FilmEntity);
