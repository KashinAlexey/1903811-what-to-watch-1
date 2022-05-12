import {Comment} from '../../types/comment.type.js';
import typegoose, {getModelForClass, Ref} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses.js';
import { UserEntity } from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface CommentEntity extends Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})

export class CommentEntity extends TimeStamps implements Comment {
  constructor(data: Comment) {
    super();

    this.comment = data.comment;
    this.date = data.date;
    this.rating = data.rating;
  }

  @prop({
    type: String,
    required: true,
    minlength: [5, 'Min length for comment is 5'],
    maxLength: [1024, 'Max length for comment is 1024'],
  })
  public comment!: string;

  @prop({
    required: true,
  })
  public date!: string;

  @prop({
    required: true
  })
  public rating!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
