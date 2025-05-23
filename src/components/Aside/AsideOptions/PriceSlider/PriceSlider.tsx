import './priceSlider.css';
import { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { useAppDispatch } from '../../../../hooks';
import { changeMaxCost, changeMinCost } from '../../../../store/slices/trainsParamsSlice';

// Call the props
interface MultiRangeSliderProps {
    min: number;
    max: number;
    priceFrom: number;
    priceTo: number;
    onChange: Function;
  }

export const PriceSlider: FC<MultiRangeSliderProps> = ({min, max, priceFrom, priceTo, onChange}) => {

    const dispatch = useAppDispatch();

    const [minVal, setMinVal] = useState(priceFrom);
    const [maxVal, setMaxVal] = useState(priceTo);
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

    return (
        <div className="aside_block_item tickets_cost">
            <span className="input_title options_title">Стоимость</span>
            <div className="slider_text_container">
                <span className="slider_text">от</span>
                <span className="slider_text">до</span>
            </div>
            <div className="slider_container">
                <input type="range" step={5} min={min} max={max} value={minVal} ref={minValRef}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        setMinVal(value);
                    }}
                    onMouseUp={() => {dispatch(changeMinCost(minVal))}}
                    className={classnames("thumb thumb--zindex-3", {"thumb--zindex-5": minVal > max - 100})}
                />
                <input type="range" step={5} min={min} max={max} value={maxVal} ref={maxValRef}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.max(+event.target.value, minVal + 1);
                        setMaxVal(value);
                    }}
                    onMouseUp={() => {dispatch(changeMaxCost(maxVal))}}
                    className="thumb thumb--zindex-4"
                />
                <div className="slider">
                    <div className="slider__track"></div>
                    <div ref={range} className="slider__range"></div>
                    <div className="bottom_slider_text slider__left-value">{minVal}</div>
                    <div className="bottom_slider_text slider__right-value">{maxVal}</div>
                </div>
            </div>
        </div>
    )
}
