import classNames from "classnames";
import { useState } from "react";
import { MoreButton } from "../../MoreButton";
import { TimeSlider } from "../TimeSlider/TimeSlider";
import './timeChoosing.css';

interface TimeChoosingProps {
    direction: string;
    directionClass: string;
}

export const TimeChoosing = ({direction, directionClass}: TimeChoosingProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const openBtn = () => {setIsOpen(!isOpen)};
    const timeChoosingClasses = classNames("aside_block_item time_choosing", directionClass);

  return (
    <div className={timeChoosingClasses}>
        <div className="time_choosing_title">
            <span className="time_choosing_text">{direction}</span>
            <MoreButton btnSetState={openBtn} btnState={isOpen}/>
        </div>
        <div className={isOpen ? "time_slider_block open" : "time_slider_block"}>
            <div className="time_slider_title_block tstb_arrival">
              <span className="time_slider_title">Время отбытия</span>
            </div>
            <TimeSlider min={0} max={1439} onChange={({ min, max }: { min: string; max: string }) => {
                return { min, max }
              }}
            />
            <div className="time_slider_title_block tstb_departure">
              <span className="time_slider_title">Время прибытия</span>
            </div>
            <TimeSlider min={0} max={1439} onChange={({ min, max }: { min: number; max: number }) => {
                return { min, max }
              }}
            />
        </div>
    </div>
  )
}
