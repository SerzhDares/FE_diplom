import "./wagonSchemes.css";

export const WagonLuxeScheme = () => {
  return (
    <>
      <div className="wagon_scheme">
        <img src="/src/images/wagon_beginning.jpg" alt="начало вагона" className="wagon_beginning"/>
        <div className="places_scheme">
          <div className="coupes_scheme">
            <div className="coupes_places luxe-places">
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn place-unavailable_btn">1</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">2</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn">3</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">4</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn">5</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">6</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn">7</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">8</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn">9</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">10</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn">11</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">12</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn">13</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">14</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn luxe-place_btn">15</button>
                <button className="place_btn bottom_place_btn luxe-place_btn">16</button>
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
        <img src="/src/images/wagon_ending.jpg" alt="конец вагона" className="wagon_ending"/>
      </div>
    </>
  )
}
