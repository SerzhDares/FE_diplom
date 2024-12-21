import { Calendar } from "../../Calendar";

interface OptionsDateProps {
    dateText: string;
}

export const OptionsDate = ({dateText}: OptionsDateProps) => {
  return (
    <div className="options_date">
        <span className="input_title options_title">{dateText}</span>
        <Calendar minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
    </div>
  )
}
