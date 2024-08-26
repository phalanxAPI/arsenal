import mongoose, { Document, Schema } from "mongoose";
import { RequestLog } from "../types/request-log";

type RequestLogSchemaDoc = Document & RequestLog;

const RequestLogSchema: Schema<RequestLogSchemaDoc> = new Schema({
    appId: { type: Schema.Types.ObjectId, ref: 'Application', required: true } as any,
    serverId: { type: Schema.Types.ObjectId, required: true } as any,
    requestType: { type: String, enum: ['INCOMING', 'OUTGOING'], required: true },
    method: { type: String, required: true },
    url: { type: String, required: true },
    params: { type: Schema.Types.Mixed },
    body: { type: Schema.Types.Mixed },
    headers: { type: Schema.Types.Mixed },
    statusCode: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    duration: { type: Number }
}, { timestamps: true });

const RequestLog = mongoose.model<RequestLogSchemaDoc>('RequestLog', RequestLogSchema);
export default RequestLog;