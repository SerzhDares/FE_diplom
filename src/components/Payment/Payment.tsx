import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { Footer } from "../Footer/Footer";
import { AsideTravellingDetails } from "../Aside/AsideTravellingDetails/AsideTravellingDetails";
import { FullName } from "../Passengers/PassengerData/FullName";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import "./payment.css";

export const Payment = () => {

  interface PaymentFieldsValues {
    surname: string;
    name: string;
    phoneNumber: string;
    email: string;
  }

  const [paymentInputFields, setPaymentInputFields] = useState<PaymentFieldsValues>({
    surname: "",
    name: "",
    phoneNumber: "",
    email: "",
  })

  const [errors, setErrors] = useState<PaymentFieldsValues>({
    surname: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronimyc, setPatronimyc] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const validateFields = (e: any) => {
    const result = e.target.value.replace(/[^а-яА-яёЁ-]/gi, '');
    if (e.target.id == "name") setName(result);
    if (e.target.id == "surname") setSurname(result);
    if (e.target.id == "patronimyc") setPatronimyc(result);
    if (e.target.id == "phoneNumber") {
        const result = e.target.value.replace(/[^0-9+]/gi, '');
        setPhoneNumber(result);
    }
    if (e.target.id == "email") {
        const result = e.target.value.replace(/[^A-Za-z0-9@._-]/gi, '');
        setEmail(result);
    }
    setPaymentInputFields({ ...paymentInputFields, [e.target.id]: e.target.value });
  }

  const [routeLink, setRouteLink] = useState('');

  const validateValues = (inputValues: PaymentFieldsValues) => {
    
    let errors = {
        surname: "",
        name: "",
        phoneNumber: "",
        email: "",
    };

    if(!inputValues.surname) errors.surname = "Введите фамилию";
    if(!inputValues.name) errors.name = "Введите имя";
    if(!inputValues.phoneNumber || inputValues.phoneNumber.length < 11) errors.phoneNumber = "Введите номер в формате +79123456789";
    if(!inputValues.email) errors.email = "Введите e-mail";

    if (!errors.surname && !errors.name && !errors.phoneNumber && !errors.email) {
        setRouteLink("/confirmation#order-confirmation");
    } else {
        setRouteLink("/payment#order-payment");
    }

    return errors;
  }

  useEffect(() => {
    validateValues(paymentInputFields);
  }, [validateFields]);

  const [paymentMethod, setPaymentMethod] = useState('online');
  const choicePaymentMethod = (e: any) => {setPaymentMethod(e.target.value)}

  const buyTickets = () => {
    setErrors(validateValues(paymentInputFields));
  }

  return (
    <>
        <GeneralHeader/>
        <StagesLine currentStage={3}/>
        <div className="choosing_page_container" id="order-payment">
            <div className="container passengers_container">
                <AsideTravellingDetails/>
                <main className="passengers_data pay_data">
                    <div className="passenger_data">
                        <div className="passenger_data_title pay_pd_title">
                            <span className="passenger_data_title_text">Персональные данные</span>
                        </div>
                        <div className="passenger_data_main">
                            <div className="about_passenger pay_personal_data">
                                <FullName nameValue={name} surnameValue={surname} patronimycValue={patronimyc} errSurname={errors.surname} errName={errors.name} titleColorClass={"pay_item_title"} validation={() => validateFields}/>
                                <div className="pd_item pd_item_contact">
                                    <span className="pd_item_title pay_item_title">Контактный телефон</span>
                                    <input style={{ border: errors.phoneNumber ? "1px solid #FF3D00C2" : "" }} type="text" id="phoneNumber" className="pd_item-input contact_input" placeholder="+7_ _ _ _ _ _ _ _ _ _" value={phoneNumber} onChange={validateFields}/>
                                    {errors.phoneNumber ? <p className="error-text">{errors.phoneNumber}</p> : null}
                                </div>
                                <div className="pd_item pd_item_contact">
                                    <span className="pd_item_title pay_item_title">E-mail</span>
                                    <input style={{ border: errors.email ? "1px solid #FF3D00C2" : "" }} type="text" id="email" className="pd_item-input contact_input" placeholder="inbox@gmail.ru" value={email} onChange={validateFields}/>
                                    {errors.email ? <p className="error-text">{errors.email}</p> : null}
                                </div>
                            </div>
                            <div className="passenger_data_title pay_pd_title pay_methods_title">
                                <span className="passenger_data_title_text">Способ оплаты</span>
                            </div>
                            <div className="pay_method_container">
                                <div className="pay_method_variant">
                                    <input type="checkbox" className="pay_method_check" value="online" checked={paymentMethod=='online' ? true : false} onChange={choicePaymentMethod}/>
                                    <span className="pay_method_text">Онлайн</span>
                                </div>
                                <div className="online_pay_variants">
                                    <span className="online_pay_variant">Банковской<br/>картой</span>
                                    <span className="online_pay_variant">PayPal</span>
                                    <span className="online_pay_variant">Visa QIWI Wallet</span>
                                </div>
                            </div>
                            <div className="pay_method_container">
                                <div className="pay_method_variant">
                                    <input type="checkbox" className="pay_method_check" value="cash" checked={paymentMethod=='cash' ? true : false} onChange={choicePaymentMethod}/>
                                    <span className="pay_method_text">Наличными</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_container">
                        <HashLink smooth to={routeLink}>
                            <button className="orange_btn buy_btn" onClick={buyTickets}>купить билеты</button>
                        </HashLink>
                    </div>
                </main>
            </div>
        </div>
        <Footer/>
    </>
  )
}
