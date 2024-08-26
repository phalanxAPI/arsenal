import mongoose, { PopulatedDoc } from "mongoose";

export type Server = {
    name: string;
    createdAt: Date;
    appId: PopulatedDoc<mongoose.Types.ObjectId>;
}