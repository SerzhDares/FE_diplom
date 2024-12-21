import '../AsideOptions/TimeChoosing/timeChoosing.css';
import './asideTravellingDetails.css';
import { AsideTravellingInfo } from './AsideTravellingInfo';
import { AsidePassengersPriceInfo } from './AsidePassengersPriceInfo';


export const AsideTravellingDetails = () => {

  return (
    <aside className="aside_block details_aside_block">
        <div className="aside_block_item details_title">
            детали поездки
        </div>
        <AsideTravellingInfo
            directionClass='time_choosing_there'
            direction='Туда'
            startDate='30.10.2024'
            finishDate='30.10.2024'
            trainNumber='116C'
            startPoint='Адлер'
            endPoint='Санкт-Петербург'
            startTime='00:10'
            finishTime='09:52'
            arrowDirectionClass='travel_time_there'
            duration='09 : 42'
            departurePoint='Москва'
            arrivalPoint='Санкт-Петербург'
            departureStation='Курский вокзал'
            arrivalStation='Ладожский вокзал'
        />
        <AsideTravellingInfo
            directionClass='time_choosing_back'
            direction='Обратно'
            startDate='09.11.2024'
            finishDate='09.11.2024'
            trainNumber='116C'
            startPoint='Адлер'
            endPoint='Санкт-Петербург'
            startTime='00:10'
            finishTime='09:52'
            arrowDirectionClass='travel_time_back'
            duration='09 : 42'
            departurePoint='Москва'
            arrivalPoint='Санкт-Петербург'
            departureStation='Курский вокзал'
            arrivalStation='Ладожский вокзал'
        />
        <AsidePassengersPriceInfo
            adultsPassengers='2 взрослых'
            priceForAdults={5840}
            childrenPassengers='1 ребенок'
            priceForChildren={1920}
        />
    </aside>
  )
}
