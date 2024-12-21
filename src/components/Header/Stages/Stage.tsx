import classNames from "classnames";
import './stages.css';

interface StageClass {
    stageClass: string | undefined;
    stageNumber: number;
    stageName: string;
    stageNoBorder: string | undefined;
}

export const Stage = ({stageClass, stageNumber, stageName, stageNoBorder}: StageClass) => {

  const stageClasses = classNames("stage", stageClass);
  const borderTopStageClass = classNames("stage_border-top", stageNoBorder)
  const borderBottomStageClass = classNames("stage_border-bottom", stageNoBorder)

  return (
    <li className={stageClasses}>
        <div className={borderTopStageClass}></div>
        <div className={borderBottomStageClass}></div>
        <span className="stage_number">{stageNumber}</span>
        <span className="stage_name">{stageName}</span>
    </li>
  )
}
