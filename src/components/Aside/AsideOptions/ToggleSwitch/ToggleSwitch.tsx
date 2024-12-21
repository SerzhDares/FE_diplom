import './toggleSwitch.css';
import { useState } from 'react';

interface SwitchProps {
    name: string
}

export const ToggleSwitch = ({name}:SwitchProps) => {

    const [value, setValue] = useState(false);
    const handleToggle = () => {setValue(!value)}

  return (
    <>
        <input
            checked={value}
            onClick={handleToggle}
            className="react-switch-checkbox"
            id={name}
            type="checkbox"
            readOnly
        />
        <label             
            style={value ? {background: '#FCDC9D' } : {background: '#FFF'}}
            className="react-switch-label"
            htmlFor={name}
        >
            <span className={`react-switch-button`} style={value ? { background: '#FFA800' } : {background: '#C4C4C4'}}/>
        </label>
    </>
  )
}
