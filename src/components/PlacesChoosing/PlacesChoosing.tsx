import { useMemo } from "react";
import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { AsideOptions } from "../Aside/AsideOptions/AsideOptions";
import { LastTickets } from "../LastTickets/LastTickets";
import { ChooseOtherTrain } from "./ChooseOtherTrain";
import { TrainTimeInfo } from "./TrainTimeInfo/TrainTimeInfo";
import { TicketsQuantity } from "./TicketsQuantity/TicketsQuantity";
import { WagonTypeChoosing } from "./WagonTypeChoosing/WagonTypeChoosing";
import { Footer } from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import { useAppSelector } from "../../hooks";
import { trainsTimeFormatter, travelDurationFormatter } from "../../dateTimeFormatter";
import { passTypeCounter } from "./WagonSchemes/WagonSeatBtn";
import classNames from "classnames";
import "./placesChoosing.css";


export const PlacesChoosing = () => {

  const { selectedTrain } = useAppSelector(state => state.selectedTrain);
  const { selectedSeats } = useAppSelector(state => state.selectedSeats);
  const { passQuantity } = useAppSelector(state => state.passengersQuantity);

  const getRandomHumans = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const seatsTotalPrice = (direction: string) => {
    let sum = 0;
    selectedSeats[direction as keyof typeof selectedSeats].forEach((seat: any) => {
      sum += seat.seatPrice;
    })
    return sum;
  }

  const nextBtnState = () => {
    let disabledState = true;
    const departureConditions = 
      (+passQuantity["departure"].adults > 0 || +passQuantity["departure"].children > 0) && 
      (+passQuantity["departure"].adults == passTypeCounter(selectedSeats["departure"])[0] && 
        +passQuantity["departure"].children == passTypeCounter(selectedSeats["departure"])[1])
    const arrivalConditions = 
      (+passQuantity["arrival"].adults > 0 || +passQuantity["arrival"].children > 0) && 
      (+passQuantity["arrival"].adults == passTypeCounter(selectedSeats["arrival"])[0] && 
        +passQuantity["arrival"].children == passTypeCounter(selectedSeats["arrival"])[1])
    if (
        (departureConditions && !selectedTrain.arrival._id) || 
        (departureConditions && selectedTrain.arrival._id && arrivalConditions)
      )
      {
        disabledState = false;
      }
    return disabledState;
  }

  return (
    <>
    <GeneralHeader/>
    <StagesLine currentStage={1}/>
    <div className="choosing_page_container" id="places">
        <div className="container places_choosing_container">
            <aside className="aside_block">
                <AsideOptions/>
                <LastTickets/>
            </aside>
            <main className="places_choosing_content">
                <h2 className="choosing_pages_title places_choosing_title">выбор мест</h2>
                <div className="places_choosing_params">
                    <ChooseOtherTrain 
                        directionClass={"choose_other_there"} 
                        directionImg={"src/images/choose_other_there.svg"}
                    />
                    <TrainTimeInfo 
                        trainNumber={selectedTrain.departure.train.name}
                        from={selectedTrain.departure.from.city.name}
                        to={selectedTrain.departure.to.city.name}
                        departureTime={trainsTimeFormatter(selectedTrain.departure.from.datetime)}
                        arrivalTime={trainsTimeFormatter(selectedTrain.departure.to.datetime)}
                        stationFrom={selectedTrain.departure.from.railway_station_name}
                        stationTo={selectedTrain.departure.to.railway_station_name}
                        durationHours={Number(selectedTrain.departure.duration)/3600 <= 100 ? 
                          travelDurationFormatter(selectedTrain.departure.duration).slice(0, 2)
                          : travelDurationFormatter(selectedTrain.departure.duration).slice(0, 3)
                        }
                        durationMinutes={Number(selectedTrain.departure.duration)/3600 <= 100 ? 
                          travelDurationFormatter(selectedTrain.departure.duration).slice(3, 5)
                          : travelDurationFormatter(selectedTrain.departure.duration).slice(4, 6)
                        }
                        directionArrow={"src/images/orange_right_arrow.svg"}
                    />
                    <TicketsQuantity direction={"departure"}/>
                    <WagonTypeChoosing direction={"departure"} humansQuantity={useMemo(() => getRandomHumans(5, 20), [])}/>
                    {selectedSeats.departure.length ?
                      <div className="seats_total_price">
                        <span className="seats_total_price_value">{seatsTotalPrice("departure")}</span>
                        <span className="currency seats_total_price_currency">₽</span>
                      </div>
                    : ""}
                </div>
                {selectedTrain.arrival._id &&
                  <div className="places_choosing_params">
                      <ChooseOtherTrain 
                          directionClass={"choose_other_back"}
                          directionImg={"src/images/choose_other_back.svg"}
                      />
                      <TrainTimeInfo 
                        trainNumber={selectedTrain.arrival.train.name}
                        from={selectedTrain.arrival.from.city.name}
                        to={selectedTrain.arrival.to.city.name}
                        departureTime={trainsTimeFormatter(selectedTrain.arrival.from.datetime)}
                        arrivalTime={trainsTimeFormatter(selectedTrain.arrival.to.datetime)}
                        stationFrom={selectedTrain.arrival.from.railway_station_name}
                        stationTo={selectedTrain.arrival.to.railway_station_name}
                        durationHours={Number(selectedTrain.arrival.duration)/3600 <= 100 ? 
                          travelDurationFormatter(selectedTrain.arrival.duration).slice(0, 2)
                          : travelDurationFormatter(selectedTrain.arrival.duration).slice(0, 3)
                        }
                        durationMinutes={Number(selectedTrain.arrival.duration)/3600 <= 100 ? 
                          travelDurationFormatter(selectedTrain.arrival.duration).slice(3, 5)
                          : travelDurationFormatter(selectedTrain.arrival.duration).slice(4, 6)
                        }
                        directionArrow={"src/images/orange_right_arrow.svg"}
                      />
                      <TicketsQuantity direction={"arrival"}/>
                      <WagonTypeChoosing direction={"arrival"} humansQuantity={useMemo(() => getRandomHumans(5, 20), [])}/>
                      {selectedSeats.arrival.length ?
                        <div className="seats_total_price">
                          <span className="seats_total_price_value">{seatsTotalPrice("arrival")}</span>
                          <span className="currency seats_total_price_currency">₽</span>
                        </div>
                      : ""}
                  </div>
                }
                <div className="btn_container">
                  <HashLink smooth to="/passengers#passengers-data">
                    <button 
                      className={classNames("orange_btn next_btn", nextBtnState() ? "disabled_btn" : "")} 
                      disabled={nextBtnState()}
                    >
                      Далее
                    </button>
                  </HashLink>
                </div>
            </main>
        </div>
    </div>
    <Footer/>
    </>
  )
}
