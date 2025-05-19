import { Logo } from "../Logo";
import { Subscription } from "./Subscription";
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer_top">
          <div className="connection">
            <span className="connection_title">Свяжитесь с нами</span>
            <div className="connection_part phone_part">
              <a href="tel:88000000000" className="connection_part_link">8 (800) 000 00 00</a>
            </div>
            <div className="connection_part mail_part">
              <a href="mailto:inbox@mail.ru" className="connection_part_link">inbox@mail.ru</a>
            </div>
            <div className="connection_part skype_part">
              <a href="skype:tu.train.tickets" className="connection_part_link">tu.train.tickets</a>
            </div>
            <address className="connection_part geo_part connection_part_link">
              г. Москва<br/>ул. Московская 27-35<br/>555 555
            </address>
          </div>
          <Subscription/>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container footer_bottom_container">
          <Logo logoClass="logo footer_logo"/>
          <a href="#header">
            <img src="src/images/footer-button_icon.svg" alt="up" className="footer_btn"/>
          </a>
          <span className="footer_last_text">{new Date().getFullYear()} WEB</span>
        </div>
      </div>
    </footer>
  )
}
