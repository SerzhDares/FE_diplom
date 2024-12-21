import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { AsideTravellingDetails } from "../Aside/AsideTravellingDetails/AsideTravellingDetails";
import { PassengerData } from "./PassengerData/PassengerData";
// import { ErrorData } from "./ErrorData/ErrorData";
// import { SuccessfulData } from "./SuccessfulData/SuccessfulData";
import { Footer } from "../Footer/Footer";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export const Passengers = () => {

  const [passengers, setPassengers] = useState([""])

  const addPassenger = () => {
    setPassengers([...passengers, ""])
  }

  const deletePassenger = (index: number) => {
    setPassengers(passengers.filter((_, i) => i !== index))
  }

  return (
    <>
        <GeneralHeader/>
        <StagesLine currentStage={2}/>
        <div className="choosing_page_container" id="passengers-data">
          <div className="container passengers_container">
            <AsideTravellingDetails/>
            <main className="passengers_data">
              {passengers.map((_, i) => 
                <PassengerData key={i} passengerNumber={i+1} deletePassenger={() => deletePassenger(i)}/>
              )}
              <div className="passenger_data">
                <div className="passenger_data_title add_passenger">
                  <div className="pd_title_block">
                    <span className="passenger_data_title_text">Добавить пассажира</span>
                  </div>
                  <button className="add_passenger_btn" onClick={addPassenger}>
                    <img src="src/images/add_passenger_icon.svg" alt="добавить" className="add_passenger_icon"/>
                  </button>
                </div>
              </div>
              <div className="btn_container">
                <HashLink smooth to="/payment#order-payment">
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
