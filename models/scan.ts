import mongoose, { Document, Schema } from "mongoose";
import { Scan } from "../types/scan";

type ScanDoc = Document & Scan;

const ScanSchema: Schema<ScanDoc> = new Schema({
    appId: { type: Schema.Types.ObjectId as any, ref: 'Application', required: true },
    scanDate: { type: Date, default: Date.now },
    outputSummary: { type: String, required: true },
}, { timestamps: true });

const Scan = mongoose.model<ScanDoc>('Scan', ScanSchema);
export default Scan;