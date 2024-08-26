import mongoose from 'mongoose';

export type API = {
    name: string;
    endpoint: string;
    method: string;
    isVerified: boolean;
    isDeprecated: boolean;
    createdAt: Date;
    updatedAt: Date;
    appId: mongoose.Types.ObjectId; // Reference to Application
}