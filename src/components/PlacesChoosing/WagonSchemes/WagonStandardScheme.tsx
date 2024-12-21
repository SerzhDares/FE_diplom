import "./wagonSchemes.css";

export const WagonStandardScheme = () => {
  return (
    <>
      <div className="wagon_scheme">
        <img src="/src/images/wagon_beginning.jpg" alt="начало вагона" className="wagon_beginning"/>
        <div className="places_scheme">
          <div className="coupes_scheme">
            <div className="coupes_places coupes_top-places">
              <div className="coupe_places">
                <button className="place_btn">2</button>
                <button className="place_btn place-unavailable_btn">4</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn">6</button>
                <button className="place_btn">8</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn">10</button>
                <button className="place_btn">12</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn">14</button>
                <button className="place_btn">16</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn">18</button>
                <button className="place_btn">20</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn">22</button>
                <button className="place_btn">24</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn">26</button>
                <button className="place_btn">28</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn">30</button>
                <button className="place_btn">32</button>
              </div>
            </div>
            <div className="coupes_places coupes_bottom-places">
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">1</button>
                <button className="place_btn bottom_place_btn">3</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">5</button>
                <button className="place_btn bottom_place_btn">7</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">9</button>
                <button className="place_btn bottom_place_btn">11</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">13</button>
                <button className="place_btn bottom_place_btn">15</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">17</button>
                <button className="place_btn bottom_place_btn">19</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">21</button>
                <button className="place_btn bottom_place_btn">23</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">25</button>
                <button className="place_btn bottom_place_btn">27</button>
              </div>
              <div className="coupe_places">
                <button className="place_btn bottom_place_btn">29</button>
                <button className="place_btn bottom_place_btn">31</button>
              </div>
            </div>
          </div>
          <div className="coupes_places side-places">
            <div className="coupe_places">
              <button className="place_btn side-place_btn place-unavailable_btn">33</button>
              <button className="place_btn side-place_btn">34</button>
            </div>
            <div className="coupe_places">
              <button className="place_btn side-place_btn">35</button>
              <button className="place_btn side-place_btn">36</button>
            </div>
            <div className="coupe_places">
              <button className="place_btn side-place_btn">37</button>
              <button className="place_btn side-place_btn">38</button>
            </div>
            <div className="coupe_places">
              <button className="place_btn side-place_btn">39</button>
              <button className="place_btn side-place_btn">40</button>
            </div>
            <div className="coupe_places">
              <button className="place_btn side-place_btn">41</button>
              <button className="place_btn side-place_btn">42</button>
            </div>
            <div className="coupe_places">
              <button className="place_btn side-place_btn">43</button>
              <button className="place_btn side-place_btn">44</button>
            </div>
            <div className="coupe_places">
              <button className="place_btn side-place_btn">45</button>
              <button className="place_btn side-place_btn">46</button>
            </div>
            <div className="coupe_places">
              <button className="place_btn side-place_btn">47</button>
              <button className="place_btn side-place_btn">48</button>
            </div>
          </div>
        </div>
        <img src="/src/images/wagon_ending.jpg" alt="конец вагона" className="wagon_ending"/>
      </div>
    </>
  )
}
