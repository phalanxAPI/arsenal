import mongoose, { Document, Schema } from "mongoose";
import { Server } from "../types/server";

type ServerDoc = Document & Server;

const ServerSchema: Schema<ServerDoc> = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    appId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
}, { timestamps: true });

const Application = mongoose.model<ServerDoc>('Application', ServerSchema);
export default Application;