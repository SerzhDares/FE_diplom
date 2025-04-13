import { HashLink } from "react-router-hash-link";
import { ITrainParams } from "../../../models/models";
import "./train.css";

export const Train = ({
        thereTrainNumber, thereFrom, thereTo, thereDepartureTime, 
        thereArrivalTime, thereDuration, thereStationFrom, 
        thereStationTo, backTrainNumber, backFrom, backTo, 
        backDepartureTime, backArrivalTime, backDuration, 
        backStationFrom, backStationTo, seatTypeSeats, seatTypePrice, 
        standardTypeSeats, standardTopPrice, standardBottomPrice, 
        standardSidePrice, coupeTypeSeats, coupeTopPrice, 
        coupeBottomPrice, luxeTypeSeats, luxeBottomPrice, 
        haveWifi, haveConditioner, isExpress, 
        btnType, routeLink, btnText, onClick
    }: ITrainParams) => {

  return (
    <div className="ticket">
        <div className="number_route_section">
            <div className="img_container">
                <img src="src/images/white_train_icon.svg" alt="TRAIN" className="train_img"/>
            </div>
            <span className="train_number">{thereTrainNumber}</span>
            <div className="train_route">
                <span className="route_text from">{thereFrom}</span>
                <span className="route_text to">{thereTo}</span>
            </div>
            <span className="train_number back_train_number">{backTrainNumber}</span>
            {backTrainNumber &&
            <div className="train_route">
                <span className="route_text from">{thereTo}</span>
                <span className="route_text to">{thereFrom}</span>
            </div>}
        </div>
        <div className="departure_arrival_info">
            <div className="train_departure_arrival">
                <div className="train_time departure_time">
                    <span className="time_text">{thereDepartureTime}</span>
                    <span className="settlement">{thereFrom}</span>
                    <span className="station">{thereStationFrom}</span>
                </div>
                <div className="travel_time travel_time_there">
                    <span className="travel_time_value">{thereDuration}</span>
                </div>
                <div className="train_time arrival_time">
                    <span className="time_text">{thereArrivalTime}</span>
                    <span className="settlement">{thereTo}</span>
                    <span className="station">{thereStationTo}</span>
                </div>
            </div>
            <div className="train_departure_arrival">
                <div className="train_time departure_time">
                    <span className="time_text">{backArrivalTime}</span>
                    <span className="settlement">{backTo}</span>
                    <span className="station">{backStationTo}</span>
                </div>
                <div className="travel_time travel_time_back">
                    <span className="travel_time_value">{backDuration}</span>
                </div>
                <div className="train_time arrival_time">
                    <span className="time_text">{backDepartureTime}</span>
                    <span className="settlement">{backFrom}</span>
                    <span className="station">{backStationFrom}</span>
                </div>
            </div>
        </div>
        <div className="seats_choosing">
            <div className="seats_info">
                {seatTypeSeats ?
                    <div className="seats_info_item">
                        <span className="wagon_type seat_type">Сидячий</span>
                        <span className="seats_quantity">{seatTypeSeats}</span>
                        <span className="price_from">от</span>
                        <span className="price">
                        <span className="price_value">{seatTypePrice}</span>
                        <span className="currency ticket_currency">₽</span>
                        </span>
                    </div>
                : ""}
                {standardTypeSeats ?
                    <div className="seats_info_item">
                        <span className="wagon_type standard_type">Плацкарт</span>
                        <span className="seats_quantity">{standardTypeSeats}
                            <div className="seats_types">
                                <div className="seats_info_item places_info">
                                    <span className="wagon_type place_type_top">верхние</span>
                                    <span className="seats_quantity"></span>
                                    <span className="price">
                                        <span className="price_value">{standardTopPrice}</span>
                                        <span className="currency ticket_currency">₽</span>
                                    </span>
                                </div>
                                <div className="seats_info_item places_info">
                                    <span className="wagon_type place_type_bottom">нижние</span>
                                    <span className="seats_quantity"></span>
                                    <span className="price">
                                        <span className="price_value">{standardBottomPrice}</span>
                                        <span className="currency ticket_currency">₽</span>
                                    </span>
                                </div>
                                <div className="seats_info_item places_info">
                                    <span className="wagon_type place_typу_side">боковые</span>
                                    <span className="seats_quantity"></span>
                                    <span className="price">
                                        <span className="price_value">{standardSidePrice}</span>
                                        <span className="currency ticket_currency">₽</span>
                                    </span>
                                </div>
                            </div>
                        </span>
                        <span className="price_from">от</span>
                        <span className="price">
                        <span className="price_value">{Math.min(standardTopPrice, standardBottomPrice, standardSidePrice)}</span>
                        <span className="currency ticket_currency">₽</span>
                        </span>
                    </div>
                : ""}
                {coupeTypeSeats ?
                    <div className="seats_info_item">
                        <span className="wagon_type coupe_type">Купе</span>
                        <span className="seats_quantity">{coupeTypeSeats}
                            <div className="seats_types">
                                <div className="seats_info_item places_info">
                                    <span className="wagon_type place_type_top">верхние</span>
                                    <span className="seats_quantity"></span>
                                    <span className="price">
                                        <span className="price_value">{coupeTopPrice}</span>
                                        <span className="currency ticket_currency">₽</span>
                                    </span>
                                </div>
                                <div className="seats_info_item places_info">
                                    <span className="wagon_type place_type_bottom">нижние</span>
                                    <span className="seats_quantity"></span>
                                    <span className="price">
                                        <span className="price_value">{coupeBottomPrice}</span>
                                        <span className="currency ticket_currency">₽</span>
                                    </span>
                                </div>
                            </div>
                        </span>
                        <span className="price_from">от</span>
                        <span className="price">
                        <span className="price_value">{Math.min(coupeTopPrice, coupeBottomPrice)}</span>
                        <span className="currency ticket_currency">₽</span>
                        </span>
                    </div>
                : ""}
                {luxeTypeSeats ?
                    <div className="seats_info_item">
                        <span className="wagon_type luxe_type">Люкс</span>
                        <span className="seats_quantity">{luxeTypeSeats}
                            <div className="seats_types">
                                <div className="seats_info_item places_info">
                                    <span className="wagon_type place_type_bottom">нижние</span>
                                    <span className="seats_quantity"></span>
                                    <span className="price">
                                        <span className="price_value">{luxeBottomPrice}</span>
                                        <span className="currency ticket_currency">₽</span>
                                    </span>
                                </div>
                            </div>
                        </span>
                        <span className="price_from">от</span>
                        <span className="price">
                        <span className="price_value">{luxeBottomPrice}</span>
                        <span className="currency ticket_currency">₽</span>
                        </span>
                    </div>
                : ""}
            </div>
            <div className="options_button_block">
                <div className="options_block">
                    {haveWifi && <img src="src/images/wifi_dark.svg" alt="wifi" className="wagon_options_icon"/>}
                    {haveConditioner && <img src={haveConditioner ? "src/images/conditioner_dark.svg" : ""} alt="conditioner" className="wagon_options_icon"/>}
                    {isExpress && <img src={isExpress ? "src/images/express_dark.svg" : ""} alt="express" className="wagon_options_icon"/>}
                    <img src="src/images/food_dark.svg" alt="food" className="wagon_options_icon"/>
                </div>
                <HashLink smooth to={routeLink}>
                    <button onClick={onClick} className={btnType}>{btnText}</button>
                </HashLink>
            </div>
        </div>
    </div>
  )
}
