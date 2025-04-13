import classNames from "classnames";
import "./wagonSchemes.css";

export interface IWagonSeats {
    addClass?: string;
    seatNumber: number;
    seats: [{
      index: number;
      available: boolean;
    }];
  }

export const WagonSeatBtn = ({addClass, seatNumber, seats}: IWagonSeats) => {

    return (
    <>
    {seats.map((seat) => (
        <button 
            key={seat.index} 
            className={classNames("place_btn", addClass)}
        >
            {seat.index}
        </button>
    ))[seatNumber - 1]
    }
    {!seats[seatNumber - 1] &&
        <button 
            key={seatNumber} 
            className={classNames("place_btn place-unavailable_btn", addClass)}
        >
            {seatNumber}
        </button>
    }
    </>
    )
}
