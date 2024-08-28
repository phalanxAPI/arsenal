import mongoose, { PopulatedDoc } from "mongoose";

export enum SecurityConfigType {
  AUTH_TOKENS = "AUTH_TOKENS",
  USER_DATA = "USER_DATA",
  SUCCESS_FLOW = "SUCCESS_FLOW",
  BROKEN_OBJECT_LEVEL_AUTHORIZATION = "BROKEN_OBJECT_LEVEL_AUTHORIZATION",
  BROKEN_AUTHENTICATION = "BROKEN_AUTHENTICATION",
  BROKEN_OBJECT_PROPERTY_LEVEL_AUTHORIZATION = "BROKEN_OBJECT_PROPERTY_LEVEL_AUTHORIZATION",
  BROKEN_FUNCTION_LEVEL_AUTHORIZATION = "BROKEN_FUNCTION_LEVEL_AUTHORIZATION",
  UNRESTRICTED_RESOURCE_CONSUMPTION = "UNRESTRICTED_RESOURCE_CONSUMPTION",
  UNRESTRICTED_ACCESS_TO_SENSITIVE_BUSINESS_FLOW = "UNRESTRICTED_ACCESS_TO_SENSITIVE_BUSINESS_FLOW",
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
