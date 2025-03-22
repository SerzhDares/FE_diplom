import { useState, useEffect } from "react";
import { Calendar } from "../../Calendar";
import { HashLink } from "react-router-hash-link";
import { swapValues } from "../../../store/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { CitiesDynamicSearch } from "../../CitiesDynamicSearch";
import "./generalSearchForm.css";

export const GeneralSearchForm = () => {

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
      setRouteLink("");
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
    <div className="container">
      <div className="header_bottom-block header_bottom-block_trains">
        <form action="" className="header__form header__form_trains">
          <div className="form_inputs_container">
            <div className="form_inputs route-inputs form-inputs_trains">
              <div className="trains-way_title_input">
                <span className="input_title">Направление</span>
                <CitiesDynamicSearch 
                  cityFieldError={errors.pointFrom} 
                  cityFieldValidation={departureCity.name} 
                  cityFieldName={"pointFrom"} 
                  cityFieldPlaceholder={"Откуда"}
                  directionClass="form__input_trains input_from"
                />
              </div>
              <button className="backwards_btn trains_backwards_btn" onClick={swapFunction}></button>
              <CitiesDynamicSearch 
                  cityFieldError={errors.pointTo} 
                  cityFieldValidation={arrivalCity.name} 
                  cityFieldName={"pointTo"} 
                  cityFieldPlaceholder={"Куда"}
                  directionClass="form__input_trains input_to"
                />
            </div>
            <div className="form_inputs date-inputs form-inputs_trains date-inputs_trains">
              <div className="trains-date_title_input">
                <span className="input_title input_title_date">Дата</span>
                <Calendar 
                  startDate={thereDate} 
                  minDate={new Date()} 
                  maxDate={backDate? backDate : undefined} 
                  monthYearDropdown={false} 
                  errorClass={errors.date ? "input-error_bold there_date" : "there_date"}
                />
              </div>
              <div className="trains-date_title_input">
                <Calendar 
                  startDate={backDate} 
                  minDate={thereDate ? thereDate : new Date()} 
                  maxDate={undefined} 
                  monthYearDropdown={false} 
                  errorClass=""/>
              </div>
            </div>
          </div>
          <HashLink smooth to={routeLink}>
            <button onClick={handleSubmit} className="orange_btn search_btn trains_search_btn">
                Найти билеты
            </button>
          </HashLink>
        </form>
      </div>
    </div>
  )
}
