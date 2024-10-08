import mongoose, { PopulatedDoc } from "mongoose";

export type NetworkStats = {
  interface: string;
  rxSec: number;
  txSec: number;
};

export interface IMemoryUsage {
  active: number;
  total: number;
  usagePercent: number;
}

export interface IDiskIO {
  read: number | null;
  write: number | null;
}

export interface IBattery {
  percent: number;
  isCharging: boolean;
}

export type SystemInfo = {
  appId: PopulatedDoc<mongoose.Types.ObjectId>;
  serverId: PopulatedDoc<mongoose.Types.ObjectId>;
  cpuLoad: number;
  timestamp: Date;
  memUsage: PopulatedDoc<IMemoryUsage>;
  diskIO: PopulatedDoc<IDiskIO>;
  networkStats: PopulatedDoc<NetworkStats[]>;
  battery: PopulatedDoc<IBattery>;
  createdAt: Date;
  updatedAt: Date;
};
