import { ClickAwayListener } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeOffset, resultsLimit, setCurrentPage, sortResults } from "../../../store/slices/sortViewResultsSlice";
import './searchInfo.css';

interface SearchInfoProps {
    variantsFound: number;
}

export const SearchInfo = ({variantsFound}: SearchInfoProps) => {

  const variantsQuantity = [5, 10, 15];

  const { limit, sort } = useAppSelector(state => state.sortViewResults);
  const dispatch = useAppDispatch();

  const activeQuantityVariant = (e: any) => {
    dispatch(resultsLimit(e.target.textContent));
  }

  const chooseSortVariant = () => {
    document.querySelector('.sort_select')?.classList.toggle('open');
  }

  const selectedSortVariant = (title: string) => {
    let value;
    if (title === 'времени') value = 'date';
    if (title === 'длительности') value = 'duration';
    if (title === 'стоимости') value = 'price__min';
    return value;
  }

  const activeSortVariant = (e: any) => {
    document.querySelector('.sort_select')?.classList.remove('open');
    dispatch(sortResults({title: e.target.textContent, value: selectedSortVariant(e.target.textContent)}));
    dispatch(changeOffset(0));
    dispatch(setCurrentPage(1));
  }

  const hideMenu = () => {
    document.querySelector('.sort_select')?.classList.remove('open');
  }

  return (
    <div className="search_info">
        <span className="tickets_quantity">найдено
            <span className="tickets_number"> {variantsFound}</span>
        </span>
        <ClickAwayListener onClickAway={hideMenu}>
            <span className="sort_by">сортировать по:
                <span className="sort_variant" onClick={chooseSortVariant}>{sort.title}</span>
                <div className="sort_select" onClick={activeSortVariant}>
                    <div className="sort_select_item">времени</div>
                    <div className="sort_select_item ssi_center">стоимости</div>
                    <div className="sort_select_item">длительности</div>
                </div>
            </span>
        </ClickAwayListener>
        <span className="view_variants">показывать по:
            {variantsQuantity.map(variant => (
              variant == limit ? 
                <span className="view_number view_number_active" key={variant} onClick={activeQuantityVariant}>{limit}</span> 
              : variant <= variantsFound ? 
                <span className="view_number" key={variant} onClick={activeQuantityVariant}>{variant}</span>
              : <span className="view_number" key={variant}></span>
            ))}
        </span>
    </div>
  )
}
