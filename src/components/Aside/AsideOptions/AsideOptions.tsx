import { OptionsDate } from "./OptionsDate";
import { WagonOption } from "./WagonOption";
import { PriceSlider } from "./PriceSlider/PriceSlider";
import { TimeChoosing } from "./TimeChoosing/TimeChoosing";
import "./asideOptions.css";

export const AsideOptions = () => {

  return (
        <section className="options">
            <div className="aside_block_item options_dates">
              <OptionsDate dateText={"Дата поездки"}/>
              <OptionsDate dateText={"Дата возвращения"}/>
            </div>
            <div className="aside_block_item wagon_options">
              <WagonOption optionName={"Купе"} optionClass={"wagon_coupe"}/>
              <WagonOption optionName={"Плацкарт"} optionClass={"wagon_standard"}/>
              <WagonOption optionName={"Сидячий"} optionClass={"wagon_seat"}/>
              <WagonOption optionName={"Люкс"} optionClass={"wagon_luxe"}/>
              <WagonOption optionName={"Wi-Fi"} optionClass={"wagon_wifi"}/>
              <WagonOption optionName={"Экспресс"} optionClass={"wagon_express"}/>
            </div>
            <PriceSlider min={0} max={10000} onChange={({ min, max }: { min: number; max: number }) => {
                    return { min, max }
                  }}
            />
            <TimeChoosing directionClass="time_choosing_there" direction="Туда"/>
            <TimeChoosing directionClass="time_choosing_back" direction="Обратно"/>
        </section>
  )
}
