import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { changeOption } from '../../../../store/slices/trainsParamsSlice';
import './toggleSwitch.css';

interface SwitchProps {
    optionName: string;
    name: string;
}

export const ToggleSwitch = ({optionName, name}:SwitchProps) => {

    const dispatch = useAppDispatch();
    const { options } = useAppSelector(state => state.trainsParams)
    const status = options[name as keyof typeof options];

    const handleToggle = () => {dispatch(changeOption({name, value: !status}))}

  return (
    <>
        <input
            checked={status}
            onClick={handleToggle}
            className="react-switch-checkbox"
            id={optionName}
            type="checkbox"
            readOnly
            name={name}
        />
        <label             
            style={status ? {background: '#FCDC9D' } : {background: '#FFF'}}
            className="react-switch-label"
            htmlFor={optionName}
        >
            <span className={`react-switch-button`} style={status ? { background: '#FFA800' } : {background: '#C4C4C4'}}/>
        </label>
    </>
  )
}
