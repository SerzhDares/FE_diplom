import { SetStateAction, useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeSearchFieldDep, changeSearchFieldArr } from '../store/slices/searchSlice';
import { AutoComplete } from 'antd';
import classNames from 'classnames';

interface citiesSearchI {
    cityFieldError: string;
    cityFieldValidation: string | undefined;
    cityFieldName: string;
    cityFieldPlaceholder: string;
    directionClass: string;
}

export const CitiesDynamicSearch = ({
  directionClass, cityFieldError, 
  cityFieldValidation, cityFieldName, 
  cityFieldPlaceholder}: citiesSearchI) => {

  const { departureCity, arrivalCity } = useAppSelector(state => state.search);

  const [inputValue, setInputValue] = useState<string | undefined>('');

  useEffect(() => {
    if (cityFieldName === "pointFrom" && departureCity) {
        setInputValue(departureCity.name);
    }
    if (cityFieldName === "pointTo" && arrivalCity) {
        setInputValue(arrivalCity.name);
    }
  }, [arrivalCity, departureCity]);


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


 const searchHandler1 = (value: SetStateAction<string | undefined>) => {
    setInputValue(value);
    if (value === '') {
      dispatch(
          changeSearchFieldDep({ value: { id: null, name: null } })
      );
    }
  };

  const searchHandler2 = (value: SetStateAction<string | undefined>) => {
    setInputValue(value);
    if (value === '') {
      dispatch(
          changeSearchFieldArr({ value: { id: null, name: null } })
      );
    }
  };

  const selectHandler1 = (data: string) => {
    const cityName = cities.find((city) => city.value === data)?.label;
    setInputValue(cityName);
    dispatch(
      changeSearchFieldDep({ value: { id: data, name: cityName } })
   );
  }

  const selectHandler2 = (data: string) => {
    const cityName = cities.find((city) => city.value === data)?.label;
    setInputValue(cityName);
    dispatch(
      changeSearchFieldArr({ value: { id: data, name: cityName } })
   );
  }
  
  return (
    <AutoComplete
        options={cities}
        onSelect={cityFieldName === "pointFrom" ? selectHandler1 : selectHandler2}
        onSearch={cityFieldName === "pointFrom" ? searchHandler1 : searchHandler2}
        value={inputValue}
        allowClear
    >
        <input 
            style={{ border: cityFieldError ? "3px solid #FF3D00C2" : "" }} 
            name={cityFieldName} 
            value={cityFieldValidation} type="text" 
            className={classNames(`form__input form__input_geo ${directionClass}`)} 
            placeholder={cityFieldPlaceholder}
        />
    </AutoComplete>
  )
}
