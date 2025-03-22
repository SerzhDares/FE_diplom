import { useAppSelector, useAppDispatch } from "../../../hooks";
import { trainsState } from "../../../store/slices/trainsSlice";
import { Pagination } from "antd";
import { changeOffset, setCurrentPage } from "../../../store/slices/sortViewResultsSlice";
import "./pageChoosing.css";

export const PageChoosing = () => {
  
  const { trains } = useAppSelector(trainsState);
  const { limit, currentPage } = useAppSelector(state => state.sortViewResults);

  const dispatch = useAppDispatch();

  const pageChanging = (page: number) => {
    dispatch(setCurrentPage(page));
    dispatch(changeOffset(page * limit - limit));
  }

  return (
    <Pagination 
      align="end" 
      showSizeChanger={false}
      showLessItems
      hideOnSinglePage
      defaultPageSize={limit}
      defaultCurrent={currentPage} 
      total={trains.total_count}
      onChange={pageChanging}
    />
  )
}
