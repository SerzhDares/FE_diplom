import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { AsideTravellingDetails } from "../Aside/AsideTravellingDetails/AsideTravellingDetails";
import { Train } from "../TrainChoosing/Train/Train";
import { ConfirmPassengerInfo } from "./ConfirmPassengerInfo/ConfirmPassengerInfo";
import { Footer } from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import "./orderConfirmation.css";

export const OrderConfirmation = () => {

  const trainChoosingParams = {
    thereTrainNumber: "116C",
    startPoint: "Адлер",
    thereFrom: "Москва",
    thereTo: "Санкт-Петербург",
    thereDepartureTime: "00:10",
    thereArrivalTime: "09:52",
    thereDuration: "9:42",
    thereStationFrom: "Курский вокзал",
    thereStationTo: "Ладожский вокзал",
    backTrainNumber: "",
    backDepartureTime: "10:52",
    backArrivalTime: "20:34",
    backDuration: "9:42",
    backStationFrom: "Финляндский вокзал",
    backStationTo: "Ленинградский вокзал",
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
                            <ConfirmPassengerInfo 
                                passengerType={"Взрослый"} 
                                fullName={"Мартынюк Ирина Эдуардовна"} 
                                sex={"женский"} 
                                birthday={"17.02.1985"} 
                                documentType={"Паспорт РФ"} 
                                documentNumber={"4204 380694"}
                            />
                            <ConfirmPassengerInfo 
                                passengerType={"Детский"} 
                                fullName={"Мартынюк Кирилл Сергеевич"} 
                                sex={"мужской"} 
                                birthday={"25.01.2015"} 
                                documentType={"Свидетельство о рождении"} 
                                documentNumber={"VIII УН 256319"}
                            />
                            <ConfirmPassengerInfo 
                                passengerType={"Взрослый"} 
                                fullName={"Мартынюк Сергей Петрович"} 
                                sex={"мужской"} 
                                birthday={"19.06.1982"} 
                                documentType={"Паспорт РФ"} 
                                documentNumber={"4204 380694"}
                            />
                        </div>
                        <div className="confirm_price">
                            <div className="confirm_price_text">
                                <span className="passenger_data_title_text confirmation_title_text">Всего</span>
                                <span className="price">
                                    <span className="price_value confirm_total_price">7 760</span>
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
                            <span className="confirm_pay_method">Наличными</span>
                        </div>
                        <div className="confirm_price confirm_pay_change">
                            <div className="options_button_block">
                                <HashLink smooth to="/payment#order-payment">
                                    <button className="transparent_black_btn change_ticket_btn">Изменить</button>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                    <div className="btn_container">
                        <HashLink smooth to="/success#successful-order">
                            <button className="orange_btn buy_btn">подтвердить</button>
                        </HashLink>
                    </div>
                </main>
            </div>
        </div>
        <Footer/>
    </>
  )
}
