import mongoose from "mongoose";

export type Scan = {
    appId: mongoose.Types.ObjectId; // Reference to Application
    scanDate: Date;
    outputSummary: string;
    createdAt: Date;
}