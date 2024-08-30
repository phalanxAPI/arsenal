import mongoose, { Document, Schema } from "mongoose";
import { Scan } from "../types/scan";

export type ScanDoc = Document & Scan;

const ScanSchema: Schema<ScanDoc> = new Schema(
  {
    appId: { type: Schema.Types.ObjectId, ref: "Application", required: true },
    scanDate: { type: Date, default: Date.now },
    outputSummary: { type: String, required: true },
    status: {
      type: String,
      enum: ["IN_PROGRESS", "COMPLETED", "FAILED"],
      default: "IN_PROGRESS",
    },
  },
  { timestamps: true }
);

const Scan = mongoose.model<ScanDoc>("Scan", ScanSchema);
export default Scan;
