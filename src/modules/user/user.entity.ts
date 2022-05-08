import {User} from '../../types/user.type.js';
import typegoose, {getModelForClass} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses.js';
import {createSHA256} from '../../utils/common.js';

const {prop, modelOptions} = typegoose;

export interface UserEntity extends Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

export class UserEntity extends TimeStamps implements User {
  constructor(data: User) {
    super();

    this.email = data.email;
    this.avatarUrl = data.avatarUrl;
    this.name = data.name;
  }

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
    maxLength: [15, 'Max length for name is 15'],
  })
  public name!: string;

  @prop({
    type: String,
    required: true,
    minlength: [6, 'Min length for token is 1'],
    maxLength: [12, 'Max length for token is 15'],
  })

  @prop({
    required: true,
    default: '',
  })
  private password!: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
