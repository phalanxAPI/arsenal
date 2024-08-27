import mongoose, { Document, Schema } from "mongoose";
import { SecurityConfiguration } from "../types/security-conf";

export type SecurityConfigurationDoc = Document & SecurityConfiguration;

const SecurityConfigurationSchema: Schema<SecurityConfigurationDoc> =
  new Schema(
    {
      apiId: { type: Schema.Types.ObjectId, ref: "API" },
      app: { type: Schema.Types.ObjectId, ref: "Application" },
      configType: { type: String, required: true },
      isEnabled: { type: Boolean, default: true },
      rules: { type: Schema.Types.Mixed },
    },
    { timestamps: true }
  );

const SecurityConfiguration = mongoose.model<SecurityConfigurationDoc>(
  "SecurityConfiguration",
  SecurityConfigurationSchema
);
export default SecurityConfiguration;
