import { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { WagonInfo } from "../WagonInfo/WagonInfo";
import "./availableWagons.css";
import { WagonSeatScheme } from "../WagonSchemes/WagonSeatScheme";
import { WagonStandardScheme } from "../WagonSchemes/WagonStandardScheme";
import { WagonCoupeScheme } from "../WagonSchemes/WagonCoupeScheme";
import { WagonLuxeScheme } from "../WagonSchemes/WagonLuxeScheme";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeActiveWagons, setActiveWagons, removeAllActiveWagons } from "../../../store/slices/activeWagonsSlice";
import { seatsState } from "../../../store/slices/seatsSlice";

interface AvailableWagonsProps {
    wagons: any[];
    direction: string;
    coachId: string;
    name: string;
    // activeWagon: MouseEventHandler;
}

export const AvailableWagons = ({wagons, direction, coachId, name}: AvailableWagonsProps) => {

  const dispatch = useAppDispatch();
  // const { trainWagonsSeats } = useAppSelector(state => state.activeWagons);
    const { trainWagonsSeats } = useAppSelector(seatsState);
    const wagonsWithDirection = trainWagonsSeats[direction as keyof typeof trainWagonsSeats];
    
  const { activeWagons } = useAppSelector(state => state.activeWagons);
  const activeWagonsWithDirection = activeWagons[direction as keyof typeof activeWagons];


  useEffect(() => {
    const name = wagonsWithDirection[0]?.coach?.name;
    const coachId = wagonsWithDirection[0]?.coach?._id;
    const sameCoach = activeWagonsWithDirection?.find((el) => el.coachId === coachId);
    if (
       name &&
       (!sameCoach || activeWagonsWithDirection.length > wagonsWithDirection.length)
    ) {
       dispatch(removeAllActiveWagons(direction));
       dispatch(
          setActiveWagons({
             direction,
             name,
             coachId,
          })
       );
    }
 }, [wagonsWithDirection, direction, dispatch, activeWagonsWithDirection]);


  // const [selectedWagons, setSelectedWagons] = useState([wagons[0].coach.name]);

  // setTimeout(() => {
  //     document.querySelectorAll('.wagon_number_active').forEach(activeWagon => {
  //     setSelectedWagons(activeWagon.textContent)
  //   })
  // })

  // const activeWagon = (e: any) => {
  //   const allWagons = document.querySelectorAll('.wagon_number');
  //   allWagons.forEach(wagon => {
  //       if (wagon.classList.contains('wagon_number_active')) {
  //           wagon.classList.remove('wagon_number_active');
  //       }
  //   })
  //   e.target.classList.add('wagon_number_active');
  //   const selectedWagon = document.querySelector('.wagon_number_active')?.textContent;
  //   setWagon(selectedWagon);
  // }

  const activeWagonsFunc = (e: any) => {
    const sameCoach = activeWagonsWithDirection?.find((el) => el.coachId === coachId);
    // const allActiveWagons = document.querySelectorAll('.wagon_number_active');
    // allWagons.forEach(wagon => {
    //     if (wagon.classList.contains('wagon_number_active')) {
    //         wagon.classList.remove('wagon_number_active');
    //     }
    // })
    // let selectedWagon;
    if (e.target.classList.contains('wagon_number_active')) {
      e.target.classList.remove('wagon_number_active');
      // dispatch(setActiveWagons({direction, data: [wagonsWithDirection.filter(wgn => wgn.coach.name !== e.target.textContent)]}));
    } else {
      e.target.classList.add('wagon_number_active');
      // dispatch(setActiveWagons({direction, data: [...wagonsWithDirection, e.target.textContent]}));
    }
    if (sameCoach) {
      dispatch(removeActiveWagons({ direction, coachId }));
   } else {
      dispatch(setActiveWagons({ direction, coachId, name }));
   }
    // selectedWagon = document.querySelector('.wagon_number_active')?.textContent;
    // dispatch(setWagonNumber(wagon.coach.name));
    // return wagonsWithDirection;
    console.log(activeWagonsWithDirection);
  }

  const availableSeatsParts = (seats: any) => {
    const availableTop = [];
    const availableBottom = [];
    const availableSide = [];
    seats.map((seat: any) => {
        if(seat.index % 2 && seat.index < 33) availableTop.push(seat.index);
        if(!(seat.index % 2) && seat.index < 33) availableBottom.push(seat.index);
        if(seat.index >= 33) availableSide.push(seat.index);
    })
    return [availableTop.length, availableBottom.length, availableSide.length]
}

  return (
    <>
      <div className="available_wagons">
          <div className="wagons_numbers">Вагоны
              {wagons.map(wagon => (
                  <span key={wagon.coach.name}
                    className={
                      wagon == wagons[0] ? "wagon_number wagon_number_active" : "wagon_number"
                    } 
                    onClick={activeWagonsFunc}
                  >
                  {' ' + wagon.coach.name + ' '}
                  </span>
              ))}
          </div>
          <span className="numbering_direction">Нумерация вагонов начинается с головы поезда</span>
      </div>
      {wagons.map((wagon) => (
        // wagonsWithDirection.map((selWgn) => (
        //   console.log(selWgn),
          // selWgn == wagon.coach.name &&
        <>
          <WagonInfo key={wagon.coach.name}
            wagonNumber={wagon.coach.name}
            wagonClass={wagon.coach.class_type}
            availableSeats={wagon.coach.available_seats}
            topSeats={availableSeatsParts(wagon.seats)[0]}
            bottomSeats={availableSeatsParts(wagon.seats)[1]}
            sideSeats={availableSeatsParts(wagon.seats)[2]}
            topPrice={wagon.coach.top_price}
            bottomPrice={wagon.coach.bottom_price}
            sidePrice={wagon.coach.side_price} 
            luxePrice={wagon.coach.price}
            wifi={wagon.coach.have_wifi} 
            conditioner={wagon.coach.have_air_conditioning} 
            linens={wagon.coach.is_linens_included} 
            linensPrice={wagon.coach.linens_price}        
          />
          {wagon.coach.class_type == "fourth" && <WagonSeatScheme seats={wagon.seats} seatNumber={0}/>}
          {wagon.coach.class_type == "third" && <WagonStandardScheme seats={wagon.seats} seatNumber={0}/>}
          {wagon.coach.class_type == "second" && <WagonCoupeScheme seats={wagon.seats} seatNumber={0}/>}
          {wagon.coach.class_type == "first" && <WagonLuxeScheme seats={wagon.seats} seatNumber={0}/>}
        </>
        // ))
      ))}
    </>
  )
}