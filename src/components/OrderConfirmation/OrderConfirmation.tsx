import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { AsideTravellingDetails } from "../Aside/AsideTravellingDetails/AsideTravellingDetails";
import { Train } from "../TrainChoosing/Train/Train";
import { ConfirmPassengerInfo } from "./ConfirmPassengerInfo/ConfirmPassengerInfo";
import { Footer } from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { trainsTimeFormatter, travelDurationFormatter } from "../../dateTimeFormatter";
import { passTypeCounter } from "../PlacesChoosing/WagonSchemes/WagonSeatBtn";
import { PopupWindow } from "../PopupWindow/PopupWindow";
import "./orderConfirmation.css";


export const OrderConfirmation = () => {

    const { selectedTrain } = useAppSelector(state => state.selectedTrain);
    const { passengers } = useAppSelector(state => state.passengersData);
    const { selectedSeats } = useAppSelector(state => state.selectedSeats);
    const { paymentData } = useAppSelector(state => state.paymentData);
    const { passQuantity } = useAppSelector(state => state.passengersQuantity);

    const [sendData, setSendData] = useState(false);
    const [error, setError] = useState('');

    const sendConfirmation = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_ORDER, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user": {
                    "first_name": paymentData.name,
                    "last_name": paymentData.surname,
                    "patronymic": paymentData.patronimyc,
                    "phone": paymentData.phone,
                    "email": paymentData.email,
                    "payment_method": paymentData.paymentType == "Наличными" ? "cash" : "online"
                },
                "departure": {
                    "route_direction_id": selectedTrain.departure._id,
                    "seats": passengers["departure"].map((pass: any) => [
                        {
                            "coach_id": pass.wagonId,
                            "person_info": {
                                "is_adult": pass.age == 'Взрослый' ? true : false,
                                "first_name": pass.name,
                                "last_name": pass.surname,
                                "patronymic": pass.patronimyc,
                                "gender": pass.sex == "мужской" ? true : false,
                                "birthday": `${pass.birthday.slice(6, 10)}-${pass.birthday.slice(3, 5)}-${pass.birthday.slice(0, 2)}`,
                                "document_type": pass.document,
                                "document_data": pass.series + pass.number
                            },
                            "seat_number": pass.seatNumber,
                            "is_child": +passQuantity.departure.children > 0 ? true : false,
                            "include_children_seat": +passQuantity.departure.childrenNoSeat > 0 ? true : false,
                        }
                    ])
                },
                "arrival": {
                    "route_direction_id": selectedTrain.arrival._id,
                    "seats": passengers["arrival"].map((pass: any) => [
                        {
                            "coach_id": pass.wagonId,
                            "person_info": {
                                "is_adult": pass.age == 'Взрослый' ? true : false,
                                "first_name": pass.name,
                                "last_name": pass.surname,
                                "patronymic": pass.patronimyc,
                                "gender": pass.sex == "мужской" ? true : false,
                                "birthday": `${pass.birthday.slice(6, 10)}-${pass.birthday.slice(3, 5)}-${pass.birthday.slice(0, 2)}`,
                                "document_type": pass.document,
                                "document_data": pass.series + pass.number
                            },
                            "seat_number": pass.seatNumber,
                            "is_child": +passQuantity.arrival.children > 0 ? true : false,
                            "include_children_seat": +passQuantity.arrival.childrenNoSeat > 0 ? true : false,
                        }
                    ])
                },
            })
            })
          if (!response.ok) {
            throw new Error('Что-то пошло не так');
          } else {
            setSendData(true);
          }
        } catch (err: any) {
            setSendData(false);
            setError(err.message);
        }
    }

    useEffect(() => {
        sendConfirmation();
    }, [setSendData]);

    const closeWindow = () => {
        setSendData(false);
        setError('');
      }

    const trainChoosingParams = {
        thereTrainNumber: selectedTrain.departure.train.name,
        thereFrom: selectedTrain.departure.from.city.name,
        thereTo: selectedTrain.departure.to.city.name,
        thereDepartureTime: trainsTimeFormatter(selectedTrain.departure.from.datetime),
        thereArrivalTime: trainsTimeFormatter(selectedTrain.departure.to.datetime),
        thereDuration: travelDurationFormatter(selectedTrain.departure.duration),
        thereStationFrom: selectedTrain.departure.from.railway_station_name,
        thereStationTo: selectedTrain.departure.to.railway_station_name,
        backTrainNumber: selectedTrain.arrival._id ? selectedTrain.arrival.train.name : "",
        backFrom: selectedTrain.arrival._id ? selectedTrain.arrival.from.city.name : "",
        backTo: selectedTrain.arrival._id ? selectedTrain.arrival.to.city.name: "",
        backDepartureTime: selectedTrain.arrival._id ? trainsTimeFormatter(selectedTrain.arrival.from.datetime) : "",
        backArrivalTime: selectedTrain.arrival._id ? trainsTimeFormatter(selectedTrain.arrival.to.datetime) : "",
        backDuration: selectedTrain.arrival._id ? travelDurationFormatter(selectedTrain.arrival.duration) : "",
        backStationFrom: selectedTrain.arrival._id ? selectedTrain.arrival.from.railway_station_name : "",
        backStationTo: selectedTrain.arrival._id ? selectedTrain.arrival.to.railway_station_name : "",
        seatTypeSeats: selectedTrain.departure.have_fourth_class ? selectedTrain.departure.available_seats_info.fourth : 0,
        seatTypePrice: selectedTrain.departure.min_price,
        standardTypeSeats: selectedTrain.departure.have_third_class ? selectedTrain.departure.available_seats_info.third : 0,
        standardTopPrice: selectedTrain.departure.have_third_class ? selectedTrain.departure.price_info.third.top_price : 0,
        standardBottomPrice: selectedTrain.departure.have_third_class ? selectedTrain.departure.price_info.third.bottom_price : 0,
        standardSidePrice: selectedTrain.departure.have_third_class ? selectedTrain.departure.price_info.third.side_price : 0,
        coupeTypeSeats: selectedTrain.departure.have_second_class ? selectedTrain.departure.available_seats_info.second : 0,
        coupeTopPrice: selectedTrain.departure.have_second_class ? selectedTrain.departure.price_info.second.top_price : 0,
        coupeBottomPrice: selectedTrain.departure.have_second_class ? selectedTrain.departure.price_info.second.bottom_price : 0,
        luxeTypeSeats: selectedTrain.departure.have_first_class ? selectedTrain.departure.available_seats_info.first : 0,
        luxeBottomPrice: selectedTrain.departure.have_first_class ? selectedTrain.departure.price_info.first.price : 0,
        haveWifi: selectedTrain.departure.have_wifi,
        haveConditioner: selectedTrain.departure.have_air_conditioning,
        isExpress: selectedTrain.departure.is_express,
        btnType: "transparent_black_btn change_ticket_btn",
        routeLink: "/trains#all-trains",
        btnText: "Изменить"
    }

    return (
        <>
            <GeneralHeader/>
            <StagesLine currentStage={4}/>
            <div className="choosing_page_container" id="order-confirmation">
                <div className="container passengers_container">
                    <AsideTravellingDetails/>
                    <main className="data_for_confirmation">
                        <div className="confirmation_title">
                            <span className="passenger_data_title_text confirmation_title_text">Поезд</span>
                        </div>
                        <Train {...trainChoosingParams}/>
                        <div className="confirmation_title">
                            <span className="passenger_data_title_text confirmation_title_text">Пассажиры</span>
                        </div>
                        <div className="confirm_page_container">
                            <div className="confirm_passengers_info">
                                <div className="confirm_passengers_direction">Туда</div>
                                {passengers["departure"].map((passenger: any) => 
                                    <ConfirmPassengerInfo 
                                        passengerType={passenger.age} 
                                        fullName={passenger.surname + " " + passenger.name + " " + passenger.patronimyc} 
                                        sex={passenger.sex} 
                                        birthday={passenger.birthday} 
                                        documentType={passenger.document} 
                                        documentNumber={passenger.series + " " + passenger.number}
                                        wagonNumber={passenger.wagonName}
                                        seatNumber={passenger.seatNumber}
                                        limMob={passenger.limMob}
                                    />
                                )}
                                {passengers["arrival"].length ? <div className="confirm_passengers_direction">Обратно</div> : ""}
                                {passengers["arrival"].map((passenger: any) => 
                                    <ConfirmPassengerInfo 
                                        passengerType={passenger.age} 
                                        fullName={passenger.surname + " " + passenger.name + " " + passenger.patronimyc} 
                                        sex={passenger.sex} 
                                        birthday={passenger.birthday} 
                                        documentType={passenger.document} 
                                        documentNumber={passenger.series + " " + passenger.number}
                                        wagonNumber={passenger.wagonName}
                                        seatNumber={passenger.seatNumber}
                                        limMob={passenger.limMob}
                                    />
                                )}
                            </div>
                            <div className="confirm_price">
                                <div className="confirm_price_text">
                                    <span className="passenger_data_title_text confirmation_title_text">Всего</span>
                                    <span className="price">
                                        <span className="price_value confirm_total_price">
                                            {
                                                passTypeCounter(selectedSeats["departure"])[2] + 
                                                passTypeCounter(selectedSeats["departure"])[3] + 
                                                passTypeCounter(selectedSeats["arrival"])[2] + 
                                                passTypeCounter(selectedSeats["arrival"])[3] + " "
                                            }
                                        </span>
                                        <span className="currency ticket_currency confirm_total_price">₽</span>
                                    </span>
                                </div>
                                <div className="options_button_block">
                                    <HashLink smooth to="/passengers#passengers-data">
                                        <button className="transparent_black_btn change_ticket_btn">Изменить</button>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                        <div className="confirmation_title">
                            <span className="passenger_data_title_text confirmation_title_text">Способ оплаты</span>
                        </div>
                        <div className="confirm_page_container">
                            <div className="confirm_passengers_info confirm_pay_info">
                                <span className="confirm_pay_method">{paymentData.paymentType}</span>
                            </div>
                            <div className="confirm_price confirm_pay_change">
                                <div className="options_button_block">
                                    <HashLink smooth to="/payment#order-payment">
                                        <button className="transparent_black_btn change_ticket_btn">Изменить</button>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                        {error && 
                            <PopupWindow 
                                popupColor={'popup_header_error'} 
                                popupTitle={'Ошибка!'} 
                                popupText={error}
                                closeWindow={closeWindow}
                            />
                        }
                        <div className="btn_container">
                            <HashLink smooth to={sendData ? "/success#successful-order" : ""}>
                                <button className="orange_btn buy_btn" onClick={sendConfirmation}>подтвердить</button>
                            </HashLink>
                        </div>
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    )
}
