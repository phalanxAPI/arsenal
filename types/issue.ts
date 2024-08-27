import mongoose, { PopulatedDoc } from "mongoose";

export type Issue = {
    severity: 'LOW' | 'HIGH';
    description: string;
    assigneeId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to User
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
    raisedAt: Date;
    apiId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to API
    scanId?: PopulatedDoc<mongoose.Types.ObjectId>; // Optional reference to Scan
    appId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Application
}