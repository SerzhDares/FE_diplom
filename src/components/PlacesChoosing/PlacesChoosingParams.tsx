import { ChooseOtherTrain } from "./ChooseOtherTrain";
import { TrainTimeInfo } from "./TrainTimeInfo/TrainTimeInfo";
import { TicketsQuantity } from "./TicketsQuantity/TicketsQuantity";
import { WagonTypeChoosing } from "./WagonTypeChoosing/WagonTypeChoosing";
import { AvailableWagons } from "./AvailableWagons/AvailableWagons";
import { WagonStandardScheme } from "./WagonSchemes/WagonStandardScheme";

export const PlacesChoosingParams = () => {

  const trainTimeInfoParams = {
    trainNumber: "116C",
    startPoint: "Адлер",
    from: "Москва",
    to: "Санкт-Петербург",
    departureTime: "00:10",
    arrivalTime: "09:52",
    stationFrom: "Курский вокзал",
    stationTo: "Ладожский вокзал",
    durationHours: 9,
    durationMinutes: 42,
    directionArrow: "src/images/orange_right_arrow.svg"
  }

  return (
    <div className="places_choosing_params">
        <ChooseOtherTrain 
            directionClass={"choose_other_there"} 
            directionImg={"src/images/choose_other_there.svg"}
        />
        <TrainTimeInfo {...trainTimeInfoParams}/>
        <TicketsQuantity/>
        <WagonTypeChoosing/>
        <AvailableWagons wagons={['07', '09']} numInfo={"Нумерация вагонов начинается с головы поезда"}/>
        <WagonStandardScheme/>
    </div>
  )
}
