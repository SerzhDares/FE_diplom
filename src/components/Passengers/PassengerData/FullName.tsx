interface FullNameProps {
  validation: Function;
  nameValue?: string;
  surnameValue?: string;
  patronimycValue?: string;
  errSurname?: string;
  errName?: string;
  titleColorClass?: string;
}

export const FullName = ({validation, nameValue, surnameValue, patronimycValue, errSurname, errName, titleColorClass}: FullNameProps) => {
  return (
    <div className="full_name_container">
        <div className="pd_item">
            <span className={`pd_item_title ${titleColorClass}`}>Фамилия</span>
            <input style={{ border: errSurname ? "1px solid #FF3D00C2" : "" }} type="text" name="surname" className="pd_item-input fn_item-input" value={surnameValue} onChange={validation()}/>
            {errSurname ? <p className="error-text">{errSurname}</p> : null}
        </div>
        <div className="pd_item">
            <span className={`pd_item_title ${titleColorClass}`}>Имя</span>
            <input style={{ border: errName ? "1px solid #FF3D00C2" : "" }} type="text" name="name" className="pd_item-input fn_item-input" value={nameValue} onChange={validation()}/>
            {errName ? <p className="error-text">{errName}</p> : null}
        </div>
        <div className="pd_item">
            <span className={`pd_item_title ${titleColorClass}`}>Отчество (при наличии)</span>
            <input type="text" name="patronimyc" className="pd_item-input fn_item-input" value={patronimycValue} onChange={validation()}/>
        </div>
    </div>
  )
}
