import { Logo } from "../Logo";
import { HeaderMenu } from "../Header/HeaderMenu/HeaderMenu";
import { Calendar } from "../Calendar";
import { AboutUs } from "./AboutUs/AboutUs";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { Reviews } from "./Reviews/Reviews";
import { Footer } from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import './mainPage.css';

export const backwardsFunction = (e: any) => {
  e.preventDefault();
  const fromInputText = document.querySelector('.input_from') as HTMLInputElement;
  const toInputText = document.querySelector('.input_to') as HTMLInputElement;
  const fromValue = fromInputText.value;
  const toValue = toInputText.value;
  if (fromValue || toValue) {
    fromInputText.value = toValue;
    toInputText.value = fromValue;
  }
}

export const MainPage = () => {
  return (
    <>
     <header className="header" id="header">
        <div className="container">
          <Logo logoClass="logo"/>
        </div>
        <HeaderMenu/>
        <div className="container">
          <div className="header_bottom-block">
            <h1 className="header_title">Вся жизнь - <br/><b>путешествие!</b></h1>
            <form action="" className="header__form">
              <div className="form_inputs route-inputs">
                <span className="input_title">Направление</span>
                <input type="text" className="form__input form__input_geo input_from" placeholder="Откуда"/>
                <button className="backwards_btn" onClick={backwardsFunction}></button>
                <input type="text" className="form__input form__input_geo input_to" placeholder="Куда"/>
              </div>
              <div className="form_inputs date-inputs">
                <div className="date-input-title">
                  <span className="input_title">Дата</span>
                  <Calendar minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
                </div>
                <Calendar minDate={new Date()} maxDate={undefined} monthYearDropdown={false}/>
              </div>
              <HashLink smooth to="/trains#all-trains">
                <button className="orange_btn search_btn">Найти билеты</button>
              </HashLink>
            </form>
          </div>
        </div>
     </header>
     <AboutUs/>
     <HowItWorks/>
     <Reviews/>
     <Footer/>
    </>
  )
}
