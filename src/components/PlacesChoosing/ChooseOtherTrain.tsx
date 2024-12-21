import classNames from "classnames";
import { useNavigate } from "react-router-dom";

interface ChooseOtherTrainProps {
  directionClass: string;
  directionImg: string;
}

export const ChooseOtherTrain = ({directionClass, directionImg}: ChooseOtherTrainProps) => {

  const navigate = useNavigate();
  const goBack = () => {navigate(-1)};

  return (
    <div className={classNames("choose_other", directionClass)}>
      <img src={directionImg} alt="стрелка" className="choose_other_img"/>
      <button className="transparent_black_btn" onClick={goBack}>Выбрать другой поезд</button>
  </div>
  )
}
