import { Stage } from "./Stage";
import classNames from "classnames";
import './stages.css';

export interface StagesLineProps {
    currentStage: number;
}

export const StagesLine = ({currentStage}: StagesLineProps) => {

  const arr = [
    {number: 1, name: "Билеты", ownClass: "tickets_stage", prevClass: "stage_prev"},
    {number: 2, name: "Пассажиры", ownClass: "passengers_stage", prevClass: "stage_prev"},
    {number: 3, name: "Оплата", ownClass: "pay_stage", prevClass: "stage_prev"},
    {number: 4, name: "Проверка", ownClass: "check_stage", prevClass: "stage_prev"},
  ]

  const stageClasses = (number: number, currentNumber: number, own: string, prev: string) => {
    let classes;
    if (number == currentNumber) {classes = classNames(own)};
    for(let i = 1; i <= 3; i++) {
        if (number == (currentNumber - i)) {classes = classNames(own, prev)}
    }
    return classes;
  }

  const stageClassNoBorder = (currentNumber: number) => {
    let noBorder;
    currentNumber == 4 ? noBorder = "stage_none-border" : noBorder = "";
    return noBorder;
  }

  const stagesContainer = (currentNumber: number) => {
    let stagesContainer;
    currentNumber == 4 ? stagesContainer = "stages_container orange_stages_container" : stagesContainer = "stages_container";
    return stagesContainer;
  }

  return (
    <div className={stagesContainer(currentStage)}>
        <div className="container">
            <ul className="stages">
                {arr.map(stage => (
                    <Stage key={stage.number} stageClass={stageClasses(stage.number, currentStage, stage.ownClass, stage.prevClass)} 
                    stageNumber={stage.number} stageName={stage.name} stageNoBorder={stageClassNoBorder(stage.number)}/>
                ))}
            </ul>
        </div>
    </div>
  )
}
