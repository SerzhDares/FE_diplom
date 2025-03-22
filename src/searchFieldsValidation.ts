import { useEffect, useState } from "react";
import { useAppSelector } from "./hooks";

export const searchFieldsValidation = () => {

  const { departureCity, arrivalCity, thereDate } = useAppSelector(state => state.search);

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
}