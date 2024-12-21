import { HashLink } from "react-router-hash-link";
import "./train.css";

interface TrainProps {
    thereTrainNumber: string;
    startPoint: string;
    thereFrom: string;
    thereTo: string;
    thereDepartureTime: string;
    thereArrivalTime: string;
    thereDuration: string;
    thereStationFrom: string;
    thereStationTo: string;
    backTrainNumber: string;
    backDepartureTime: string;
    backArrivalTime: string;
    backDuration: string;
    backStationFrom: string;
    backStationTo: string;
    btnType: string;
    routeLink: string;
    btnText: string;
}

export const Train = ({
        thereTrainNumber, startPoint, 
        thereFrom, thereTo, thereDepartureTime, 
        thereArrivalTime, thereDuration, thereStationFrom, 
        thereStationTo, backTrainNumber, backDepartureTime, 
        backArrivalTime, backDuration, backStationFrom, backStationTo,
        btnType, routeLink, btnText
    }: TrainProps) => {

  return (
    <div className="ticket">
        <div className="number_route_section">
            <div className="img_container">
                <img src="src/images/white_train_icon.svg" alt="TRAIN" className="train_img"/>
            </div>
            <span className="train_number">{thereTrainNumber}</span>
            <div className="train_route">
                <span className="route_text start_point">{startPoint}</span>
                <span className="route_text from">{thereFrom}</span>
                <span className="route_text to">{thereTo}</span>
                <span className="route_text to_station"></span>
            </div>
            <span className="train_number back_train_number">{backTrainNumber}</span>
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
                    <span className="settlement">{thereFrom}</span>
                    <span className="station">{backStationTo}</span>
                </div>
                <div className="travel_time travel_time_back">
                    <span className="travel_time_value">{backDuration}</span>
                </div>
                <div className="train_time arrival_time">
                    <span className="time_text">{backDepartureTime}</span>
                    <span className="settlement">{thereTo}</span>
                    <span className="station">{backStationFrom}</span>
                </div>
            </div>
        </div>
        <div className="seats_choosing">
            <div className="seats_info">
                <div className="seats_info_item">
                    <span className="wagon_type seat_type">Сидячий</span>
                    <span className="seats_quantity">88</span>
                    <span className="price_from">от</span>
                    <span className="price">
                      <span className="price_value">1 920</span>
                      <span className="currency ticket_currency">₽</span>
                    </span>
                </div>
                <div className="seats_info_item">
                    <span className="wagon_type standard_type">Плацкарт</span>
                    <span className="seats_quantity">52
                        <div className="seats_types">
                            <div className="seats_info_item places_info">
                                <span className="wagon_type place_type_top">верхние</span>
                                <span className="seats_quantity">18</span>
                                <span className="price">
                                    <span className="price_value">3 220</span>
                                    <span className="currency ticket_currency">₽</span>
                                </span>
                            </div>
                            <div className="seats_info_item places_info">
                                <span className="wagon_type place_type_bottom">нижние</span>
                                <span className="seats_quantity">16</span>
                                <span className="price">
                                    <span className="price_value">4 150</span>
                                    <span className="currency ticket_currency">₽</span>
                                </span>
                            </div>
                            <div className="seats_info_item places_info">
                                <span className="wagon_type place_typу_side">боковые</span>
                                <span className="seats_quantity">18</span>
                                <span className="price">
                                    <span className="price_value">2 530</span>
                                    <span className="currency ticket_currency">₽</span>
                                </span>
                            </div>
                        </div>
                    </span>
                    <span className="price_from">от</span>
                    <span className="price">
                      <span className="price_value">2 530</span>
                      <span className="currency ticket_currency">₽</span>
                    </span>
                </div>
                <div className="seats_info_item">
                    <span className="wagon_type coupe_type">Купе</span>
                    <span className="seats_quantity">24
                        <div className="seats_types">
                            <div className="seats_info_item places_info">
                                <span className="wagon_type place_type_top">верхние</span>
                                <span className="seats_quantity">10</span>
                                <span className="price">
                                    <span className="price_value">3 820</span>
                                    <span className="currency ticket_currency">₽</span>
                                </span>
                            </div>
                            <div className="seats_info_item places_info">
                                <span className="wagon_type place_type_bottom">нижние</span>
                                <span className="seats_quantity">14</span>
                                <span className="price">
                                    <span className="price_value">4 350</span>
                                    <span className="currency ticket_currency">₽</span>
                                </span>
                            </div>
                        </div>
                    </span>
                    <span className="price_from">от</span>
                    <span className="price">
                      <span className="price_value">3 820</span>
                      <span className="currency ticket_currency">₽</span>
                    </span>
                </div>
                <div className="seats_info_item">
                    <span className="wagon_type luxe_type">Люкс</span>
                    <span className="seats_quantity">15
                        <div className="seats_types">
                            <div className="seats_info_item places_info">
                                <span className="wagon_type place_type_bottom">нижние</span>
                                <span className="seats_quantity">15</span>
                                <span className="price">
                                    <span className="price_value">4 950</span>
                                    <span className="currency ticket_currency">₽</span>
                                </span>
                            </div>
                        </div>
                    </span>
                    <span className="price_from">от</span>
                    <span className="price">
                      <span className="price_value">4 950</span>
                      <span className="currency ticket_currency">₽</span>
                    </span>
                </div>

            </div>
            <div className="options_button_block">
                <img src="src/images/wagon_options.svg" alt="options" className="wagon_options_icons"/>
                <HashLink smooth to={routeLink}>
                    <button className={btnType}>{btnText}</button>
                </HashLink>
            </div>
        </div>
    </div>
  )
}
