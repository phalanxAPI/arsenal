import mongoose, { Document, Schema } from "mongoose";
import { Application } from "../types/application";

type ApplicationDoc = Document & Application;

const ApplicationSchema: Schema<ApplicationDoc> = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Application = mongoose.model<ApplicationDoc>('Application', ApplicationSchema);
export default Application;