import { LastTicket } from "./LastTicket";
import './lastTickets.css';

export const LastTickets = () => {
  return (
    <section className="last_tickets">
        <h2 className="choosing_pages_title last_tickets_title">последние билеты</h2>
        <div className="last_tickets_container">
            <LastTicket/>
            <LastTicket/>
            <LastTicket/>
        </div>
    </section>
  )
}
