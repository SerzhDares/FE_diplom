import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeActiveWagons, setActiveWagons } from "../../../store/slices/activeWagonsSlice";

interface AvailableWagonsItemProps {
    direction: string;
    coachId: string;
    name: string;
}

export const AvailableWagonsItem = ({direction, coachId, name}: AvailableWagonsItemProps) => {

    const dispatch = useAppDispatch();

    const { activeWagons } = useAppSelector(state => state.activeWagons);
    const activeWagonsWithDirection = activeWagons[direction as keyof typeof activeWagons];

    const sameCoach = activeWagonsWithDirection?.find((el: any) => el.coachId === coachId);

    const activeWagonsFunc = () => {
        if (sameCoach) {
            dispatch(removeActiveWagons({ direction, coachId }));
        } else {
            dispatch(setActiveWagons({ direction, coachId, name }));
        }
    }

    const classNames = sameCoach ? "wagon_number wagon_number_active" : "wagon_number";
  return (
    <span className={classNames} onClick={activeWagonsFunc}>
        {' ' + name + ' '}
    </span>
  )
}
