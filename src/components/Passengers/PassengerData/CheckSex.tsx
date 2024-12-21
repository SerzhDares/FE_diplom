import { useState } from "react";

export const CheckSex = () => {

  const [sex, setSex] = useState('М');
  const checkSex = (e: any) => {setSex(e.target.value)}

  return (
    <div className="sb_item">
        <span className="pd_item_title">Пол</span>
        <div className="check_sex_container">
            <label className="sex-radio">
                <input type="radio" className="sex-radio_input sex-radio_input_male" value='М' checked={sex=='М' ? true : false} onChange={checkSex}/>
                <span className="check_sex check_sex_male">М</span>
            </label>
            <label className="sex-radio">
                <input type="radio" className= "sex-radio_input sex-radio_input_female" value='Ж' checked={sex=='Ж' ? true : false} onChange={checkSex}/>
                <span className="check_sex check_sex_female">Ж</span>
            </label>
        </div>
    </div>
  )
}
