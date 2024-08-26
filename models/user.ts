import mongoose, { Document, Schema } from "mongoose";
import { User } from "../types/user";

type UserDoc = Document & User;

const UserSchema: Schema<UserDoc> = new Schema(
  {
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    avatar: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model<UserDoc>("User", UserSchema);
export default User;
