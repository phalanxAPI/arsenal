import mongoose from "mongoose";


export type SecurityConfiguration = {
    apiId: mongoose.Types.ObjectId; // Reference to API
    configType: string; // This could be an ENUM or a string if you have various types.
    isEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    rules?: Record<string, any>; // Additional metadata if needed
}