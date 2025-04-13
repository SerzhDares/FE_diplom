import { IWagonSeats, WagonSeatBtn } from "./WagonSeatBtn";
import "./wagonSchemes.css";

export const WagonSeatScheme = ({seats}: IWagonSeats) => {
  return (
    <>
      <div className="wagon_scheme">
        <img src="src/images/wagon_beginning.jpg" alt="начало вагона" className="wagon_beginning"/>
        <div className="places_scheme">
          <div className="coupes_scheme seats_scheme">
            <div className="seat-places top-seat-places">
              {/* <button className="place_btn seat-place_btn">2</button> */}
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={2} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={4} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={6} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={8} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={10} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={12} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={14} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={16} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={18} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={20} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={22} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={24} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={26} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={28} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={30} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={32} seats={seats}/>
            </div>
            <div className="seat-places center-seat-places">
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={1} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={3} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={5} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={7} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={9} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={11} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={13} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={15} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={17} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={19} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={21} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={23} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={25} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={27} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={29} seats={seats}/>
              <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={31} seats={seats}/>
            </div>
          </div>
          <div className="seat-places passage-seat-places">
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={34} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={36} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={38} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={40} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={42} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={44} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={46} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={48} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={50} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={52} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={54} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={56} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={58} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={60} seats={seats}/>
          </div>
          <div className="seat-places bottom-seat-places">
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={33} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={35} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={37} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={39} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={41} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={43} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={45} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={47} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={49} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={51} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={53} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={55} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={57} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={59} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={61} seats={seats}/>
            <WagonSeatBtn addClass={"seat-place_btn"} seatNumber={62} seats={seats}/>
          </div>
        </div>
        <img src="src/images/wagon_ending.jpg" alt="конец вагона" className="wagon_ending"/>
      </div>
    </>
  )
}
