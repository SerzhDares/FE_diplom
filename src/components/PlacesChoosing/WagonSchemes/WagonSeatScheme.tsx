import "./wagonSchemes.css";

export const WagonSeatScheme = () => {
  return (
    <>
      <div className="wagon_scheme">
        <img src="/src/images/wagon_beginning.jpg" alt="начало вагона" className="wagon_beginning"/>
        <div className="places_scheme">
          <div className="coupes_scheme seats_scheme">
            <div className="seat-places top-seat-places">
              <button className="place_btn seat-place_btn">2</button>
              <button className="place_btn seat-place_btn place-unavailable_btn">4</button>
              <button className="place_btn seat-place_btn">6</button>
              <button className="place_btn seat-place_btn">8</button>
              <button className="place_btn seat-place_btn">10</button>
              <button className="place_btn seat-place_btn">12</button>
              <button className="place_btn seat-place_btn">14</button>
              <button className="place_btn seat-place_btn">16</button>
              <button className="place_btn seat-place_btn">18</button>
              <button className="place_btn seat-place_btn">20</button>
              <button className="place_btn seat-place_btn">22</button>
              <button className="place_btn seat-place_btn">24</button>
              <button className="place_btn seat-place_btn">26</button>
              <button className="place_btn seat-place_btn">28</button>
              <button className="place_btn seat-place_btn">30</button>
              <button className="place_btn seat-place_btn">32</button>
            </div>
            <div className="seat-places center-seat-places">
              <button className="place_btn seat-place_btn">1</button>
              <button className="place_btn seat-place_btn place-unavailable_btn">3</button>
              <button className="place_btn seat-place_btn">5</button>
              <button className="place_btn seat-place_btn">7</button>
              <button className="place_btn seat-place_btn">9</button>
              <button className="place_btn seat-place_btn">11</button>
              <button className="place_btn seat-place_btn">13</button>
              <button className="place_btn seat-place_btn">15</button>
              <button className="place_btn seat-place_btn">17</button>
              <button className="place_btn seat-place_btn">19</button>
              <button className="place_btn seat-place_btn">21</button>
              <button className="place_btn seat-place_btn">23</button>
              <button className="place_btn seat-place_btn">25</button>
              <button className="place_btn seat-place_btn">27</button>
              <button className="place_btn seat-place_btn">29</button>
              <button className="place_btn seat-place_btn">31</button>
            </div>
          </div>
          <div className="seat-places passage-seat-places">
            <button className="place_btn seat-place_btn place-unavailable_btn">34</button>
            <button className="place_btn seat-place_btn">36</button>
            <button className="place_btn seat-place_btn">38</button>
            <button className="place_btn seat-place_btn">40</button>
            <button className="place_btn seat-place_btn">42</button>
            <button className="place_btn seat-place_btn">44</button>
            <button className="place_btn seat-place_btn">46</button>
            <button className="place_btn seat-place_btn">48</button>
            <button className="place_btn seat-place_btn">50</button>
            <button className="place_btn seat-place_btn">52</button>
            <button className="place_btn seat-place_btn">54</button>
            <button className="place_btn seat-place_btn">56</button>
            <button className="place_btn seat-place_btn">58</button>
            <button className="place_btn seat-place_btn">60</button>
          </div>
          <div className="seat-places bottom-seat-places">
            <button className="place_btn seat-place_btn">33</button>
            <button className="place_btn seat-place_btn place-unavailable_btn">35</button>
            <button className="place_btn seat-place_btn">37</button>
            <button className="place_btn seat-place_btn">39</button>
            <button className="place_btn seat-place_btn">41</button>
            <button className="place_btn seat-place_btn">43</button>
            <button className="place_btn seat-place_btn">45</button>
            <button className="place_btn seat-place_btn">47</button>
            <button className="place_btn seat-place_btn">49</button>
            <button className="place_btn seat-place_btn">51</button>
            <button className="place_btn seat-place_btn">53</button>
            <button className="place_btn seat-place_btn">55</button>
            <button className="place_btn seat-place_btn">57</button>
            <button className="place_btn seat-place_btn">59</button>
            <button className="place_btn seat-place_btn">61</button>
            <button className="place_btn seat-place_btn">62</button>
          </div>
        </div>
        <img src="/src/images/wagon_ending.jpg" alt="конец вагона" className="wagon_ending"/>
      </div>
    </>
  )
}
