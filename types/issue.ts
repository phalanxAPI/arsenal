import mongoose from "mongoose";

export type Issue = {
    severity: 'LOW' | 'HIGH';
    description: string;
    assigneeId: mongoose.Types.ObjectId; // Reference to User
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
    raisedAt: Date;
    apiId: mongoose.Types.ObjectId; // Reference to API
    scanId?: mongoose.Types.ObjectId; // Optional reference to Scan
}