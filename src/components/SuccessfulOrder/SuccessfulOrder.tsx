import { Logo } from "../Logo";
import { HeaderMenu } from "../Header/HeaderMenu/HeaderMenu";
import { RatingBlock } from "./RatingBlock";
import { Footer } from "../Footer/Footer";
import { HashLink } from 'react-router-hash-link';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { passTypeCounter } from "../PlacesChoosing/WagonSchemes/WagonSeatBtn";
import { clearPassQuantity } from "../../store/slices/passengersQuantitySlice";
import { clearPaymentData } from "../../store/slices/paymentSlice";
import "./successfulOrder.css";


export const SuccessfulOrder = () => {

    const dispatch = useAppDispatch();

    const { selectedSeats } = useAppSelector(state => state.selectedSeats);
    const { paymentData } = useAppSelector(state => state.paymentData);

    const clearFunction = () => {
        dispatch(clearPassQuantity());
        dispatch(clearPaymentData());
    }

    return (
        <>
            <header className="header trains_header successful_order_header" id="header">
                <div className="container">
                    <Logo logoClass={"logo"}/>
                </div>
                <HeaderMenu/>
            </header>
            <main className="container successful_order" id="successful-order">
                <h1 className="header_title successful_order_header_title">Благодарим Вас за заказ!</h1>
                <div className="successful_order_container">
                    <div className="successful_order_info">
                        <div className="order_number">
                            <span className="order_number">№ заказа</span>
                            <span className="order_number_text">{" " + paymentData.orderNumber}</span>
                        </div>
                        <div className="order_price">
                            <span className="sum_text">сумма</span>
                            <span className="price">
                                <span className="price_value successful_order_price">
                                    {
                                        passTypeCounter(selectedSeats["departure"])[2] + 
                                        passTypeCounter(selectedSeats["departure"])[3] + 
                                        passTypeCounter(selectedSeats["arrival"])[2] + 
                                        passTypeCounter(selectedSeats["arrival"])[3] + " "
                                    }
                                </span>
                                <span className="currency">₽</span>
                            </span>
                        </div>
                    </div>
                    <div className="landing_rules">
                        <div className="landing_rule">
                            <img src="src/images/email_tickets_icon.svg" alt="билеты" className="landing_rule_img"/>
                            <span className="landing_rule_text">
                                билеты будут<br/>отправлены<br/>на ваш <span className="lr_bold_text">e-mail</span>
                            </span>
                        </div>
                        <div className="landing_rule">
                            <img src="src/images/print_tickets_icon.svg" alt="билеты" className="landing_rule_img"/>
                            <span className="landing_rule_text">
                                <span className="lr_bold_text">распечатайте</span><br/>и сохраняйте билеты<br/>до даты поездки
                            </span>
                        </div>
                        <div className="landing_rule">
                            <img src="src/images/conductor_icon.svg" alt="проводник" className="landing_rule_img"/>
                            <span className="landing_rule_text">
                                <span className="lr_bold_text">предъявите</span><br/>распечатанные<br/>билеты при посадке
                            </span>
                        </div>
                    </div>
                    <div className="text_for_client">
                        <span className="client_name">{paymentData.name + ' ' + paymentData.patronimyc}!</span>
                        <span className="info_for_client">
                            Ваш заказ успешно оформлен.<br/>
                            В ближайшее время с вами свяжется наш оператор для подтверждения.
                        </span>
                        <span className="thanks_for_client">
                            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
                        </span>
                    </div>
                    <div className="rating_back_block">
                        <RatingBlock/>
                        <HashLink smooth to='/#header'>
                            <button 
                                className="transparent_black_btn back_btn" 
                                onClick={clearFunction}
                            >
                                вернуться на главную
                            </button>
                        </HashLink>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
