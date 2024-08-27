import mongoose, { PopulatedDoc } from "mongoose";

export type Scan = {
  appId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Application
  scanDate: Date;
  outputSummary: string;
  status: "IN_PROGRESS" | "COMPLETED" | "FAILED";
  createdAt: Date;
};
