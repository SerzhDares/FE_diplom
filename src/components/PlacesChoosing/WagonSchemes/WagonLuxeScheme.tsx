import { IWagonSeats, WagonSeatBtn } from "./WagonSeatBtn";
import "./wagonSchemes.css";

export const WagonLuxeScheme = ({seats}: IWagonSeats) => {
  return (
    <>
      <div className="wagon_scheme">
        <img src="src/images/wagon_beginning.jpg" alt="начало вагона" className="wagon_beginning"/>
        <div className="places_scheme">
          <div className="coupes_scheme">
            <div className="coupes_places luxe-places">
              <div className="coupe_places">
                {/* <button className="place_btn bottom_place_btn luxe-place_btn place-unavailable_btn">1</button> */}
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={1} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={2} seats={seats}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={3} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={4} seats={seats}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={5} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={6} seats={seats}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={7} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={8} seats={seats}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={9} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={10} seats={seats}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={11} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={12} seats={seats}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={13} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={14} seats={seats}/>
              </div>
              <div className="coupe_places">
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={15} seats={seats}/>
                <WagonSeatBtn addClass={"bottom_place_btn luxe-place_btn"} seatNumber={16} seats={seats}/>
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
