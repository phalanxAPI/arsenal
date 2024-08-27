import mongoose, { PopulatedDoc } from "mongoose";

export enum SecurityConfigType {
  AUTH_TOKENS = "AUTH_TOKENS",
  USER_DATA = "USER_DATA",
}

export type SecurityConfiguration = {
  apiId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to API
  configType: string; // This could be an ENUM or a string if you have various types.
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  rules?: Record<string, any>; // Additional metadata if needed
};
