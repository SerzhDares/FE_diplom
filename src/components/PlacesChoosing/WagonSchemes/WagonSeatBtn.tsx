import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addSelectedSeat, removeSelectedSeat } from "../../../store/slices/selectedSeatsSlice";
import classNames from "classnames";
import "./wagonSchemes.css";

export interface IWagonSeats {
    addClass?: string;
    moreClass?: string;
    seatNumber: number;
    topPrice?: number;
    bottomPrice?: number;
    sidePrice?: number;
    price?: number;
    wagonName: string,
    wagonId: string | undefined;
    direction: string;
    seats: [{
      index: number;
      available: boolean;
    }];
  }

export const passTypeCounter = (selectedPlaces: any[]) => {
    let selectedAdults = 0;
    let selectedChildren = 0;
    let adultsPrice = 0;
    let childrenPrice = 0;
    selectedPlaces.forEach(seat => {
        if (seat.passId == 'в') {
            selectedAdults++; 
            adultsPrice += seat.seatPrice;
        }
        if (seat.passId == 'р') {
            selectedChildren++; 
            childrenPrice += seat.seatPrice;
        }
    })
    return [selectedAdults, selectedChildren, adultsPrice, childrenPrice]
}

export const WagonSeatBtn = ({
    addClass, moreClass, seatNumber, price, 
    wagonName, wagonId, direction, seats}: IWagonSeats) => {

    const dispatch = useAppDispatch();
    
    const { passQuantity } = useAppSelector(state => state.passengersQuantity);
    const passQuantityWithDirection = passQuantity[direction as keyof typeof passQuantity];

    const { selectedSeats } = useAppSelector(state => state.selectedSeats);
    const selectedSeatsWithDirection = selectedSeats[direction as keyof typeof selectedSeats];

    const forSelectedSeat = (id: string | undefined, index: number) => {
        let selectedClass;
        let selectedPassId;
        selectedSeatsWithDirection.forEach((seat: any) => {
            if (seat.wagonId == id && seat.seatIndex == index) {
                selectedClass = "place_btn_selected";
                selectedPassId = seat.passId;
            } 
        })
        return [selectedClass, selectedPassId];
    }

    const chooseSeat = (e: any, index: number) => {
        const selectableSeatBtn = e.target;
        if (selectableSeatBtn.classList.contains("place_btn_selected")) {
            dispatch(removeSelectedSeat({direction, seatIndex: index, wagonId}));
        } else {
            selectableSeatBtn.nextElementSibling.classList.toggle("age_seat_prompt-visible");
            selectableSeatBtn.classList.toggle("place_btn_selectable");
        }
    }

    const selectedSeat =(e: any, index: number, price: number | undefined) => {
        e.target.closest(".age_seat_prompt").classList.remove("age_seat_prompt-visible");
        dispatch(addSelectedSeat({direction, seatPrice: price, seatIndex: index, wagonName, wagonId, passId: e.target.textContent[0]}));
    }

    const forPromptText = () => {
        let promptText = "Место для";
        if (passQuantityWithDirection.adults == '0' && passQuantityWithDirection.children == '0'
            || (+passQuantityWithDirection.adults < 5 && +passQuantityWithDirection.adults == passTypeCounter(selectedSeatsWithDirection)[0] && passQuantityWithDirection.children == '0')
            || (+passQuantityWithDirection.children < 4 && +passQuantityWithDirection.children == passTypeCounter(selectedSeatsWithDirection)[1] && passQuantityWithDirection.adults == '0')
            || (+passQuantityWithDirection.adults == passTypeCounter(selectedSeatsWithDirection)[0] && +passQuantityWithDirection.children == passTypeCounter(selectedSeatsWithDirection)[1])
        ) {
            promptText = "Укажите необходимое количество билетов";
        }
        if (passTypeCounter(selectedSeatsWithDirection)[0] == 5 && passQuantityWithDirection.children == '0') {
            promptText = "Вы выбрали максимальное количество мест для взрослых"
        }
        if (passTypeCounter(selectedSeatsWithDirection)[1] == 4 && passQuantityWithDirection.adults == '0') {
            promptText = "Вы выбрали максимальное количество мест для детей"
        }
        if (passTypeCounter(selectedSeatsWithDirection)[0] == 5 && passTypeCounter(selectedSeatsWithDirection)[1] == 4) {
            promptText = "Вы выбрали максимальное количество мест";
        }
        return promptText;
    }

    return (
        <>
            {seats.map((seat) => (
                <div className={classNames("seat_block", moreClass)}>
                    <button 
                        key={seat.index} 
                        className={classNames("place_btn", addClass, forSelectedSeat(wagonId, seat.index)[0])}
                        onClick={(e) => chooseSeat(e, seat.index)}
                    >
                        {forSelectedSeat(wagonId, seat.index)[1] ? forSelectedSeat(wagonId, seat.index)[1] : seat.index}
                    </button>
                    <div className="age_seat_prompt">
                            {forPromptText()}
                            <div className="age_seat_prompt-btns_block">
                                {+passQuantityWithDirection.adults > 0 && passTypeCounter(selectedSeatsWithDirection)[0] < 5 && +passQuantityWithDirection.adults !== passTypeCounter(selectedSeatsWithDirection)[0] &&
                                    <button className="age_seat_btn" onClick={(e) => selectedSeat(e, seat.index, price)}>взрослого</button>
                                }
                                {+passQuantityWithDirection.children > 0 && passTypeCounter(selectedSeatsWithDirection)[1] < 4 && +passQuantityWithDirection.children !== passTypeCounter(selectedSeatsWithDirection)[1] &&
                                    <button className="age_seat_btn" onClick={(e) => selectedSeat(e, seat.index, price ? price/2 : undefined)}>ребенка</button>
                                }
                            </div>
                    </div>
                </div>
            ))[seatNumber - 1]
            }
            {!seats[seatNumber - 1] &&
                <div className={classNames("seat_block", moreClass)}>
                    <button 
                        key={seatNumber} 
                        className={classNames("place_btn place-unavailable_btn", addClass)}
                    >
                        {seatNumber}
                    </button>
                </div>
            }
        </>
    )
}
