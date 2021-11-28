export interface Country{
    country: string;
    code: string;
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    latitude: number;
    longitude: number;
    lastChange: Date;
    lastUpdate: Date;
}