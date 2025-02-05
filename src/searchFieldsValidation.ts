import { useEffect, useState } from "react";
import { FieldsValues } from "./validation";

export const searchFieldsValidation = () => { //функция для валидации полей, вынес ее отдельно, но не понимаю как связать ее с компонентами (например, MainPage.tsx)

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
}