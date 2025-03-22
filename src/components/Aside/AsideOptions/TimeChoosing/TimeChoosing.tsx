import classNames from "classnames";
import { MoreButton } from "../../MoreButton";
import { TimeSlider } from "../TimeSlider/TimeSlider";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { timeChoosingSectionState } from "../../../../store/slices/trainsParamsSlice";
import './timeChoosing.css';

interface TimeChoosingProps {
    direction: string;
    directionClass: string;
    directionSection: string;
}

export const TimeChoosing = ({direction, directionClass, directionSection}: TimeChoosingProps) => {

    const dispatch = useAppDispatch();
    const { time, timeChoosingSection } = useAppSelector(state => state.trainsParams)

    const isOpen = timeChoosingSection[directionSection as keyof typeof timeChoosingSection];

    const openBtn = () => {dispatch(timeChoosingSectionState({directionSection, value: !isOpen}))};
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
            <TimeSlider 
              min={0}
              max={1439}
              timeOf={'Время отбытия'}
              directionValue={direction} 
              timeFrom={
                direction=="Туда" ? time.there.departure.from : time.back.departure.from
              }
              timeTo={
                direction=="Туда" ? time.there.departure.to : time.back.departure.to
              }
              onChange={({ min, max }: { min: string; max: string; }) => {
                return { min, max };
              }}
            />
            <div className="time_slider_title_block tstb_departure">
              <span className="time_slider_title">Время прибытия</span>
            </div>
            <TimeSlider 
              min={0} 
              max={1439} 
              timeOf={'Время прибытия'}
              directionValue={direction} 
              timeFrom={
                direction=="Туда" ? time.there.arrival.from : time.back.arrival.from
              }
              timeTo={
                direction=="Туда" ? time.there.arrival.to : time.back.arrival.to
              }
              onChange={({ min, max }: { min: number; max: number; }) => {
                return { min, max };
              }}        
            />
        </div>
    </div>
  )
}
