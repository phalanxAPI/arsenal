import mongoose, { Document, Schema } from "mongoose";
import { Issue } from "../types/issue";

type IssueDoc = Document & Issue;

const IssueSchema: Schema<IssueDoc> = new Schema({
    severity: { type: String, enum: ['LOW', 'HIGH'], required: true },
    description: { type: String, required: true },
    assigneeId: { type: Schema.Types.ObjectId, ref: 'User' } as any,
    status: { type: String, enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'], default: 'OPEN' },
    raisedAt: { type: Date, default: Date.now },
    apiId: { type: Schema.Types.ObjectId, ref: 'API' } as any,
    scanId: { type: Schema.Types.ObjectId, ref: 'Scan' } // Updated for optional reference to Scan
}, { timestamps: true });

const Issue = mongoose.model<IssueDoc>('Issue', IssueSchema);
export default Issue;