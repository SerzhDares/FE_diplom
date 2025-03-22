import { ToggleSwitch } from "./ToggleSwitch/ToggleSwitch";
import classNames from "classnames";

interface WagonOptionProps {
    optionName: string;
    optionClass: string;
    name: string;
}

export const WagonOption = ({optionName, optionClass, name}: WagonOptionProps) => {

    const wagonOptionClasses = classNames("wagon_option", optionClass);

    return (
        <div className={wagonOptionClasses} >
            <span className="wagon_option_name">{optionName}</span>
            <ToggleSwitch optionName={optionName} name={name}/>
        </div>
    )
}
