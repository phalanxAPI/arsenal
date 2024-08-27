import mongoose, { PopulatedDoc } from "mongoose";

export enum SecurityConfigType {
  AUTH_TOKENS = "AUTH_TOKENS",
  USER_DATA = "USER_DATA",
  SUCCESS_FLOW = "SUCCESS_FLOW",
  BROKEN_OBJECT_LEVEL_AUTH = "BROKEN_OBJECT_LEVEL_AUTH",
  BROKEN_AUTHENTICATION = "BROKEN_AUTHENTICATION",
}

export type SecurityConfiguration = {
  apiId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to API
  app: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Application
  configType: string; // This could be an ENUM or a string if you have various types.
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  rules?: Record<string, any>; // Additional metadata if needed
};
