import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import { useAppDispatch } from '../hooks';
import { changeBackDate, changeThereDate, clearThereDate, clearBackDate } from '../store/slices/searchSlice';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru);

interface DatePickerProps {
  minDate: Date | undefined;
  maxDate: Date | undefined;
  monthYearDropdown: boolean;
  errorClass?: string;
  startDate: Date | null;
  changeBirthday?: Function;
  clearBirthday?: Function;
}

export const Calendar = ({minDate, maxDate, monthYearDropdown, errorClass, startDate, changeBirthday, clearBirthday}: DatePickerProps) => {

  const dispatch = useAppDispatch();

  return (
    <div className={startDate ? "datepicker_date_field" : ""}>
      <DatePicker
        locale="ru" 
        selected={startDate}
        onChange={(date) => {
          if (errorClass == "birthday_input" || errorClass == "input-error birthday_input") {
            changeBirthday ? changeBirthday(date) : undefined;
          }
          if (errorClass == "input-error_bold there_date" || errorClass == "there_date") {
            dispatch(changeThereDate(date));
          } 
          if (errorClass == "") {
            dispatch(changeBackDate(date));
          }
        }}
        minDate={minDate}
        id='date'
        maxDate={maxDate}
        dateFormat={"dd.MM.yyyy"}
        placeholderText={"ДД.ММ.ГГГГ"}
        className={errorClass}
        showMonthDropdown={monthYearDropdown}
        showYearDropdown={monthYearDropdown}
        dropdownMode="select"
      />
      {startDate &&
        <button className="clear-date_btn"
          onClick={(e) => {
            e.preventDefault();
            if (errorClass == "birthday_input" || errorClass == "input-error birthday_input") {
              clearBirthday ? clearBirthday() : undefined;
            }
            if (errorClass == "input-error_bold there_date" || errorClass == "there_date") {
              dispatch(clearThereDate());
            } 
            if (errorClass == "") {
              dispatch(clearBackDate()) ;
            }
          }}
        >
            <svg fillRule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 
              338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 
              512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 
              557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 
              512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
            </svg>
          </button>
        }
    </div>
  );
};