import "./confirmPassengerInfo.css";

interface ConfirmPassengerInfo {
    passengerType: string;
    fullName: string;
    sex: string;
    birthday: string;
    documentType: string;
    documentNumber: string;
}

export const ConfirmPassengerInfo = ({passengerType, fullName, sex, birthday, documentType, documentNumber}: ConfirmPassengerInfo) => {
  return (
    <div className="confirm_passenger_info">
        <div className="passenger_type">
            <img src="src/images/orange_passenger_icon.svg" alt="пассажир" className="confirm_passenger_icon"/>
            <span className="passenger_type_title">{passengerType}</span>
        </div>
        <div className="passenger_data_confirm">
            <span className="passenger_data_confirm_text pd_confirm_text_title">{fullName}</span>
            <span className="passenger_data_confirm_text">Пол {sex}</span>
            <span className="passenger_data_confirm_text">Дата рождения {birthday}</span>
            <span className="passenger_data_confirm_text">{documentType + ' ' + documentNumber}</span>
        </div>
    </div>
  )
}
