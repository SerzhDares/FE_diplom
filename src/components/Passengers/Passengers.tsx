import { GeneralHeader } from "../Header/GeneralHeader";
import { StagesLine } from "../Header/Stages/StagesLine";
import { AsideTravellingDetails } from "../Aside/AsideTravellingDetails/AsideTravellingDetails";
import { PassengerData } from "./PassengerData/PassengerData";
import { Footer } from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import { useAppSelector } from "../../hooks";
import classNames from "classnames";

export const Passengers = () => {

  // const dispatch = useAppDispatch();

  const { selectedSeats } = useAppSelector(state => state.selectedSeats);
  const { passengers } = useAppSelector(state => state.passengersData);

  console.log(passengers);

  const nextBtnState = () => {
    let btnDisabled;
    selectedSeats["departure"].length + selectedSeats["arrival"].length == 
      passengers["departure"].length +  passengers["arrival"].length ?
    btnDisabled = false : btnDisabled = true;
    return btnDisabled;
  }

  // const [passengers, setPassengers] = useState([""])

  // const addPassenger = () => {
  //   setPassengers([...passengers, ""])
  // }

  // const deletePassenger = (direction: string, wagonName: string, seatNumber: number) => {
  //   setPassengers(passengers.filter((_, i) => i !== index));
  //   dispatch(removePassenger({direction, wagonName, seatNumber}))
  // }

  return (
    <>
        <GeneralHeader/>
        <StagesLine currentStage={2}/>
        <div className="choosing_page_container" id="passengers-data">
          <div className="container passengers_container">
            <AsideTravellingDetails/>
            <main className="passengers_data">
              {passengers["departure"].length && 
                passengers["departure"].length == selectedSeats["departure"].length ? 
                  passengers["departure"].map((pass: any, i: number) => 
                    <PassengerData 
                      key={i}
                      direction={"departure"}
                      wagonId={pass.wagonId}
                      wagonName={pass.wagonName}
                      seatNumber={pass.seatNumber}
                      passId={pass.age}
                      passengerNumber={i + 1}
                      passName={pass.name} 
                      passSurname={pass.surname} 
                      passPatronimyc={pass.patronimyc}
                      passSex={pass.sex}
                      passBirthday={new Date(pass.birthday.slice(3, 6)+pass.birthday.slice(0, 4)+pass.birthday.slice(7, 11))}
                      passLimMob={pass.limMob}
                      passDocument={pass.document}
                      passSeries={pass.series}
                      passNumber={pass.number}
                      passIndex = {i}
                      passBtnText={pass.btnText}
                      // deletePassenger={() => deletePassenger("Туда", seat.wagonName, seat.seatIndex)}
                    />
                  ) :
                  selectedSeats["departure"].map((seat: any, i: number) => 
                    <PassengerData 
                      key={i}
                      direction={"departure"}
                      wagonId={seat.wagonId}
                      wagonName={seat.wagonName}
                      seatNumber={seat.seatIndex}
                      passId={seat.passId}
                      passengerNumber={i + 1}
                      passIndex={i}
                      passBirthday={null}
                    />
                  )
              }
              {passengers["arrival"].length &&
                passengers["arrival"].length == selectedSeats["arrival"].length ? 
                  passengers["arrival"].map((pass: any, i: number) => 
                    <PassengerData 
                      key={i}
                      direction={"arrival"}
                      wagonId={pass.wagonId}
                      wagonName={pass.wagonName}
                      seatNumber={pass.seatNumber}
                      passId={pass.age}
                      passengerNumber={i + 1}
                      passName={pass.name} 
                      passSurname={pass.surname} 
                      passPatronimyc={pass.patronimyc}
                      passSex={pass.sex}
                      passBirthday={new Date(pass.birthday.slice(3, 6)+pass.birthday.slice(0, 4)+pass.birthday.slice(7, 11))}
                      passLimMob={pass.limMob}
                      passDocument={pass.document}
                      passSeries={pass.series}
                      passNumber={pass.number}
                      passIndex={i}
                      passBtnText={pass.btnText}
                      // deletePassenger={() => deletePassenger("Туда", seat.wagonName, seat.seatIndex)}
                    />
                  ) :
                  selectedSeats["arrival"].map((seat: any, i: number) => 
                    <PassengerData 
                      key={i}
                      direction={"arrival"}
                      wagonId={seat.wagonId}
                      wagonName={seat.wagonName}
                      seatNumber={seat.seatIndex}
                      passId={seat.passId}
                      passengerNumber={i + 1}
                      passIndex={i}
                      passBirthday={null} 
                    />
                  )
              }
              {/* <div className="passenger_data">
                <div className="passenger_data_title add_passenger">
                  <div className="pd_title_block">
                    <span className="passenger_data_title_text">Добавить пассажира</span>
                  </div>
                  <button className="add_passenger_btn" onClick={addPassenger}>
                    <img src="src/images/add_passenger_icon.svg" alt="добавить" className="add_passenger_icon"/>
                  </button>
                </div>
              </div> */} 
              <div className="btn_container">
                <HashLink smooth to="/payment#order-payment">
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
