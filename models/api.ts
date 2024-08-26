import mongoose, { Document, Schema } from "mongoose";
import { API } from "../types/api";

type APIDoc = Document & API;

const APISchema: Schema<APIDoc> = new Schema({
    name: { type: String, required: true },
    endpoint: { type: String, required: true, unique: true },
    method: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isDeprecated: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    appId: { type: mongoose.Schema.Types.ObjectId, ref: 'Application' }
}, { timestamps: true });

const API = mongoose.model<APIDoc>('API', APISchema);
export default API;