import './lastTickets.css';

export const LastTicket = () => {
  return (
    <div className="last_tickets_item">
        <div className="last_ticket_route">
            <div className="last_ticket_point">
                <span className="last_ticket_settlement">Санкт-Петербург</span>
                <span className="last_ticket_station">Курский вокзал</span>
            </div>
            <div className="last_ticket_point end_point">
                <span className="last_ticket_settlement">Самара</span>
                <span className="last_ticket_station">Московский вокзал</span>
            </div>
        </div>
        <div className="last_ticket_options_price">
            <img src="/src/images/last_ticket_options.svg" alt="options" className="last_ticket_options"/>
            <div className="last_ticket_price">
                <span className="price_from last_ticket_price_from">от </span>
                <span className="last_ticket_price_value">2 500</span>
                <span className="currency last_ticket_currency">₽</span>
            </div>
        </div>
    </div>
  )
}
