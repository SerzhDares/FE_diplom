import { useState } from 'react';
import { FullName } from './FullName';
import { ClickAwayListener } from "@mui/material";
import { Calendar } from '../../Calendar';
import { FieldsValues } from '../../../models/models';
import { useAppDispatch } from '../../../hooks';
import { addPassenger, removePassenger } from '../../../store/slices/passengersDataSlice';
import classNames from 'classnames';
import './passengerData.css';

interface PassengerDataProps {
    passengerNumber: number;
    direction: string;
    wagonId: string;
    wagonName: string;
    seatNumber: number;
    passId: string;
    passName?: string;
    passSurname?: string;
    passPatronimyc?: string;
    passSex?: string;
    passBirthday: Date | null;
    passLimMob?: boolean;
    passDocument?: string;
    passSeries?: string;
    passNumber?: string;
    passIndex: number;
    passBtnText?: string;
    // deletePassenger: () => void;
}

export const PassengerData = (
    {passengerNumber, direction, wagonId, wagonName, seatNumber, passId, 
    passName, passSurname, passPatronimyc, passSex, passBirthday, passLimMob,
    passDocument, passSeries, passNumber, passIndex, passBtnText}: PassengerDataProps) => {

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(passengerNumber == 1 && direction == "departure" ? true : false);
  const openBtn = () => {setIsOpen(!isOpen)};

// const [ageValue, setAgeValue] = useState(passId == "в" ? "Взрослый": "Детский");
  let ageValue = (passId == "в" || passId == "Взрослый") ? "Взрослый": "Детский";
  const [docValue, setDocValue] = useState(passId == "р" ? "Свидетельство о рождении" : "Паспорт РФ");

  const [sex, setSex] = useState(passSex ? (passSex == 'женский' ? 'Ж' : 'М') : 'М');
  const checkSex = (e: any) => {setSex(e.target.value)};

  const[limMob, setLimMob] = useState(passLimMob ? passLimMob : false);

  const [btnText, setBtnText] = useState(passBtnText ? passBtnText : "Подтвердить");

  const chooseVariant = (e: any) => {
    btnText == "Подтвердить" ? e.target.nextElementSibling.classList.toggle('open')
    : () => {}
  }

  const activeVariant = (e: any) => {
    e.target.parentElement.classList.remove('open');
    // e.target.classList.contains('age_select_option') ? 
    // setAgeValue(e.target.textContent) : setDocValue(e.target.textContent);
    setDocValue(e.target.textContent);
  }

  const hideMenu = (e: any) => {
    if (!e.target.classList.contains('variant_select')) {
        const allElements = document.querySelectorAll('.select_options');
        allElements.forEach(el => {
            if (el.classList.contains('open')) {
                el.classList.remove('open')
            }
        })
    }
  }

  const [name, setName] = useState(passName ? passName : '');
  const [surname, setSurname] = useState(passSurname ? passSurname : '');
  const [patronimyc, setPatronimyc] = useState(passPatronimyc ? passPatronimyc : '');
  const [birthday, setBirthday] = useState<Date | null>(passBirthday ? passBirthday : null);
  const [series, setSeries] = useState(passSeries ? passSeries : '');
  const [passportNumber, setPassportNumber] = useState(passNumber ? passNumber : '');
  const [birthCertificate, setBirthCertificate] = useState(passNumber ? passNumber : '');

  const clearPassengerData = () => {
    setName('');
    setSurname('');
    setPatronimyc('');
    setBirthday(null);
    setSeries('');
    setPassportNumber('');
    setBirthCertificate('');
    // deletePassenger();
  }

  const handleChange = (e: any) => {
    const result = e.target.value.replace(/[^а-яА-яёЁ-]/gi, '');
    if (e.target.name == "name") setName(result);
    if (e.target.name == "surname") setSurname(result);
    if (e.target.name == "patronimyc") setPatronimyc(result);
    if (e.target.name == "series" || e.target.name == "passportNumber") {
        const result = e.target.value.replace(/[^0-9]/gi, '');
        e.target.name == "series" ? setSeries(result) : setPassportNumber(result);
    }
    if (e.target.name == "birthCertificate") {
        const result = e.target.value.replace(/[^a-zA-Zа-яА-Я0-9]/gi, '');
        setBirthCertificate(result);
    }
  }

  const [errors, setErrors] = useState({
    surname: "",
    name: "",
    birthday: "",
    series: "",
    passportNumber: "",
    birthCertificate: ""
  });

  const validateValues = (
    e: any, 
    {surname, name, birthday, series, 
    passportNumber, birthCertificate}: FieldsValues
    ) => {
    
    let errors = {
        surname: "",
        name: "",
        birthday: "",
        series: "",
        passportNumber: "",
        birthCertificate: ""
    };

    if (!surname) errors.surname = "Введите фамилию";
    if (!name) errors.name = "Введите имя";
    if (!birthday) errors.birthday = "Введите дату в формате ДД.ММ.ГГГГ";
    if (!series || series.length < 4) {
        docValue == "Паспорт РФ" ? errors.series = "Серия документа должна состоять из 4 цифр" : errors.series = "";
    }
    if (!passportNumber || passportNumber.length < 6) {
        docValue == "Паспорт РФ" ? errors.passportNumber = "Номер документа должен состоять из 6 цифр" : errors.passportNumber = "";
    }
    if (!birthCertificate || birthCertificate.length < 12) {
        docValue == "Свидетельство о рождении" ? errors.birthCertificate = "Номер состоит из 12 символов." : errors.birthCertificate = "";
    }
    if (!errors.surname && !errors.name && !errors.birthday &&
        !errors.series && !errors.passportNumber && !errors.birthCertificate) {
            e.target.parentElement.classList.add('success-passenger_data');
            btnText == "Подтвердить" && dispatch(addPassenger({
                direction: direction,
                age: ageValue,
                surname: surname,
                name: name,
                patronimyc: patronimyc,
                sex: sex == "М" ? "мужской" : "женский",
                birthday: new Date(birthday ? birthday : "").toLocaleDateString(),
                limMob: limMob,
                document: docValue,
                series: series,
                number: docValue == "Паспорт РФ" ? passportNumber : birthCertificate,
                wagonId: wagonId,
                wagonName: wagonName,
                seatNumber: seatNumber,
                passIndex: passIndex,
                btnText: "Изменить"
            }))
            setBtnText("Изменить");
    }
    return errors;
  }

  const handleSubmit = (e: any) => {
    setErrors(validateValues(e, {surname, name, birthday, series, passportNumber, birthCertificate}));
    btnText == "Изменить" && dispatch(removePassenger({direction, wagonName, seatNumber})) && setBtnText("Подтвердить");
  }

  return (
    <div className="passenger_data" id={`passenger_${passengerNumber}`}>
        <div className={isOpen ? "passenger_data_title" : "passenger_data_title pd_title_close "}>
            <div className="pd_title_block">
                <button className="passenger_data_btn" onClick={openBtn}>
                    <svg className={isOpen ? "open" : "close"} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" stroke="#928F94" strokeWidth="2"/>
                        <line x1="8" y1="16" x2="24" y2="16" stroke="#928F94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg className={isOpen ? "close" : "open"} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9449 8.46381L14.9449 14.9449L8.46378 14.9449C7.86089 14.9449 7.40871 15.3971 7.40871 16C7.40871 16.6029 7.86089 17.0551 8.46378 17.0551L14.9449 17.0551L14.9449 23.5362C14.9449 24.1391 15.3971 24.5913 15.9246 24.5159L16.0753 24.5159C16.6782 24.5159 17.1304 24.0637 17.055 23.5362L17.055 17.0551L23.3854 17.0551C23.9883 17.0551 24.4405 16.6029 24.4405 16C24.4405 15.3971 23.9883 14.9449 23.3854 14.9449L17.055 14.9449L17.055 8.46381C17.055 7.86091 16.6029 7.40874 16.0753 7.4841L15.9246 7.4841C15.3217 7.4841 14.8695 7.93628 14.9449 8.46381Z" fill="#FFA800"/>
                        <circle cx="16" cy="16" r="15" stroke="#FFA800" strokeWidth="2"/>
                    </svg>  
                </button>
                <span className="passenger_data_title_text">Пассажир {passengerNumber}</span>
                <span className="train_direction_value">{" (" + (direction == "departure" ? "Туда" : "Обратно") + ")"}</span>
            </div>
            {btnText == "Подтвердить" && 
                <button className="delete_passenger_btn" onClick={() => clearPassengerData()}>
                    <img src="src/images/delete_passenger_icon.svg" alt="удалить" className="delete_passenger_icon"/>
                </button>
            }
        </div>
        <div className={isOpen? "passenger_data_main" : "passenger_data_main close"}>
            <form className='passenger_data_form'>
                <fieldset className="passenger_data_fieldset" disabled={btnText == "Подтвердить" ? false : true}>
                    <div className="about_passenger"> 
                        <ClickAwayListener onClickAway={hideMenu}>
                            <div className="age_variants_selector">
                                <div className="variant_select" /* onClick={chooseVariant} */>{ageValue}</div>
                                {/* <div className="select_options age_select_options" onClick={activeVariant}>
                                    <div className="select_option age_select_option">Взрослый</div>
                                    <div className="select_option age_select_option">Детский</div>
                                </div> */}
                            </div>
                        </ClickAwayListener>
                        <FullName 
                            nameValue={passName ? passName : name} 
                            surnameValue={passSurname ? passSurname : surname} 
                            patronimycValue={passPatronimyc ? passPatronimyc : patronimyc} 
                            errSurname={errors.surname} 
                            errName={errors.name} 
                            validation={() => handleChange}
                        />
                        <div className="sex_birthday_container">
                            <div className="sb_item">
                                <span className="pd_item_title">Пол</span>
                                <div className="check_sex_container">
                                    <label className="sex-radio">
                                        <input 
                                            type="radio" 
                                            className="sex-radio_input sex-radio_input_male" 
                                            value='М' 
                                            checked={passSex ? (passSex  == 'мужской' ? true : false) : (sex == 'М' ? true : false)} 
                                            onChange={checkSex}
                                        />
                                        <span className="check_sex check_sex_male">М</span>
                                    </label>
                                    <label className="sex-radio">
                                        <input 
                                            type="radio" 
                                            className= "sex-radio_input sex-radio_input_female" 
                                            value='Ж' 
                                            checked={passSex ? (passSex  == 'женский' ? true : false) : (sex == 'Ж' ? true : false)} 
                                            onChange={checkSex}
                                        />
                                        <span className="check_sex check_sex_female">Ж</span>
                                    </label>
                                </div>
                            </div>
                            <div className="sb_item sb_item_birthday" id="birthday">
                                <span className="pd_item_title">Дата рождения</span>
                                <Calendar 
                                    startDate={passBirthday ? passBirthday : birthday} 
                                    changeBirthday={(date: Date | null) => setBirthday(date)} 
                                    clearBirthday={() => setBirthday(null)}
                                    minDate={undefined}
                                    maxDate={new Date()} 
                                    monthYearDropdown={true} 
                                    errorClass={errors.birthday ? "input-error birthday_input" : "birthday_input"}
                                />
                                {errors.birthday ? <p className="error-text">{errors.birthday}</p> : null}
                            </div>
                        </div>
                        <div className="limited_mobility_container">
                            <input 
                                type="checkbox" 
                                className="lm_checkbox" 
                                checked={limMob}
                                onClick={() => setLimMob(!limMob)}
                            />
                            <span className="lm_text">ограниченная подвижность</span>
                        </div>
                    </div>
                    <div className="document_container">
                        <ClickAwayListener onClickAway={hideMenu}>
                            <div className="document_item doc_variants_selector">
                                <span className="pd_item_title">Тип документа</span>
                                <div 
                                    className={classNames("variant_select doc_select", passId == "в" && "variant_select-variants")} 
                                    onClick={passId == "в" ? chooseVariant : () => {}}
                                >
                                    {passDocument ? passDocument : docValue}
                                </div>
                                <div className="select_options doc_options" onClick={activeVariant}>
                                    <div className="select_option doc_select_option">Паспорт РФ</div>
                                    <div className="select_option doc_select_option">Свидетельство о рождении</div>
                                </div>
                            </div>
                        </ClickAwayListener>
                        <div className={(passDocument ? passDocument : docValue) == "Паспорт РФ" ? "document_item" : "document_item close"}>
                            <span className="pd_item_title">Серия</span>
                            <input style={{ border: errors.series ? "1px solid #FF3D00C2" : "" }} type="text" maxLength={4} name="series" value={passSeries ? passSeries : series} className="pd_item-input doc_input passport_input" placeholder="__ __ __ __" onChange={handleChange}/>
                            {errors.series ? <p className="error-text">{errors.series}</p> : null}
                        </div>
                        <div className={(passDocument ? passDocument : docValue) == "Паспорт РФ" ? "document_item" : "document_item close"}>
                            <span className="pd_item_title">Номер</span>
                            <input style={{ border: errors.passportNumber ? "1px solid #FF3D00C2" : "" }} type="text" maxLength={6} name="passportNumber" value={passNumber ? passNumber : passportNumber} className="pd_item-input doc_input passport_input" placeholder="__ __ __ __ __ __" onChange={handleChange}/>
                            {errors.passportNumber ? <p className="error-text">{errors.passportNumber}</p> : null}
                        </div>
                        <div className={(passDocument ? passDocument : docValue) == "Свидетельство о рождении" ? "document_item" : "document_item close"}>
                            <span className="pd_item_title">Номер</span>
                            <input style={{ border: errors.birthCertificate ? "1px solid #FF3D00C2" : "" }} type="text" maxLength={12} className="pd_item-input doc_input bc_input" name="birthCertificate" value={passNumber ? passNumber : birthCertificate} placeholder="_ _ _ _ _ _ _ _ _ _ _ _" onChange={handleChange}/>
                            {errors.birthCertificate ? <p className="error-text">{errors.birthCertificate}<br/>Пример: VIIIУН256319</p> : null}
                        </div>
                    </div>
                    <div className="wagon_place_container">
                        <div className="wagon_name">Вагон:
                            <span className="wagon_name_value">{" " + wagonName}</span>
                        </div>
                        <div className="place_number">Место:
                            <span className="place_number_value">{" " + seatNumber}</span>
                        </div>
                    </div>
                </fieldset>
            </form>
            <div style={{background:   
                errors.surname || errors.name || errors.birthday ||
                errors.series || errors.passportNumber ||
                errors.birthCertificate ? "#FF3D0061" 
                : ""}} className="next-passenger_container">
                <button className="transparent_black_btn next-pass_btn" onClick={handleSubmit}>{btnText}</button>
            </div>
        </div>
    </div>
  )
}