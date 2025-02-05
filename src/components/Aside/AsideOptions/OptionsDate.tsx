import { useState } from "react";
import { Calendar } from "../../Calendar";

interface OptionsDateProps {
    dateText: string;
}

export const OptionsDate = ({dateText}: OptionsDateProps) => {

  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="options_date">
        <span className="input_title options_title">{dateText}</span>
        <Calendar startDate={startDate} changeDate={(date: Date | null) => setStartDate(date)} minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
    </div>
  )
}
