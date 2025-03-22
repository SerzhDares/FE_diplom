import { useState, useEffect } from "react";
import { LastTicket } from "./LastTicket";
import './lastTickets.css';

export const LastTickets = () => {

  const [lastTickets, setLastTickets] = useState<any[]>([]);

  const getLastRoutes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LAST_ROUTES}`);
      if (!response.ok) {
        throw new Error('Что-то пошло не так');
      }
      const data = await response.json();
      setLastTickets(data);
    } catch (err) {
      throw new Error('Что-то пошло не так');
    }
  }

  useEffect(() => {
    getLastRoutes()
  }, []);

  return (
    <section className="last_tickets">
        <h2 className="choosing_pages_title last_tickets_title">последние билеты</h2>
        <div className="last_tickets_container">
          {lastTickets.slice(0, 3).map(ticket => (
            <LastTicket key={ticket.min_price + ticket.departure.from.datetime}
              thereFrom={ticket.departure.from.city.name}
              thereStationFrom={ticket.departure.from.railway_station_name}
              thereTo={ticket.departure.to.city.name}
              thereStationTo={ticket.departure.to.railway_station_name}
              minPrice={ticket.min_price} 
              haveWifi={ticket.departure.have_wifi} 
              haveConditioner={ticket.departure.have_air_conditioning} 
              isExpress={ticket.departure.is_express} 
              standardTopPrice={0} standardBottomPrice={0}
              standardSidePrice={0} coupeTopPrice={0} 
              coupeBottomPrice={0} routeLink={""}/>
          ))}
        </div>
    </section>
  )
}
