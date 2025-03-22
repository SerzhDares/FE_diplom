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
import "./placesChoosing.css";

export const PlacesChoosing = () => {

  const { selectedTrain } = useAppSelector(state => state.selectedTrain);

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
                        durationHours={travelDurationFormatter(selectedTrain.departure.duration).slice(0, 2)}
                        durationMinutes={travelDurationFormatter(selectedTrain.departure.duration).slice(3, 5)}
                        directionArrow={"src/images/orange_right_arrow.svg"}
                    />
                    <TicketsQuantity/>
                    <WagonTypeChoosing/>
                </div>
                {selectedTrain.arrival && 
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
                        durationHours={travelDurationFormatter(selectedTrain.arrival.duration).slice(0, 2)}
                        durationMinutes={travelDurationFormatter(selectedTrain.arrival.duration).slice(3, 5)}
                        directionArrow={"src/images/orange_right_arrow.svg"}
                      />
                      <TicketsQuantity/>
                      <WagonTypeChoosing/>
                  </div>
                }
                <div className="btn_container">
                  <HashLink smooth to="/passengers#passengers-data">
                    <button className="orange_btn next_btn">Далее</button>
                  </HashLink>
                </div>
            </main>
        </div>
    </div>
    <Footer/>
    </>
  )
}
