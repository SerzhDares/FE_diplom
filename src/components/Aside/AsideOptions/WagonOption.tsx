import { ToggleSwitch } from "./ToggleSwitch/ToggleSwitch";
import classNames from "classnames";;

interface WagonOptionProps {
    optionName: string;
    optionClass: string;
}

export const WagonOption = ({optionName, optionClass}: WagonOptionProps) => {

    const wagonOptionClasses = classNames("wagon_option", optionClass);

    return (
        <div className={wagonOptionClasses}>
            <span className="wagon_option_name">{optionName}</span>
            <ToggleSwitch name={optionName}/>
        </div>
    )
}
