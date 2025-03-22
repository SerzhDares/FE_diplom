import "./trainTimeInfo.css";

interface TrainTimeInfoProps {
    trainNumber: string
    from: string;
    to: string;
    departureTime: string;
    stationFrom: string;
    arrivalTime: string;
    stationTo: string;
    durationHours: string;
    durationMinutes: string;
    directionArrow: string;
}

export const TrainTimeInfo = ({
    trainNumber, from, to, departureTime, stationFrom, 
    arrivalTime, stationTo, durationHours, durationMinutes, directionArrow
    }: TrainTimeInfoProps) => {
        
  return (
    <div className="train_time_info">
        <div className="tti_block train_info">
            <img src="src/images/orange_train_icon.svg" alt="train" className="train_info_img"/>
            <div className="train_info_text">
                <span className="train_number">{trainNumber}</span>
                <div className="train_route">
                    <span className="route_text from">{from}</span>
                    <span className="route_text to">{to}</span>
                    <span className="route_text to_station"></span>
                </div>
            </div>
        </div>
        <div className="tti_block time_info">
            <div className="train_time departure_time">
                <span className="time_text">{departureTime}</span>
                <span className="settlement">{from}</span>
                <span className="station time_info_station">{stationFrom}</span>
            </div>
            <img src={directionArrow} alt="стрелка" className="time_info_img"/>
            <div className="train_time arrival_time">
                <span className="time_text">{arrivalTime}</span>
                <span className="settlement">{to}</span>
                <span className="station time_info_station">{stationTo}</span>
            </div>
        </div>
        <div className="tti_block duration_info">
            <img src="src/images/orange_clock.svg" alt="часы" className="duration_info_img"/>
            <span className="duration_info_text">{durationHours} часов<br/>{durationMinutes} минуты</span>
        </div>
    </div>
  )
}
