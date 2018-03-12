export interface Currency {
    marketCap?: number;
    tradeVolume?: number;
    circulatingSupply?: number;
    pricePerUnit?: number;
    priceChange?: number;
    priceGraph?: Chicken;
}
export enum Chicken{
    feathers,
    egg,
    beak
}