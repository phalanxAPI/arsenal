import mongoose, { PopulatedDoc } from "mongoose";

export type Issue = {
  severity: "LOW" | "HIGH";
  title: string;
  description: string;
  assigneeId?: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to User
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  raisedAt: Date;
  apiId?: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to API
  appId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Application
  scanId?: PopulatedDoc<mongoose.Types.ObjectId>; // Optional reference to Scan
};
