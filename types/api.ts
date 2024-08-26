import mongoose, { PopulatedDoc } from 'mongoose';

export type API = {
    name: string;
    endpoint: string;
    method: string;
    isVerified: boolean;
    isDeprecated: boolean;
    createdAt: Date;
    updatedAt: Date;
    appId: PopulatedDoc<mongoose.Types.ObjectId>; // Reference to Application
}