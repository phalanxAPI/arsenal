import mongoose, { PopulatedDoc } from "mongoose";

export type RequestLog = {
  appId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Application
  serverId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Server
  apiId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to API
  requestType: "INCOMING" | "OUTGOING";
  method: string;
  url: string;
  reqParams?: Record<string, any>;
  reqBody?: Record<string, any>;
  reqHeaders?: Record<string, any>;
  resBody?: Record<string, any>;
  resHeaders?: Record<string, any>;
  statusCode: number;
  timestamp: Date;
  duration?: number; // Duration in ms
};
