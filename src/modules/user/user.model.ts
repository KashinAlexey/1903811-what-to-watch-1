import mongoose from 'mongoose';
import {User} from '../../types/user.type.js';

export interface UserDocument extends User, mongoose.Document {
  createdAt: Date,
  updatedAt: Date,
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [1, 'Min length for name is 1'],
    maxLength: [15, 'Max length for name is 15']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  },
  avatarUrl: {
    type: String,
    match: [/^.*\.(jpe?g|png)$/, 'File is incorrect'],
  },
  token: {
    type: String,
    required: true,
    minlength: [6, 'Min length for token is 1'],
    maxLength: [12, 'Max length for token is 15']
  },
}, {
  timestamps: true,
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
