import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { Footer } from "../Footer/Footer";
import { AsideOptions } from "../Aside/AsideOptions/AsideOptions";
import { LastTickets } from "../LastTickets/LastTickets";
import { SearchInfo } from "./SearchInfo/SearchInfo";
import { Train } from "./Train/Train";
import { PageChoosing } from "./PageChoosing/PageChoosing";

export const TrainChoosing = () => {

  const trainChoosingParams = {
    thereTrainNumber: "116C",
    startPoint: "Адлер",
    thereFrom: "Москва",
    thereTo: "Санкт-Петербург",
    thereDepartureTime: "00:10",
    thereArrivalTime: "09:52",
    thereDuration: "9:42",
    thereStationFrom: "Курский вокзал",
    thereStationTo: "Ладожский вокзал",
    backTrainNumber: "",
    backDepartureTime: "10:52",
    backArrivalTime: "20:34",
    backDuration: "9:42",
    backStationFrom: "Финляндский вокзал",
    backStationTo: "Ленинградский вокзал",
    btnType: "orange_btn choosing_seats_btn",
    routeLink: "/seats#places",
    btnText: "Выбрать места",
  }

  return (
    <>
      <GeneralHeader/>
      <StagesLine currentStage={1}/>
      <div className="choosing_page_container" id="all-trains">
        <div className="container train_choosing_container">
          <aside className="aside_block">
              <AsideOptions/>
              <LastTickets/>
          </aside>
          <main className="tickets_variants">
              <SearchInfo variantsFound={20}/>
              <div className="tickets">
                <Train {...trainChoosingParams}/>
              </div>
              <PageChoosing/>
          </main>
        </div>
      </div>
      <Footer/>
    </>
  )
}
