export type NetworkStats = {
    interface: string;
    rx_sec: number;
    tx_sec: number;
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
    cpuLoad: number;
    memUsage: IMemoryUsage;
    diskIO: IDiskIO;
    networkStats: NetworkStats[];
    battery: IBattery;
    createdAt: Date;
    updatedAt: Date;
}