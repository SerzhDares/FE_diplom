import { SetStateAction, useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeSearchFields } from '../store/slices/searchSlice';
import { AutoComplete } from 'antd';
import classNames from 'classnames';

interface citiesSearchI {
    cityFieldError: string;
    cityFieldValidation: string | undefined;
    cityFieldChange: Function;
    cityFieldName: string;
    cityFieldPlaceholder: string;
    directionClass: string;
}

export const CitiesDynamicSearch = ({directionClass, cityFieldError, cityFieldValidation, cityFieldChange, cityFieldName, cityFieldPlaceholder}: citiesSearchI) => {


//     const {departureCity} = useAppSelector(state => state.search.departureCity);
//     const {arrivalCity} = useAppSelector(state => state.search.arrivalCity)


//   useEffect(() => {
//     if (cityFieldName === "pointFrom" && departureCity) {
//         setInputValue(departureCity.name);
//     }
//     if (cityFieldName === "pointTo" && arrivalCity) {
//         setInputValue(arrivalCity.name);
//     }
//   }, [arrivalCity, departureCity]);

  const [inputValue, setInputValue] = useState<string | undefined>('');
  const dynamicSearch = useDebounce(inputValue, 500);

  const dispatch = useAppDispatch();

  const [cities, setCities] = useState<{label: string; value: string}[]>([]);

  const getCities = async (value: string | undefined) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_CITIES_LIST}=${value}`);
      if (!response.ok) {
        throw new Error('Что-то пошло не так');
      }
      const data = await response.json();
      setCities(
        data.map((city: { [x: string]: any; name: any; }) => ({ label: city.name, value: city['_id'] }))
     );
    } catch (err) {
      throw new Error('Что-то пошло не так');
    }
  }

  useEffect(() => {
    if (inputValue?.trim() === '') {
       return;
    }
    if (dynamicSearch) {
       getCities(inputValue);
    }
 }, [dynamicSearch]);


 const searchHandler = (value: SetStateAction<string | undefined>) => {
    setInputValue(value);
    if (value === '') {
      dispatch(
          changeSearchFields({ value: { id: null, name: null } })
      );
    }
  };

  const selectHandler = (data: string) => {
    console.log(data);
    console.log(cities);
    const cityName = cities.find((city) => city.value === data)?.label;
    setInputValue(cityName);
    dispatch(
      changeSearchFields({ value: { id: data, name: cityName } })
   );
  }
  
  return (
    <AutoComplete
        options={cities}
        onSelect={selectHandler}
        onSearch={searchHandler}
        value={inputValue}
        allowClear
    >
        <input 
            style={{ border: cityFieldError ? "3px solid #FF3D00C2" : "" }} 
            name={cityFieldName} 
            value={cityFieldValidation} onChange={() => cityFieldChange} 
            type="text" className={classNames(`form__input form__input_geo ${directionClass}`)} 
            placeholder={cityFieldPlaceholder}
        />
    </AutoComplete>
  )
}
