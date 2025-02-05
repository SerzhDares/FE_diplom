import { useState, useEffect, SetStateAction } from "react";
import { Logo } from "../Logo";
import { HeaderMenu } from "../Header/HeaderMenu/HeaderMenu";
import { Calendar } from "../Calendar";
import { AboutUs } from "./AboutUs/AboutUs";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { Reviews } from "./Reviews/Reviews";
import { Footer } from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import { FieldsValues } from "../../validation";
import useDebounce from "../../hooks/useDebounce";
import { AutoComplete } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks";
// import { selectDepartureCity } from "../../store/slices/searchSlice";
import { changeSearchFields, swapValues } from "../../store/slices/searchSlice";
import './mainPage.css';
import { CitiesDynamicSearch } from "../CitiesDynamicSearch";

export const backwardsFunction = (e: any) => { //функция для кнопки смены городов (менять местами города отправления и прибытия)
  e.preventDefault();                          //работает неправильно, т.к. непонятно как сюда не передается состояние инпутов из searchSlice.js
  const fromInputText = document.querySelector('.input_from') as HTMLInputElement;
  const toInputText = document.querySelector('.input_to') as HTMLInputElement;
  const fromValue = fromInputText.value;
  const toValue = toInputText.value;
  if (fromValue || toValue) {
    fromInputText.value = toValue;
    toInputText.value = fromValue;
  }
}

export const MainPage = () => {
  
// закомментированное ниже вынесено в компонент CitiesDynamicSearch.tsx

//   const [inputValue, setInputValue] = useState<string | undefined>('');
//   const dynamicSearch = useDebounce(inputValue, 500);
//   const dispatch = useAppDispatch();

//   const [cities, setCities] = useState<{label: string; value: string}[]>([]);

//   const getCities = async (value: string | undefined) => {
//     try {
//       const response = await fetch(`${import.meta.env.VITE_CITIES_LIST}=${value}`);
//       if (!response.ok) {
//         throw new Error('Что-то пошло не так');
//       }
//       const data = await response.json();
//       setCities(
//         data.map((city: { [x: string]: any; name: any; }) => ({ label: city.name, value: city['_id'] }))
//      );
//     } catch (err) {
//       throw new Error('Что-то пошло не так');
//     }
//   }

//   useEffect(() => {
//     if (inputValue?.trim() === '') {
//        return;
//     }
//     if (dynamicSearch) {
//        getCities(inputValue);
//     }
//  }, [dynamicSearch]);


//  const searchHandler = (value: SetStateAction<string | undefined>) => {
//     setInputValue(value);
//     if (value === '') {
//       dispatch(
//           changeSearchFields({ value: { id: null, name: null } })
//       );
//     }
//   };

//   const selectHandler = (data: string) => {
//     console.log(data);
//     console.log(cities);
//     const cityName = cities.find((city) => city.value === data)?.label;
//     setInputValue(cityName);
//     dispatch(
//       changeSearchFields({ value: { id: data, name: cityName } })
//    );
//   }
  const dispatch = useAppDispatch();


  const swapFunction = (e: any) => { //функция чтобы менять города местами, переданная из searchSlice.js
    e.preventDefault();              //не понимаю, как сделать ее работоспособной
    dispatch(swapValues());
  }

  //далее идет код для валидации полей (нашел такой вариант в интернете), вынес в отдельный
  //файл searchFieldsValidation.ts, но не знаю, как связать его с данным компонентом

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
        setRouteLink("/#header");
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
                  cityFieldValidation={inputFields.pointFrom} 
                  cityFieldChange={handleChange} 
                  cityFieldName={"pointFrom"} 
                  cityFieldPlaceholder={"Откуда"}
                  directionClass="input_from"
                />
                <button className="backwards_btn" onClick={swapFunction}></button>
                <CitiesDynamicSearch 
                  cityFieldError={errors.pointTo} 
                  cityFieldValidation={inputFields.pointTo} 
                  cityFieldChange={handleChange} 
                  cityFieldName={"pointTo"} 
                  cityFieldPlaceholder={"Куда"}
                  directionClass="input_to"
                />
              </div>
              <div className="form_inputs date-inputs">
                <div className="date-input-title">
                  <span className="input_title">Дата</span>
                  <Calendar startDate={dateThere} changeDate={(date: Date | null) => setDateThere(date)} minDate={new Date()} maxDate={undefined} monthYearDropdown={false} errorClass={errors.date ? "input-error_bold" : ""}/>
                </div>
                <Calendar startDate={dateBack} changeDate={(date: Date | null) => setDateBack(date)} minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
              </div>
              <HashLink smooth to={routeLink}>
                <button onClick={handleSubmit} className="orange_btn search_btn">Найти билеты</button>
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
