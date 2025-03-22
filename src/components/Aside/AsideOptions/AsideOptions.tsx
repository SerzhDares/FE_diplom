import { OptionsDate } from "./OptionsDate";
import { WagonOption } from "./WagonOption";
import { PriceSlider } from "./PriceSlider/PriceSlider";
import { TimeChoosing } from "./TimeChoosing/TimeChoosing";
import { useAppSelector } from "../../../hooks";
import "./asideOptions.css";

export const AsideOptions = () => {

  const { thereDate, backDate } = useAppSelector(state => state.search);
  const { ticketCost } = useAppSelector(state => state.trainsParams);

  return (
        <section className="options">
            <div className="aside_block_item options_dates">
              <OptionsDate 
                dateText={"Дата поездки"} 
                date={thereDate} 
                minDate={new Date()} 
                maxDate={backDate? backDate : undefined}
                fieldClass={"there_date"}
              />
              <OptionsDate 
                dateText={"Дата возвращения"} 
                date={backDate} 
                minDate={thereDate ? thereDate : new Date()} 
                maxDate={undefined}
                fieldClass={""}
              />
            </div>
            <div className="aside_block_item wagon_options">
              <WagonOption optionName={"Купе"} optionClass={"wagon_coupe"} name={"secondClass"}/>
              <WagonOption optionName={"Плацкарт"} optionClass={"wagon_standard"} name={"thirdClass"}/>
              <WagonOption optionName={"Сидячий"} optionClass={"wagon_seat"} name={"fourthClass"}/>
              <WagonOption optionName={"Люкс"} optionClass={"wagon_luxe"} name={"firstClass"}/>
              <WagonOption optionName={"Wi-Fi"} optionClass={"wagon_wifi"} name={"haveWifi"}/>
              <WagonOption optionName={"Экспресс"} optionClass={"wagon_express"} name={"isExpress"}/>
            </div>
            <PriceSlider 
              min={0} 
              max={10000} 
              priceFrom={ticketCost.from}
              priceTo={ticketCost.to}
              onChange={({ min, max }: { min: number; max: number }) => {
                return { min, max }
              }}
            />
            <TimeChoosing directionClass="time_choosing_there" direction="Туда" directionSection="thereSection"/>
            {backDate && <TimeChoosing directionClass="time_choosing_back" direction="Обратно" directionSection="backSection"/>}
        </section>
  )
}
