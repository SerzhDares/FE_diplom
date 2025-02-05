import { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/material";
import './searchInfo.css';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { pagesArrGenerator} from "../../../store/slices/trainsPagesSlice";

interface SearchInfoProps {
    variantsFound: number;
}

let pagesQuantityNumber: number;

export const SearchInfo = ({variantsFound}: SearchInfoProps) => {

  const [sortValue, setSortValue] = useState('времени');
  const [variants, setVariants] = useState('');

  const chooseSortVariant = () => {
    document.querySelector('.sort_select')?.classList.toggle('open');
  }

  const activeSortVariant = (e: any) => {
    document.querySelector('.sort_select')?.classList.remove('open');
    setSortValue(e.target.textContent);
  }

  const hideMenu = () => {
    document.querySelector('.sort_select')?.classList.remove('open');
  }

  const variantsQuantity = [10, 15];

  const {pages} = useAppSelector(state => state.trainsPages);
  const dispatch = useAppDispatch();

  const activeQuantityVariant = (e: any) => { //функция выбора количества отображаемых вариантов поездов на странице, от значения которой зависит формируемый массив числа страниц
    
    const allNumbers = document.querySelectorAll('.view_number');
    allNumbers.forEach(number => {
        if (number.classList.contains('view_number_active')) {
            number.classList.remove('view_number_active');
        }
    })
    e.target.classList.add('view_number_active');;
    setVariants(e.target.textContent);
    pages.length = 0;
  }

  useEffect(() => {
    const viewVariantsQuantity = document.querySelector('.view_number_active')?.textContent;
    pagesQuantityNumber = Math.ceil(variantsFound / Number(viewVariantsQuantity));
    dispatch(pagesArrGenerator(pagesQuantityNumber));
  }, [variants])

  return (
    <div className="search_info">
        <span className="tickets_quantity">найдено
            <span className="tickets_number"> {variantsFound}</span>
        </span>
        <ClickAwayListener onClickAway={hideMenu}>
            <span className="sort_by">сортировать по:
                <span className="sort_variant" onClick={chooseSortVariant}>{sortValue}</span>
                <div className="sort_select" onClick={activeSortVariant}>
                    <div className="sort_select_item">времени</div>
                    <div className="sort_select_item ssi_center">стоимости</div>
                    <div className="sort_select_item">длительности</div>
                </div>
            </span>
        </ClickAwayListener>
        <span className="view_variants">показывать по:
            <span className="view_number view_number_active" onClick={activeQuantityVariant}>5</span>
            {variantsQuantity.map(variant => (
                variant <= variantsFound ? 
                <span className="view_number" key={variant} onClick={activeQuantityVariant}>{variant}</span>
                : <span className="view_number"></span>
            ))}
        </span>
    </div>
  )
}
