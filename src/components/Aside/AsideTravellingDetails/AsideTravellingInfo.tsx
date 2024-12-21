import { MoreButton } from '../MoreButton';
import { useState } from 'react';

interface AsideTravellingInfo {
    directionClass: string;
    direction: string;
    startDate: string;
    finishDate: string;
    trainNumber: string;
    startPoint: string;
    endPoint: string;
    startTime: string;
    finishTime: string;
    arrowDirectionClass: string;
    duration: string;
    departurePoint: string;
    arrivalPoint: string;
    departureStation: string;
    arrivalStation: string;
}

export const AsideTravellingInfo = ({
    directionClass, direction, startDate, finishDate, trainNumber,
    startPoint, endPoint, startTime, finishTime, arrowDirectionClass, 
    duration, departurePoint, arrivalPoint, departureStation, arrivalStation
}: AsideTravellingInfo) => {

  const [isOpen, setIsOpen] = useState(true);
  const openBtn = () => {setIsOpen(!isOpen)};

  return (
    <div className={`aside_block_item time_choosing ${directionClass}`}>
        <div className="time_choosing_title">
            <span className="time_choosing_text">{direction}</span>
            <span className="travel_date">{startDate}</span>
            <MoreButton btnSetState={openBtn} btnState={isOpen}/>
        </div>
        <div className={isOpen ? "travel_info open" : "travel_info"}>
            <div className="ti_text_block">
                <span className="ti_text_option">№ поезда</span>
                <span className="ti_text_number">{trainNumber}</span>
            </div>
            <div className="ti_text_block">
                <span className="ti_text_option">Название</span>
                <span className="ti_text_route">{startPoint}<br/>{endPoint}</span>
            </div>
            <div className="train_departure_arrival tda_details">
                <div className="train_time departure_time">
                    <span className="time_text">{startTime}</span>
                    <span className="travel_date ti_travel_date">{startDate}</span>
                </div>
                <div className={`travel_time tt_details ${arrowDirectionClass}`}>
                    <span className="travel_time_value tt_value_details">{duration}</span>
                </div>
                <div className="train_time arrival_time">
                    <span className="time_text arrival_time_text">{finishTime}</span>
                    <span className="travel_date ti_travel_date">{finishDate}</span>
                </div>
            </div>
            <div className="details_points">
                <div className="details_point details_start_point">
                    <span className="settlement details_settlement">{departurePoint}</span>
                    <span className="station details_station">{departureStation}</span>
                </div>
                <div className="details_point end_point">
                    <span className="settlement details_settlement">{arrivalPoint}</span>
                    <span className="station details_station">{arrivalStation}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
