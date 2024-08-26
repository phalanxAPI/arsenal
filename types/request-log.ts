import mongoose from "mongoose";

export type RequestLog = {
    appId: mongoose.Types.ObjectId; // Reference to Application
    serverId: mongoose.Types.ObjectId; // Reference to Server
    requestType: 'INCOMING' | 'OUTGOING';
    method: string;
    url: string;
    params?: Record<string, any>;
    body?: Record<string, any>;
    headers?: Record<string, any>;
    statusCode: number;
    timestamp: Date;
    duration?: number;  // Duration in ms
}