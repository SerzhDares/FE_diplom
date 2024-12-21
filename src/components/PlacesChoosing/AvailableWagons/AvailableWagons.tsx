import { useState } from "react";
import { WagonInfo } from "../WagonInfo/WagonInfo";
import "./availableWagons.css";

interface AvailableWagonsProps {
    wagons: string[];
    numInfo: string;
}

export const AvailableWagons = ({wagons, numInfo}: AvailableWagonsProps) => {

  const [wagon, setWagon] = useState<string | null | undefined>(wagons[0]);

  const activeWagon = (e: any) => {
    const allWagons = document.querySelectorAll('.wagon_number');
    allWagons.forEach(wagon => {
        if (wagon.classList.contains('wagon_number_active')) {
            wagon.classList.remove('wagon_number_active');
        }
    })
    e.target.classList.add('wagon_number_active');
    const selectedWagon = document.querySelector('.wagon_number_active')?.textContent;
    setWagon(selectedWagon);
  }

  return (
    <>
    <div className="available_wagons">
        <div className="wagons_numbers">Вагоны
            {wagons.map(wagon => (
                <span key={wagon} className={wagon == wagons[0] ? "wagon_number wagon_number_active" : "wagon_number"} onClick={activeWagon}>{' ' + wagon + ' '}</span>
            ))}
        </div>
        <span className="numbering_direction">{numInfo}</span>
    </div>
    <WagonInfo wagonNumber={wagon}/>
    </>
  )
}
