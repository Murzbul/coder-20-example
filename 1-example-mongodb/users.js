import mongoose, { Schema } from "mongoose";
import User from "./dao/User.js";

const userCollection = 'users';

const UserSchema = new Schema({
  name: { type: Schema.Types.String },
  surname: { type: Schema.Types.String },
  dni: { type: Schema.Types.Number },
})

UserSchema.loadClass(User);

export const users = mongoose.model(userCollection, UserSchema);
