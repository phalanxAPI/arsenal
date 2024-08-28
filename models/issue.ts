import mongoose, { Document, Schema } from "mongoose";
import { Issue } from "../types/issue";

type IssueDoc = Document & Issue;

const IssueSchema: Schema<IssueDoc> = new Schema(
  {
    severity: { type: String, enum: ["LOW", "HIGH"], required: true },
    description: { type: String, required: true },
    assigneeId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
      default: "OPEN",
    },
    raisedAt: { type: Date, default: Date.now },
    apiId: { type: Schema.Types.ObjectId, ref: "API", required: true },
    scanId: { type: Schema.Types.ObjectId, ref: "Scan" }, // Optional reference to Scan
    appId: { type: Schema.Types.ObjectId, ref: "Application", required: true },
  },
  { timestamps: true }
);

const Issue = mongoose.model<IssueDoc>("Issue", IssueSchema);
export default Issue;
