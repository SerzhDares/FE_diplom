import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { Footer } from "../Footer/Footer";
import { AsideTravellingDetails } from "../Aside/AsideTravellingDetails/AsideTravellingDetails";
import { FullName } from "../Passengers/PassengerData/FullName";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { FieldsValues } from "../../models/models";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { savePaymentData } from "../../store/slices/paymentSlice";
import "./payment.css";

export const Payment = () => {

  const dispatch = useAppDispatch();
  const { passengers } = useAppSelector(state => state.passengersData);
  const { paymentData } = useAppSelector(state => state.paymentData);
  const firstPassenger = passengers["departure"][0];

  const [errors, setErrors] = useState<FieldsValues>({
    surname: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [name, setName] = useState(firstPassenger.name ? firstPassenger.name : "");
  const [surname, setSurname] = useState(firstPassenger.surname ? firstPassenger.surname : "");
  const [patronimyc, setPatronimyc] = useState(firstPassenger ? firstPassenger.patronimyc : "");
  const [phoneNumber, setPhoneNumber] = useState(paymentData.phone ? paymentData.phone : "");
  const [email, setEmail] = useState(paymentData.email ? paymentData.email : "");

  const [paymentMethod, setPaymentMethod] = useState(paymentData.paymentType ? paymentData.paymentType :'Онлайн');
  const choicePaymentMethod = (e: any) => {setPaymentMethod(e.target.value)}

  const validateFields = (e: any) => {
    const result = e.target.value.replace(/[^а-яА-яёЁ-]/gi, '');
    if (e.target.name == "name") setName(result);
    if (e.target.name == "surname") setSurname(result);
    if (e.target.name == "patronimyc") setPatronimyc(result);
    if (e.target.name == "phoneNumber") {
        const result = e.target.value.replace(/[^0-9+]/gi, '');
        setPhoneNumber(result);
    }
    if (e.target.name == "email") {
        const result = e.target.value.replace(/[^A-Za-z0-9@._-]/gi, '');
        setEmail(result);
    }
  }
    
  const getRandomOrderNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [routeLink, setRouteLink] = useState('');

  const validateValues = ({surname, name, phoneNumber, email}: FieldsValues) => {
    
    let errors = {
        surname: "",
        name: "",
        phoneNumber: "",
        email: "",
    };

    if(!surname) errors.surname = "Введите фамилию";
    if(!name) errors.name = "Введите имя";
    if(!phoneNumber || phoneNumber && !((/\+[0-9]{11,15}/).test(phoneNumber))) errors.phoneNumber = "Введите номер в формате +79123456789";
    if(!email || email && !((/[a-z0-9]+@[a-z]+\.[a-z]{2,4}/).test(email))) errors.email = "Введите корректный e-mail";

    if (!errors.surname && !errors.name && !errors.phoneNumber && !errors.email) {
        dispatch(savePaymentData(
            {name: name, surname: surname, patronimyc: patronimyc, 
            phone: phoneNumber, email: email, paymentType: paymentMethod,
            orderNumber: getRandomOrderNumber(101, 299) + firstPassenger.name[0] + firstPassenger.surname[0]}
        ))
        setRouteLink("/confirmation#order-confirmation");
    } else {
        setRouteLink("/payment#order-payment");
    }

    return errors;
  }

  useEffect(() => {
    validateValues({surname, name, phoneNumber, email});
  }, [surname, name, phoneNumber, email]);


  const buyTickets = () => {
    setErrors(validateValues({surname, name, phoneNumber, email}));
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
                                <FullName 
                                    nameValue={name} 
                                    surnameValue={surname} 
                                    patronimycValue={patronimyc} 
                                    errSurname={errors.surname} 
                                    errName={errors.name} 
                                    titleColorClass={"pay_item_title"} 
                                    validation={() => validateFields}
                                />
                                <div className="pd_item pd_item_contact">
                                    <span className="pd_item_title pay_item_title">Контактный телефон</span>
                                    <input 
                                        style={{ border: errors.phoneNumber ? "1px solid #FF3D00C2" : "" }} 
                                        type="text" 
                                        name="phoneNumber" 
                                        className="pd_item-input contact_input" 
                                        placeholder="+7_ _ _ _ _ _ _ _ _ _" 
                                        value={phoneNumber} 
                                        onChange={validateFields}
                                    />
                                    {errors.phoneNumber ? <p className="error-text">{errors.phoneNumber}</p> : null}
                                </div>
                                <div className="pd_item pd_item_contact">
                                    <span className="pd_item_title pay_item_title">E-mail</span>
                                    <input 
                                        style={{ border: errors.email ? "1px solid #FF3D00C2" : "" }} 
                                        type="text" 
                                        name="email" 
                                        className="pd_item-input contact_input" 
                                        placeholder="inbox@gmail.ru" 
                                        value={email} 
                                        onChange={validateFields}
                                    />
                                    {errors.email ? <p className="error-text">{errors.email}</p> : null}
                                </div>
                            </div>
                            <div className="passenger_data_title pay_pd_title pay_methods_title">
                                <span className="passenger_data_title_text">Способ оплаты</span>
                            </div>
                            <div className="pay_method_container">
                                <div className="pay_method_variant">
                                    <input 
                                        type="checkbox" 
                                        className="pay_method_check" 
                                        value="Онлайн" 
                                        checked={paymentMethod=='Онлайн' ? true : false} 
                                        onChange={choicePaymentMethod}
                                    />
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
                                    <input 
                                        type="checkbox" 
                                        className="pay_method_check" 
                                        value="Наличными" 
                                        checked={paymentMethod=='Наличными' ? true : false} 
                                        onChange={choicePaymentMethod}
                                    />
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
