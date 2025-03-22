import './lastTickets.css';
import { ITrainParams } from '../../models/models';

export const LastTicket = ({
    thereFrom, thereStationFrom, thereTo, thereStationTo, 
    minPrice, haveWifi, haveConditioner, isExpress}: ITrainParams) => {
        
  return (
    <div className="last_tickets_item">
        <div className="last_ticket_route">
            <div className="last_ticket_point">
                <span className="last_ticket_settlement">{thereFrom}</span>
                <span className="last_ticket_station">{thereStationFrom}</span>
            </div>
            <div className="last_ticket_point end_point">
                <span className="last_ticket_settlement">{thereTo}</span>
                <span className="last_ticket_station">{thereStationTo}</span>
            </div>
        </div>
        <div className="last_ticket_options_price">
            {/* <img src="src/images/last_ticket_options.svg" alt="options" className="last_ticket_options"/> */}
            <div className="options_block">
                {haveWifi && <img src="src/images/wifi.svg" alt="wifi" className="wagon_options_icon"/>}
                {haveConditioner && <img src={haveConditioner ? "src/images/conditioner.svg" : ""} alt="conditioner" className="wagon_options_icon"/>}
                {isExpress && <img src={isExpress ? "src/images/express.svg" : ""} alt="express" className="wagon_options_icon"/>}
            </div>
            <div className="last_ticket_price">
                <span className="price_from last_ticket_price_from">от </span>
                <span className="last_ticket_price_value">{minPrice}</span>
                <span className="currency last_ticket_currency">₽</span>
            </div>
        </div>
    </div>
  )
}
