import {User} from '../../types/user.type.js';
import typegoose, {getModelForClass} from '@typegoose/typegoose';
import {TimeStamps} from '@typegoose/typegoose/lib/defaultClasses.js';

const {prop} = typegoose;

export class UserEntity extends TimeStamps implements User {
  @prop({
    type: String,
    required: true,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  })
  public email!: string;

  @prop({
    type: String,
    match: [/^.*\.(jpe?g|png)$/, 'File is incorrect'],
  })
  public avatarUrl!: string;

  @prop({
    type: String,
    required: true,
    minlength: [1, 'Min length for name is 1'],
    maxLength: [15, 'Max length for name is 15']
  })
  public name!: string;

  @prop({
    type: String,
    required: true,
    minlength: [6, 'Min length for token is 1'],
    maxLength: [12, 'Max length for token is 15']
  })
  public token!: string;
}

export const UserModel = getModelForClass(UserEntity);
