import { useState, useEffect } from "react";
import { Logo } from "../Logo";
import { HeaderMenu } from "../Header/HeaderMenu/HeaderMenu";
import { Calendar } from "../Calendar";
import { AboutUs } from "./AboutUs/AboutUs";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { Reviews } from "./Reviews/Reviews";
import { Footer } from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { swapValues } from "../../store/slices/searchSlice";
import { CitiesDynamicSearch } from "../CitiesDynamicSearch";
import './mainPage.css';

export const MainPage = () => {

  const { departureCity, arrivalCity, thereDate, backDate } = useAppSelector(state => state.search);
  
  const dispatch = useAppDispatch();

  const swapFunction = (e: any) => { //функция чтобы менять города местами, переданная из searchSlice.js
    e.preventDefault();
    dispatch(swapValues());
  }

  const [errors, setErrors] = useState({
    pointFrom: "",
    pointTo: "",
    date: "",
  });

  const [routeLink, setRouteLink] = useState('');

  const validateValues = () => {
      
      let errors = {
        pointFrom: "",
        pointTo: "",
        date: "",
      };

      if (!departureCity.name) errors.pointFrom = "Введите название точки отправления";
      if (!arrivalCity.name) errors.pointTo = "Введите название точки назначения";
      if (!thereDate) errors.date = "Введите дату в формате ДД.ММ.ГГГГ";

      if (!errors.pointFrom && !errors.pointTo && !errors.date) {
        setRouteLink("/trains#all-trains");
      } else {
        setRouteLink("/#header");
      }

      return errors;
  }

  useEffect(() => {
    validateValues();
  }, [validateValues]);

  const handleSubmit = () => {
    setErrors(validateValues());
  }

  return (
    <>
     <header className="header" id="header">
        <div className="container">
          <Logo logoClass="logo"/>
        </div>
        <HeaderMenu/>
        <div className="container">
          <div className="header_bottom-block">
            <h1 className="header_title">Вся жизнь - <br/><b>путешествие!</b></h1>
            <form action="" className="header__form">
              <div className="form_inputs route-inputs">
                <span className="input_title">Направление</span>
                <CitiesDynamicSearch 
                  cityFieldError={errors.pointFrom} 
                  cityFieldValidation={departureCity.name} 
                  cityFieldName={"pointFrom"} 
                  cityFieldPlaceholder={"Откуда"}
                  directionClass="input_from"
                />
                <button className="backwards_btn" onClick={swapFunction}></button>
                <CitiesDynamicSearch 
                  cityFieldError={errors.pointTo} 
                  cityFieldValidation={arrivalCity.name} 
                  cityFieldName={"pointTo"} 
                  cityFieldPlaceholder={"Куда"}
                  directionClass="input_to"
                />
              </div>
              <div className="form_inputs date-inputs">
                <div className="date-input-title">
                  <span className="input_title">Дата</span>
                  <Calendar 
                    startDate={thereDate} 
                    minDate={new Date()} 
                    maxDate={backDate? backDate : undefined} 
                    monthYearDropdown={false} 
                    errorClass={errors.date ? "input-error_bold there_date" : "there_date"}
                  />
                </div>
                <Calendar 
                  startDate={backDate} 
                  minDate={thereDate ? thereDate : new Date()} 
                  maxDate={undefined} 
                  monthYearDropdown={false} 
                  errorClass=""/>
              </div>
              <HashLink smooth to={routeLink}>
                <button onClick={handleSubmit} className="orange_btn search_btn">
                  Найти билеты
                </button>
              </HashLink>
            </form>
          </div>
        </div>
     </header>
     <AboutUs/>
     <HowItWorks/>
     <Reviews/>
     <Footer/>
    </>
  )
}
