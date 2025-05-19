import { AsideTravellingInfo } from './AsideTravellingInfo';
import { AsidePassengersPriceInfo } from './AsidePassengersPriceInfo';
import { useAppSelector } from '../../../hooks';
import { trainsDateFormatter, trainsTimeFormatter, travelDurationFormatter } from '../../../dateTimeFormatter';
import { passTypeCounter } from '../../PlacesChoosing/WagonSchemes/WagonSeatBtn';
import '../AsideOptions/TimeChoosing/timeChoosing.css';
import './asideTravellingDetails.css';


export const AsideTravellingDetails = () => {

  const { selectedTrain } = useAppSelector(state => state.selectedTrain);
  const { selectedSeats } = useAppSelector(state => state.selectedSeats);

  return (
    <aside className="aside_block details_aside_block">
        <div className="aside_block_item details_title">
            детали поездки
        </div>
        <AsideTravellingInfo
            directionClass='time_choosing_there'
            direction='Туда'
            startDate={trainsDateFormatter(selectedTrain.departure.from.datetime)}
            finishDate={trainsDateFormatter(selectedTrain.departure.to.datetime)}
            trainNumber={selectedTrain.departure.train.name}
            startTime={trainsTimeFormatter(selectedTrain.departure.from.datetime)}
            finishTime={trainsTimeFormatter(selectedTrain.departure.to.datetime)}
            arrowDirectionClass='travel_time_there'
            duration={travelDurationFormatter(selectedTrain.departure.duration)}
            departurePoint={selectedTrain.departure.from.city.name}
            arrivalPoint={selectedTrain.departure.to.city.name}
            departureStation={selectedTrain.departure.from.railway_station_name}
            arrivalStation={selectedTrain.departure.to.railway_station_name}
        />
        {selectedTrain.arrival._id &&
            <AsideTravellingInfo
                directionClass='time_choosing_back'
                direction='Обратно'
                startDate={trainsDateFormatter(selectedTrain.arrival.to.datetime)}
                finishDate={trainsDateFormatter(selectedTrain.arrival.from.datetime)}
                trainNumber={selectedTrain.arrival.train.name}
                startTime={trainsTimeFormatter(selectedTrain.arrival.to.datetime)}
                finishTime={trainsTimeFormatter(selectedTrain.arrival.from.datetime)}
                arrowDirectionClass='travel_time_back'
                duration={travelDurationFormatter(selectedTrain.arrival.duration)}
                departurePoint={selectedTrain.arrival.to.city.name}
                arrivalPoint={selectedTrain.arrival.from.city.name}
                departureStation={selectedTrain.arrival.to.railway_station_name}
                arrivalStation={selectedTrain.arrival.from.railway_station_name}
            />
        }
        <AsidePassengersPriceInfo
            adultsPassengersThere={passTypeCounter(selectedSeats["departure"])[0]}
            priceForAdultsThere={passTypeCounter(selectedSeats["departure"])[2]}
            childrenPassengersThere={passTypeCounter(selectedSeats["departure"])[1]}
            priceForChildrenThere={passTypeCounter(selectedSeats["departure"])[3]}
            isBack={selectedTrain.arrival._id}
            adultsPassengersBack={passTypeCounter(selectedSeats["arrival"])[0]}
            priceForAdultsBack={passTypeCounter(selectedSeats["arrival"])[2]}
            childrenPassengersBack={passTypeCounter(selectedSeats["arrival"])[1]}
            priceForChildrenBack={passTypeCounter(selectedSeats["arrival"])[3]}
        />
    </aside>
  )
}
