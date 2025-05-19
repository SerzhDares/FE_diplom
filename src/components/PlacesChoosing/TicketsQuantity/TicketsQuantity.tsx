import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setPassQuantityAdults, setPassQuantityChildren, setPassQuantityChildrenNoSeat } from "../../../store/slices/passengersQuantitySlice";
import "./ticketsQuantity.css";

interface ITicketsQuantity {
  direction: string;
}

export const TicketsQuantity = ({direction}: ITicketsQuantity) => {

  const dispatch = useAppDispatch();
  const { passQuantity } = useAppSelector(state => state.passengersQuantity);
  const passQuantityWithDirection = passQuantity[direction as keyof typeof passQuantity]

  return (
    <div className="tickets_quantity">
        <h3 className="ticket_options_title">Количество билетов</h3>
        <div className="tickets_quantity_kinds">
            <div className="tqk_block tqk_adult">
                <input type="number" min="0" max="5" className="tqk_input tqk_input_adult"
                  value={passQuantityWithDirection.adults} 
                  onKeyDown={(e) => {e.preventDefault()}}
                  onChange={(e) => dispatch(setPassQuantityAdults({direction, value: e.target.value}))}
                />
                <span className="tqk_input_text">Взрослых – </span>
                <p className="tqk_text">
                  Можно добавить еще<br/>
                  {5 - +passQuantityWithDirection.adults} {passQuantityWithDirection.adults == "4" ? "пассажира" : "пассажиров"}
                </p>
            </div>
            <div className="tqk_block tq_child">
                <input type="number" min="0" max="4" className="tqk_input tqk_input_child" 
                  value={passQuantityWithDirection.children} 
                  onKeyDown={(e) => {e.preventDefault()}}
                  onChange={(e) => dispatch(setPassQuantityChildren({direction, value: e.target.value}))}
                />
                <span className="tqk_input_text">Детских – </span>
                <p className="tqk_text">
                  Можно добавить еще {4 - +passQuantityWithDirection.children} 
                  {passQuantityWithDirection.children == "3" ? " ребенка" : " детей"}
                  <br/>до 10 лет.
                  Свое место в вагоне,<br/>как у взрослых, но дешевле<br/>
                  в среднем на 50-65%
                </p>
            </div>
            <div className="tqk_block tqk_child_no-place">
                <input type="number" min="0" max="2" className="tqk_input tqk_input_child_no-place" 
                  value={passQuantityWithDirection.childrenNoSeat} 
                  onKeyDown={(e) => {e.preventDefault()}}
                  onChange={(e) => dispatch(setPassQuantityChildrenNoSeat({direction, value: e.target.value}))}
                />
                <span className="tqk_input_text">Детских «без места» – </span>
            </div>
        </div>
    </div>
  )
}
