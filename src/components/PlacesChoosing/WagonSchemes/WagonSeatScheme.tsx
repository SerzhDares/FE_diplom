import { IWagonSeats, WagonSeatBtn } from "./WagonSeatBtn";
import "./wagonSchemes.css";

export const WagonSeatScheme = ({seats, bottomPrice, wagonName, wagonId, direction}: IWagonSeats) => {
  return (
    <>
      <div className="wagon_scheme">
        <img src="src/images/wagon_beginning.jpg" alt="начало вагона" className="wagon_beginning"/>
        <div className="places_scheme">
          <div className="coupes_scheme seats_scheme">
            <div className="seat-places top-seat-places">
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={2} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={4} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={6} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={8} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={10} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={12} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={14} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={16} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={18} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={20} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={22} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={24} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={26} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={28} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={30} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={32} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            </div>
            <div className="seat-places center-seat-places">
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={1} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={3} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={5} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={7} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={9} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={11} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={13} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={15} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={17} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={19} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={21} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={23} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={25} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={27} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={29} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={31} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            </div>
          </div>
          <div className="seat-places passage-seat-places">
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={34} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={36} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={38} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={40} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={42} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={44} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={46} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={48} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={50} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={52} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={54} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={56} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={58} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={60} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
          </div>
          <div className="seat-places bottom-seat-places">
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={33} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={35} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={37} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={39} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={41} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={43} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={45} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={47} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={49} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={51} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={53} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={55} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={57} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={59} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={61} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
            <WagonSeatBtn moreClass={"seat-place_btn_block"} addClass={"seat-place_btn"} seatNumber={62} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
          </div>
        </div>
        <img src="src/images/wagon_ending.jpg" alt="конец вагона" className="wagon_ending"/>
      </div>
    </>
  )
}
