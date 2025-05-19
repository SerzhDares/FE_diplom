import { IWagonSeats, WagonSeatBtn } from "./WagonSeatBtn";
import "./wagonSchemes.css";

export const WagonCoupeScheme = ({seats, topPrice, bottomPrice, wagonName, wagonId, direction}: IWagonSeats) => {
  return (
    <>
      <div className="wagon_scheme">
        <img src="src/images/wagon_beginning.jpg" alt="начало вагона" className="wagon_beginning"/>
        <div className="places_scheme">
          <div className="coupes_scheme">
            <div className="coupes_places coupes_top-places">
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={2} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={4} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={6} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={8} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={10} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={12} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={14} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={16} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={18} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={20} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={22} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={24} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={26} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={28} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn seatNumber={30} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn seatNumber={32} seats={seats} price={topPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
            </div>
            <div className="coupes_places coupes_bottom-places">
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={1} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={3} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={5} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={7} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={9} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={11} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={13} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={15} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={17} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={19} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={21} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={23} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={25} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={27} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={29} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
                <WagonSeatBtn addClass={"bottom_place_btn"} seatNumber={31} seats={seats} price={bottomPrice} direction={direction} wagonId={wagonId} wagonName={wagonName}/>
              </div>
            </div>
          </div>
          <div className="coupes_places side-places">
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
            <div className="coupe_places coupe_side-places">
              <div className="no-side-places"></div>
            </div>
          </div>
        </div>
        <img src="src/images/wagon_ending.jpg" alt="конец вагона" className="wagon_ending"/>
      </div>
    </>
  )
}
