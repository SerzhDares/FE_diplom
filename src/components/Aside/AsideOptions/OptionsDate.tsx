import { Calendar } from "../../Calendar";

interface OptionsDateProps {
    dateText: string;
    date: Date | null;
    minDate: Date | undefined;
    maxDate: Date | undefined;
    fieldClass: string;
}

export const OptionsDate = ({dateText, date, minDate, maxDate, fieldClass}: OptionsDateProps) => {

  return (
    <div className="options_date">
        <span className="input_title options_title">{dateText}</span>
        <Calendar 
          startDate={date}
          minDate={minDate}
          maxDate={maxDate}
          monthYearDropdown={false}
          errorClass={fieldClass}
        />
    </div>
  )
}
