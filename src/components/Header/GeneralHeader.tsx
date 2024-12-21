import { Logo } from "../Logo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { GeneralSearchForm } from "./GeneralSearchForm/GeneralSearchForm";

export const GeneralHeader = () => {
  return (
    <header className="header general_header" id="header">
        <div className="container">
          <Logo logoClass="logo"/>
        </div>
        <HeaderMenu/>
        <GeneralSearchForm/>
    </header>
  )
}
