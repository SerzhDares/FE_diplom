import './passengerData.css';
import { SetStateAction, useState } from 'react';
import { CheckSex } from './CheckSex';
import { FullName } from './FullName';
import { ClickAwayListener } from "@mui/material";
// import { BirthDatePicker } from '../../BirthDatePicker';
import { Calendar } from '../../Calendar';
import { FieldsValues } from '../../../validation';

interface PassengerDataProps {
    passengerNumber: number;
    deletePassenger: () => void;
}

export const PassengerData = ({passengerNumber, deletePassenger}: PassengerDataProps) => {

  const [isOpen, setIsOpen] = useState(true);
  const openBtn = () => {setIsOpen(!isOpen)};

  const [ageValue, setAgeValue] = useState("Взрослый");
  const [docValue, setDocValue] = useState("Паспорт РФ");

  const chooseVariant = (e: any) => {
    e.target.nextElementSibling.classList.toggle('open');
  }

  const activeVariant = (e: any) => {
    e.target.parentElement.classList.remove('open');
    e.target.classList.contains('age_select_option') ? 
    setAgeValue(e.target.textContent) : setDocValue(e.target.textContent);
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

  const [inputFields, setInputFields] = useState<FieldsValues>({
    surname: "",
    name: "",
    series: "",
    passportNumber: "",
    birthCertificate: ""
  })

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronimyc, setPatronimyc] = useState('');
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [series, setSeries] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [birthCertificate, setBirthCertificate] = useState('');


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
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  }

  const [errors, setErrors] = useState({
    surname: "",
    name: "",
    birthday: "",
    series: "",
    passportNumber: "",
    birthCertificate: ""
  });

//   const [submitting, setSubmitting] = useState(false);

  const validateValues = (e: any, inputValues: FieldsValues) => {
    
    let errors = {
        surname: "",
        name: "",
        birthday: "",
        series: "",
        passportNumber: "",
        birthCertificate: ""
    };

    if (!inputValues.surname) errors.surname = "Введите фамилию";
    if (!inputValues.name) errors.name = "Введите имя";
    if (!birthday) errors.birthday = "Введите дату в формате ДД.ММ.ГГГГ";
    if (!inputValues.series || inputValues.series.length < 4) {
        docValue == "Паспорт РФ" ? errors.series = "Серия документа должна состоять из 4 цифр" : errors.series = "";
    }
    if (!inputValues.passportNumber || inputValues.passportNumber.length < 6) {
        docValue == "Паспорт РФ" ? errors.passportNumber = "Номер документа должен состоять из 6 цифр" : errors.passportNumber = "";
    }
    if (!inputValues.birthCertificate || inputValues.birthCertificate.length < 12) {
        docValue == "Свидетельство о рождении" ? errors.birthCertificate = "Номер состоит из 12 символов." : errors.birthCertificate = "";
    }

    if (!errors.surname && !errors.name && !errors.birthday &&
        !errors.series && !errors.passportNumber && !errors.birthCertificate) {
            e.target.parentElement.classList.add('success-passenger_data');
    }
    return errors;
  }

  const handleSubmit = (e: any) => {
    setErrors(validateValues(e, inputFields));
    console.log(birthday)
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
            </div>
            <button className="delete_passenger_btn" onClick={deletePassenger}>
                <img src="src/images/delete_passenger_icon.svg" alt="удалить" className="delete_passenger_icon"/>
            </button>
        </div>
        <div className={isOpen? "passenger_data_main" : "passenger_data_main close"}>
            <div className="about_passenger">
                <ClickAwayListener onClickAway={hideMenu}>
                    <div className="age_variants_selector">
                        <div className="variant_select" onClick={chooseVariant}>{ageValue}</div>
                        <div className="select_options age_select_options" onClick={activeVariant}>
                            <div className="select_option age_select_option">Взрослый</div>
                            <div className="select_option age_select_option">Детский</div>
                        </div>
                    </div>
                </ClickAwayListener>
                <FullName nameValue={name} surnameValue={surname} patronimycValue={patronimyc} errSurname={errors.surname} errName={errors.name} validation={() => handleChange}/>
                <div className="sex_birthday_container">
                    <CheckSex/>
                    <div className="sb_item sb_item_birthday" id="birthday">
                        <span className="pd_item_title">Дата рождения</span>
                        <Calendar 
                        startDate={birthday} 
                        changeBirthday={(date: Date | null) => setBirthday(date)} 
                        clearBirthday={() => setBirthday(null)}
                        minDate={undefined}
                        maxDate={new Date()} 
                        monthYearDropdown={true} 
                        errorClass={errors.birthday ? "input-error birthday_input" : "birthday_input"}/>
                        {errors.birthday ? <p className="error-text">{errors.birthday}</p> : null}
                    </div>
                </div>
                <div className="limited_mobility_container">
                    <input type="checkbox" className="lm_checkbox"/>
                    <span className="lm_text">ограниченная подвижность</span>
                </div>
            </div>
            <div className="document_container">
                <ClickAwayListener onClickAway={hideMenu}>
                    <div className="document_item doc_variants_selector">
                        <span className="pd_item_title">Тип документа</span>
                        <div className="variant_select doc_select" onClick={chooseVariant}>{docValue}</div>
                        <div className="select_options doc_options" onClick={activeVariant}>
                            <div className="select_option doc_select_option">Паспорт РФ</div>
                            <div className="select_option doc_select_option">Свидетельство о рождении</div>
                        </div>
                    </div>
                </ClickAwayListener>
                <div className={docValue == "Паспорт РФ" ? "document_item" : "document_item close"}>
                    <span className="pd_item_title">Серия</span>
                    <input style={{ border: errors.series ? "1px solid #FF3D00C2" : "" }} type="text" maxLength={4} name="series" value={series} className="pd_item-input doc_input passport_input" placeholder="__ __ __ __" onChange={handleChange}/>
                    {errors.series ? <p className="error-text">{errors.series}</p> : null}
                </div>
                <div className={docValue == "Паспорт РФ" ? "document_item" : "document_item close"}>
                    <span className="pd_item_title">Номер</span>
                    <input style={{ border: errors.passportNumber ? "1px solid #FF3D00C2" : "" }} type="text" maxLength={6} name="passportNumber" value={passportNumber} className="pd_item-input doc_input passport_input" placeholder="__ __ __ __ __ __" onChange={handleChange}/>
                    {errors.passportNumber ? <p className="error-text">{errors.passportNumber}</p> : null}
                </div>
                <div className={docValue == "Свидетельство о рождении" ? "document_item" : "document_item close"}>
                    <span className="pd_item_title">Номер</span>
                    <input style={{ border: errors.birthCertificate ? "1px solid #FF3D00C2" : "" }} type="text" maxLength={12} className="pd_item-input doc_input bc_input" name="birthCertificate" value={birthCertificate} placeholder="_ _ _ _ _ _ _ _ _ _ _ _" onChange={handleChange}/>
                    {errors.birthCertificate ? <p className="error-text">{errors.birthCertificate}<br/>Пример: VIIIУН256319</p> : null}
                </div>
            </div>
            <div style={{background:   
                errors.surname || errors.name || errors.birthday ||
                errors.series || errors.passportNumber ||
                errors.birthCertificate ? "#FF3D0061" 
                : ""}} className="next-passenger_container">
                <button className="transparent_black_btn next-pass_btn" onClick={handleSubmit}>Следующий пассажир</button>
            </div>
        </div>
    </div>
  )
}
