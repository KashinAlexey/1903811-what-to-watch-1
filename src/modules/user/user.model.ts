import mongoose from 'mongoose';
import {User} from '../../types/user.type.js';

export interface UserDocument extends User, mongoose.Document {}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  token: String,
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
