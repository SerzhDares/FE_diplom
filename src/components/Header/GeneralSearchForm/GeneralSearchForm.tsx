import { useState, useEffect } from "react";
import { Calendar } from "../../Calendar";
import { backwardsFunction } from "../../MainPage/MainPage";
import { HashLink } from "react-router-hash-link";
import { FieldsValues } from "../../../validation";
import "./generalSearchForm.css";

export const GeneralSearchForm = () => {

  const [dateThere, setDateThere] = useState<Date | null>(null);
  const [dateBack, setDateBack] = useState<Date | null>(null);

  const [inputFields, setInputFields] = useState<FieldsValues>({
      pointFrom: "",
      pointTo: "",
  })

  const [errors, setErrors] = useState({
    pointFrom: "",
    pointTo: "",
    date: "",
  });

  const handleChange = (e: any) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const [routeLink, setRouteLink] = useState('');

  const validateValues = (inputValues: FieldsValues) => {
      
    let errors = {
      pointFrom: "",
      pointTo: "",
      date: "",
    };

    if (!inputValues.pointFrom) errors.pointFrom = "Введите название точки отправления";
    if (!inputValues.pointTo) errors.pointTo = "Введите название точки назначения";
    if (!dateThere) errors.date = "Введите дату в формате ДД.ММ.ГГГГ";

    if (!errors.pointFrom && !errors.pointTo && !errors.date) {
      setRouteLink("/trains#all-trains");
  } else {
      setRouteLink("");
  }

    return errors;
}

  useEffect(() => {
    validateValues(inputFields);
  }, [validateValues]);

  const handleSubmit = () => {
    setErrors(validateValues(inputFields));
  }

  return (
    <div className="container">
      <div className="header_bottom-block header_bottom-block_trains">
        <form action="" className="header__form header__form_trains">
          <div className="form_inputs_container">
            <div className="form_inputs route-inputs form-inputs_trains">
              <div className="trains-way_title_input">
                <span className="input_title">Направление</span>
                <input style={{ border: errors.pointFrom ? "3px solid #FF3D00C2" : "" }} name="pointFrom" value={inputFields.pointFrom} onChange={handleChange} type="text" className="form__input form__input_geo form__input_trains input_from" defaultValue="" placeholder="Откуда"/>
              </div>
              <button className="backwards_btn trains_backwards_btn" onClick={backwardsFunction}></button>
              <input style={{ border: errors.pointTo ? "3px solid #FF3D00C2" : "" }} name="pointTo" value={inputFields.pointTo} onChange={handleChange} type="text" className="form__input form__input_geo form__input_trains input_to" defaultValue="" placeholder="Куда"/>
            </div>
            <div className="form_inputs date-inputs form-inputs_trains date-inputs_trains">
              <div className="trains-date_title_input">
                <span className="input_title input_title_date">Дата</span>
                <Calendar startDate={dateThere} changeDate={(date: Date | null) => setDateThere(date)} minDate={new Date()} maxDate={undefined} monthYearDropdown={false} errorClass={errors.date ? "input-error_bold" : ""}/>
              </div>
              <div className="trains-date_title_input">
                <Calendar startDate={dateBack} changeDate={(date: Date | null) => setDateBack(date)} minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
              </div>
            </div>
          </div>
          <HashLink smooth to={routeLink}>
            <button onClick={handleSubmit} className="orange_btn search_btn trains_search_btn">Найти билеты</button>
          </HashLink>
        </form>
      </div>
    </div>
  )
}
