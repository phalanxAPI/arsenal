import mongoose, { Document, Schema } from "mongoose";
import { RequestLog } from "../types/request-log";

export type RequestLogSchemaDoc = Document & RequestLog;

const RequestLogSchema: Schema<RequestLogSchemaDoc> = new Schema(
  {
    appId: { type: Schema.Types.ObjectId, ref: "Application", required: true },
    serverId: { type: Schema.Types.ObjectId, required: true },
    // Required fom incoming requests
    apiId: { type: Schema.Types.ObjectId, ref: "API" },
    // Required for outgoing requests
    url: { type: String },
    method: { type: String },
    requestType: {
      type: String,
      enum: ["INCOMING", "OUTGOING"],
      required: true,
    },
    reqParams: { type: Schema.Types.Mixed },
    reqBody: { type: Schema.Types.Mixed },
    reqHeaders: { type: Schema.Types.Mixed },
    statusCode: { type: Number },
    resBody: { type: Schema.Types.Mixed },
    resHeaders: { type: Schema.Types.Mixed },
    timestamp: { type: Date, default: Date.now },
    duration: { type: Number },
  },
  { timestamps: true }
);

const RequestLog = mongoose.model<RequestLogSchemaDoc>(
  "RequestLog",
  RequestLogSchema
);
export default RequestLog;
