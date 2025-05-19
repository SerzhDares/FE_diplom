import { WagonInfo } from "../WagonInfo/WagonInfo";
import { AvailableWagonsItem } from "../AvailableWagonsItem/AvailableWagonsItem";
import "./availableWagons.css";

interface AvailableWagonsProps {
    wagons: any[];
    selectedWagons: any[];
    direction: string;
    humansQuantity: number;
}

export const AvailableWagons = ({
  wagons, selectedWagons, direction, humansQuantity
}: AvailableWagonsProps) => {

  return (
    <>
      <div className="available_wagons">
          <div className="wagons_numbers">Вагоны
              {wagons.map(wagon => (
                <AvailableWagonsItem 
                  key={wagon.coach.name}
                  direction={direction} 
                  coachId={wagon.coach._id} 
                  name={wagon.coach.name}
                />
              ))}
          </div>
          <span className="numbering_direction">Нумерация вагонов начинается с головы поезда</span>
      </div>
      {selectedWagons.map((wagon) => (
          <WagonInfo 
            key={wagon.name}
            wagonNumber={wagon.name}
            direction={direction}
            humansQuantity={humansQuantity}
          />
      ))}
    </>
  )
}