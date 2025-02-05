import "./ticketsQuantity.css";

export const TicketsQuantity = () => {

  return (
    <div className="tickets_quantity">
        <h3 className="ticket_options_title">Количество билетов</h3>
        <div className="tickets_quantity_kinds">
            <div className="tqk_block tqk_adult">
                <input type="number" min="0" max="3" defaultValue="0" className="tqk_input tqk_input_adult"/>
                <span className="tqk_input_text">Взрослых – </span>
                <p className="tqk_text">Можно добавить еще<br/>3 пассажиров</p>
            </div>
            <div className="tqk_block tq_child">
                <input type="number" min="0" max="2" defaultValue="0" className="tqk_input tqk_input_child"/>
                <span className="tqk_input_text">Детских – </span>
                <p className="tqk_text">Можно добавить еще 3 детей<br/>до 10 лет.
                Свое место в вагоне,<br/>как у взрослых, но дешевле<br/>
                в среднем на 50-65%
                </p>
            </div>
            <div className="tqk_block tqk_child_no-place">
                <input type="number" min="0" max="2" defaultValue="0" className="tqk_input tqk_input_child_no-place"/>
                <span className="tqk_input_text">Детских «без места» – </span>
            </div>
        </div>
    </div>
  )
}
