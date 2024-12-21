import { Calendar } from "../../Calendar";
import { backwardsFunction } from "../../MainPage/MainPage";
import { HashLink } from "react-router-hash-link";
import "./generalSearchForm.css";

export const GeneralSearchForm = () => {
  return (
    <div className="container">
      <div className="header_bottom-block header_bottom-block_trains">
        <form action="" className="header__form header__form_trains">
          <div className="form_inputs_container">
            <div className="form_inputs route-inputs form-inputs_trains">
              <div className="trains-way_title_input">
                <span className="input_title">Направление</span>
                <input type="text" className="form__input form__input_geo form__input_trains input_from" defaultValue="" placeholder="Откуда"/>
              </div>
              <button className="backwards_btn trains_backwards_btn" onClick={backwardsFunction}></button>
              <input type="text" className="form__input form__input_geo form__input_trains input_to" defaultValue="" placeholder="Куда"/>
            </div>
            <div className="form_inputs date-inputs form-inputs_trains date-inputs_trains">
              <div className="trains-date_title_input">
                <span className="input_title input_title_date">Дата</span>
                <Calendar minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
              </div>
              <div className="trains-date_title_input">
                <Calendar minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
              </div>
            </div>
          </div>
          <HashLink smooth to="/trains#all-trains">
            <button className="orange_btn search_btn trains_search_btn">Найти билеты</button>
          </HashLink>
        </form>
      </div>
    </div>
  )
}
