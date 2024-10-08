import mongoose, { PopulatedDoc } from "mongoose";

export type RequestLog = {
  appId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Application
  serverId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Server
  apiId?: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to API
  url?: string;
  method?: string;
  requestType: "INCOMING" | "OUTGOING";
  reqParams?: Record<string, any>;
  reqBody?: Record<string, any>;
  reqHeaders?: Record<string, any>;
  statusCode: number;
  resBody?: Record<string, any>;
  resHeaders?: Record<string, any>;
  timestamp: Date;
  duration?: number; // Duration in ms
};
