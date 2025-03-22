import './timeSlider.css';
import { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { useAppDispatch } from '../../../../hooks';
import { changeTimeThereDepartureFrom, 
        changeTimeThereArrivalFrom, 
        changeTimeThereDepartureTo, 
        changeTimeBackDepartureTo, 
        changeTimeBackDepartureFrom, 
        changeTimeBackArrivalFrom, 
        changeTimeThereArrivalTo, 
        changeTimeBackArrivalTo 
       } from '../../../../store/slices/trainsParamsSlice';

// Call the props
interface MultiRangeTimeSliderProps {
    min: number;
    max: number;
    onChange: Function;
    timeFrom: number;
    timeTo: number;
    directionValue: string;
    timeOf: string;
  }

export const TimeSlider: FC<MultiRangeTimeSliderProps> = ({min, max, timeFrom, timeTo, directionValue, timeOf, onChange}) => {

    const dispatch = useAppDispatch();

    const [minVal, setMinVal] = useState(timeFrom);
    const [maxVal, setMaxVal] = useState(timeTo);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);
  
    // Convert to percentage
    const getPercent = useCallback(
      (value: number) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
    );

      // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
        const minPercent = getPercent(+minValRef.current.value);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    const hoursConverter = (value: number) => {
        let minHours: number | string = Math.floor(value/60);
        minHours < 10 ? minHours = '0' + minHours : minHours;
        return minHours;
    }

    const minutesConverter = (value: number) => {
        let minMinutes: number | string = Math.floor((value/60 - Math.floor(value/60))*60);
        minMinutes < 10 ? minMinutes = '0' + minMinutes : minMinutes;
        return minMinutes;
    }

    return (
        <div className="slider_container">
            <input type="range" step={5} min={min} max={max} value={minVal} ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                }}
                onMouseUp={() => {
                    if (directionValue == "Туда" && timeOf == "Время отбытия") {
                        dispatch(changeTimeThereDepartureFrom(minVal));
                    }
                    if (directionValue == "Туда" && timeOf == "Время прибытия") {
                        dispatch(changeTimeThereArrivalFrom(minVal));
                    }
                    if (directionValue == "Обратно" && timeOf == "Время отбытия") {
                        dispatch(changeTimeBackDepartureFrom(minVal));
                    }
                    if (directionValue == "Обратно" && timeOf == "Время прибытия") {
                        dispatch(changeTimeBackArrivalFrom(minVal));
                    }
                }}
                className={classnames("thumb time-thumb thumb--zindex-3", {"thumb--zindex-5": minVal > max - 100})}
            />
            <input type="range" step={5} min={min} max={max} value={maxVal} ref={maxValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                }}
                onMouseUp={() => {
                    if (directionValue == "Туда" && timeOf == "Время отбытия") {
                        dispatch(changeTimeThereDepartureTo(maxVal));
                    }
                    if (directionValue == "Туда" && timeOf == "Время прибытия") {
                        dispatch(changeTimeThereArrivalTo(maxVal));
                    }
                    if (directionValue == "Обратно" && timeOf == "Время отбытия") {
                        dispatch(changeTimeBackDepartureTo(maxVal));
                    }
                    if (directionValue == "Обратно" && timeOf == "Время прибытия") {
                        dispatch(changeTimeBackArrivalTo(maxVal));
                    }
                }}
                className="thumb time-thumb thumb--zindex-4"
            />
            <div className="slider">
                <div className="slider__track time-slider__track"></div>
                <div ref={range} className="slider__range time-slider__range"></div>
                <div className="bottom_slider_text slider__left-value time-slider__left-value">{hoursConverter(minVal) + ':' + minutesConverter(minVal)}</div>
                <div className="bottom_slider_text slider__right-value">{hoursConverter(maxVal) + ':' + minutesConverter(maxVal)}</div>
            </div>
        </div>
    )
}
