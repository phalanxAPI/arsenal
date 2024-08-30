import mongoose, { Document, Schema } from "mongoose";
import { API } from "../types/api";

export type APIDoc = Document & API;

const APISchema: Schema<APIDoc> = new Schema(
  {
    endpoint: { type: String, required: true },
    method: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isDeprecated: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    appId: { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
  },
  { timestamps: true }
);

// Index on pair of endpoint and method as unique
APISchema.index({ endpoint: 1, method: 1 }, { unique: true });

const API = mongoose.model<APIDoc>("API", APISchema);
export default API;
