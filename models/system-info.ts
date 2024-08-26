import mongoose, { Schema, Document } from 'mongoose';
import { SystemInfo, IMemoryUsage, IDiskIO, IBattery, NetworkStats } from '../types/system-info';

type SystemInfoDoc = Document & SystemInfo;

const MemoryUsageSchema: Schema<IMemoryUsage> = new Schema({
    active: { type: Number, required: true },
    total: { type: Number, required: true },
    usagePercent: { type: Number, required: true },
});

const DiskIOSchema: Schema<IDiskIO> = new Schema({
    read: { type: Number, default: null },
    write: { type: Number, default: null },
});

const BatterySchema: Schema<IBattery> = new Schema({
    percent: { type: Number, required: true },
    isCharging: { type: Boolean, required: true },
});

const NetworkStatsSchema: Schema<NetworkStats> = new Schema({
    interface: { type: String, required: true },
    rx_sec: { type: Number, required: true },
    tx_sec: { type: Number, required: true },
});

const SystemInfoSchema: Schema<SystemInfoDoc> = new Schema({
    appId: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
    serverId: { type: Schema.Types.ObjectId, required: true },
    cpuLoad: { type: Number, required: true },
    memUsage: { type: MemoryUsageSchema, required: true },
    diskIO: { type: DiskIOSchema, required: true },
    networkStats: { type: [NetworkStatsSchema], required: true },
    battery: { type: BatterySchema, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const SystemInfo = mongoose.model<SystemInfoDoc>('SystemInfo', SystemInfoSchema);
export default SystemInfo;