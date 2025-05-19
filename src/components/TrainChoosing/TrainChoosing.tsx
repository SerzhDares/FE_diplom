import { useEffect } from "react";
import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { Footer } from "../Footer/Footer";
import { AsideOptions } from "../Aside/AsideOptions/AsideOptions";
import { LastTickets } from "../LastTickets/LastTickets";
import { SearchInfo } from "./SearchInfo/SearchInfo";
import { Train } from "./Train/Train";
import { PageChoosing } from "./PageChoosing/PageChoosing";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchTrains, trainsState } from "../../store/slices/trainsSlice";
import { dateFormatter, trainsTimeFormatter, travelDurationFormatter } from "../../dateTimeFormatter";
import { Loading } from "../Loading/Loading";
import { selectedTrainOptions, clearTrainOptions } from "../../store/slices/selectedTrainSlice";
import { removeAllSelectedSeats } from "../../store/slices/selectedSeatsSlice";
import { removeAllPassengers } from "../../store/slices/passengersDataSlice";

export const TrainChoosing = () => {

  const { departureCity, arrivalCity, thereDate, backDate } = useAppSelector(state => state.search);
  const { loading, error, trains } = useAppSelector(trainsState);
  const { options, ticketCost, time } = useAppSelector(state => state.trainsParams);
  const { limit, offset, sort } = useAppSelector(state => state.sortViewResults);

  const dispatch = useAppDispatch();

  let url = `${import.meta.env.VITE_TRAINS_ROUTES}?from_city_id=${
    departureCity.id}&to_city_id=${arrivalCity.id}&date_start=${
    dateFormatter(thereDate)}&date_end=${dateFormatter(backDate)}&price_from=${
    ticketCost.from}&price_to=${ticketCost.to}&start_departure_hour_from=${
    Math.floor(time.there.departure.from/60)}&start_departure_hour_to=${
    Math.floor(time.there.departure.to/60)}&start_arrival_hour_from=${
    Math.floor(time.there.arrival.from/60)}&start_arrival_hour_to=${
    Math.floor(time.there.arrival.to/60)}&end_departure_hour_from=${
    Math.floor(time.back.departure.from/60)}&end_departure_hour_to=${
    Math.floor(time.back.departure.to/60)}&end_arrival_hour_from=${
    Math.floor(time.back.arrival.from/60)}&end_arrival_hour_to=${
    Math.floor(time.back.arrival.to/60)}&limit=${limit}&offset=${
    offset}&sort=${sort.value}`

  if (options.firstClass) {
    url = url + '&have_first_class=true';
  }
  if (options.secondClass) {
    url = url + '&have_second_class=true';
  }
  if (options.thirdClass) {
    url = url + '&have_third_class=true';
  }
  if (options.fourthClass) {
    url = url + '&have_fourth_class=true';
  }
  if (options.haveWifi) {
    url = url + '&have_wifi=true';
  }
  if (options.isExpress) {
    url = url + '&is_express=true';
  }

  useEffect(() => {
    dispatch(fetchTrains(url));
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: 'smooth'
    })
  }, [url])

  const setTrain = (train: {departure: {}, arrival: {}}) => {
    dispatch(removeAllSelectedSeats());
    dispatch(removeAllPassengers())
    dispatch(clearTrainOptions());
    dispatch(selectedTrainOptions({
      value: train.departure,
      direction: "departure"
    }));
    if (train.arrival) {
      dispatch(selectedTrainOptions({
        value: train.arrival,
        direction: "arrival"
      }));
    }
  }

  return (
    <>
      <GeneralHeader/>
      <StagesLine currentStage={1}/>
      {loading && <Loading/>}
      {error && <h3>{error}</h3>}
      {!loading &&
        <div className="choosing_page_container" id="all-trains">
          <div className="container train_choosing_container">
            <aside className="aside_block">
                <AsideOptions/>
                <LastTickets/>
            </aside>
            <main className="tickets_variants">
                <SearchInfo variantsFound={trains.total_count}/>
                  <div className="tickets">
                    {trains.items.length ? (trains.items.map((train: any) => (
                      <Train key={train.departure._id}
                        thereTrainNumber={train.departure.train.name}
                        thereFrom={train.departure.from.city.name}
                        thereTo={train.departure.to.city.name}
                        thereDepartureTime={trainsTimeFormatter(train.departure.from.datetime)}
                        thereArrivalTime={trainsTimeFormatter(train.departure.to.datetime)}
                        thereDuration={travelDurationFormatter(train.departure.duration)}
                        thereStationFrom={train.departure.from.railway_station_name}
                        thereStationTo={train.departure.to.railway_station_name}
                        backTrainNumber={train.arrival ? train.arrival.train.name : ""}
                        backFrom={train.arrival ? train.arrival.from.city.name : ""}
                        backTo={train.arrival ? train.arrival.to.city.name: ""}
                        backDepartureTime={train.arrival ? trainsTimeFormatter(train.arrival.from.datetime) : ""}
                        backArrivalTime={train.arrival ? trainsTimeFormatter(train.arrival.to.datetime) : ""}
                        backDuration={train.arrival ? travelDurationFormatter(train.arrival.duration) : ""}
                        backStationFrom={train.arrival ? train.arrival.from.railway_station_name : ""}
                        backStationTo={train.arrival ? train.arrival.to.railway_station_name : ""}
                        seatTypeSeats={train.departure.have_fourth_class ? train.departure.available_seats_info.fourth : 0}
                        seatTypePrice={train.departure.min_price}
                        standardTypeSeats={train.departure.have_third_class ? train.departure.available_seats_info.third : 0}
                        standardTopPrice={train.departure.have_third_class ? train.departure.price_info.third.top_price : 0}
                        standardBottomPrice={train.departure.have_third_class ? train.departure.price_info.third.bottom_price : 0}
                        standardSidePrice={train.departure.have_third_class ? train.departure.price_info.third.side_price : 0}
                        coupeTypeSeats={train.departure.have_second_class ? train.departure.available_seats_info.second : 0}
                        coupeTopPrice={train.departure.have_second_class ? train.departure.price_info.second.top_price : 0}
                        coupeBottomPrice={train.departure.have_second_class ? train.departure.price_info.second.bottom_price : 0}
                        luxeTypeSeats={train.departure.have_first_class ? train.departure.available_seats_info.first : 0}
                        luxeBottomPrice={train.departure.have_first_class ? train.departure.price_info.first.price : 0}
                        haveWifi={train.departure.have_wifi} 
                        haveConditioner={train.departure.have_air_conditioning} 
                        isExpress={train.departure.is_express}  
                        btnType={"orange_btn choosing_seats_btn"}
                        routeLink={"/seats#places"}
                        btnText={"Выбрать места"}
                        onClick={() => setTrain(train)}
                      />
                    ))) : <h2>Поезда на указанную дату не найдены</h2>}
                  </div>
                <PageChoosing/>
            </main>
          </div>
        </div>
      }
      <Footer/>
    </>
  )
}
