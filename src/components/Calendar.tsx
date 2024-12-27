import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';

registerLocale('ru', ru);

interface DatePickerProps {
  minDate: Date | undefined;
  maxDate: Date | undefined;
  monthYearDropdown: boolean;
  errorClass?: string;
}

export const Calendar = ({minDate, maxDate, monthYearDropdown, errorClass}: DatePickerProps) => {

  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <DatePicker 
      locale="ru" 
      selected={startDate} 
      onChange={(date) => setStartDate(date)}
      minDate={minDate}
      id='date'
      maxDate={maxDate}
      dateFormat={"dd.MM.yyyy"}
      placeholderText={"ДД/ММ/ГГ"}
      className={errorClass}
      showMonthDropdown={monthYearDropdown}
      showYearDropdown={monthYearDropdown}
      dropdownMode="select"
     />
  );
};