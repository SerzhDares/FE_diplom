import { MouseEventHandler } from "react";

export interface ITrainParams {
    thereTrainNumber?: string;
    thereFrom: string;
    thereTo: string;
    thereDepartureTime?: string;
    thereArrivalTime?: string;
    thereDuration?: string;
    thereStationFrom: string;
    thereStationTo: string;
    backTrainNumber?: string;
    backFrom?: string;
    backTo?: string;
    backDepartureTime?: string;
    backArrivalTime?: string;
    backDuration?: string;
    backStationFrom?: string;
    backStationTo?: string;
    minPrice?: number;
    seatTypeSeats?: number;
    seatTypePrice?: number;
    standardTypeSeats?: number;
    standardTopPrice: number;
    standardBottomPrice: number;
    standardSidePrice: number;
    coupeTypeSeats?: number;
    coupeTopPrice: number;
    coupeBottomPrice: number;
    luxeTypeSeats?: number;
    luxeBottomPrice?: number;
    haveWifi?: boolean;
    haveConditioner?: boolean;
    isExpress?: boolean;
    btnType?: string;
    routeLink: string;
    btnText?: string;
    onClick?: MouseEventHandler;
}
