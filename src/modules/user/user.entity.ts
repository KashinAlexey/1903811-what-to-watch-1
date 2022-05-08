import {User} from '../../types/user.type.js';

export class UserEntity implements User {
  public email!: string;
  public avatarUrl!: string;
  public name!: string;
  public token!: string;
}
