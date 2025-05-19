import { MoreButton } from '../MoreButton';
import { TotalPrice } from './TotalPrice';
import { useState } from 'react';

interface AsidePassengersPriceInfo {
    adultsPassengersThere: number;
    priceForAdultsThere: number;
    childrenPassengersThere: number;
    priceForChildrenThere: number;
    isBack: string;
    adultsPassengersBack: number;
    priceForAdultsBack: number;
    childrenPassengersBack: number;
    priceForChildrenBack: number;
}

export const AsidePassengersPriceInfo = ({
    adultsPassengersThere, priceForAdultsThere, childrenPassengersThere, 
    priceForChildrenThere, isBack, adultsPassengersBack, priceForAdultsBack,
    childrenPassengersBack, priceForChildrenBack
}: AsidePassengersPriceInfo) => {

  const [isOpen, setIsOpen] = useState(true);
  const openBtn = () => {setIsOpen(!isOpen)};

  return (
    <>
        <div className="aside_block_item time_choosing passengers_info">
            <div className="time_choosing_title">
                <span className="time_choosing_text">Пассажиры</span>
                <MoreButton btnSetState={openBtn} btnState={isOpen}/>
            </div>
            <div className={isOpen ? "travel_info passengers_travel_info open" : "travel_info passengers_travel_info"}>
                <div className="ti_direction_text">Туда</div>
                <div className="ti_text_block">
                    {adultsPassengersThere ?
                        <span className="ti_text_option">
                            {
                            adultsPassengersThere == 1 ? 
                                adultsPassengersThere + ' взрослый' 
                                : adultsPassengersThere + ' взрослых'
                            }
                        </span>
                    : ""}
                    {priceForAdultsThere ?
                        <span className="price">
                            <span className="price_value details_price_value">{priceForAdultsThere}</span>
                            <span className="currency ticket_currency"> ₽</span>
                        </span>
                    : ""}
                </div>
                <div className="ti_text_block">
                    {childrenPassengersThere ?
                        <span className="ti_text_option">
                            {
                            childrenPassengersThere == 1 ? 
                                childrenPassengersThere + ' ребенок' 
                                : childrenPassengersThere + ' ребенка'
                            }
                        </span>
                    : ""}
                    {priceForChildrenThere ?
                        <span className="price">
                            <span className="price_value details_price_value">{priceForChildrenThere}</span>
                            <span className="currency ticket_currency"> ₽</span>
                        </span>
                    : ""}
                </div>
                {isBack &&
                <>
                    <div className="ti_direction_text">Обратно</div>
                    <div className="ti_text_block">
                        {adultsPassengersBack ?
                            <span className="ti_text_option">
                                {
                                adultsPassengersBack == 1 ? 
                                    adultsPassengersBack + ' взрослый' 
                                    : adultsPassengersBack + ' взрослых'
                                }
                            </span>
                        : ""}
                        {priceForAdultsBack ?
                            <span className="price">
                                <span className="price_value details_price_value">{priceForAdultsBack}</span>
                                <span className="currency ticket_currency"> ₽</span>
                            </span>
                        : ""}
                    </div>
                    <div className="ti_text_block">
                        {childrenPassengersBack ?
                            <span className="ti_text_option">
                                {
                                childrenPassengersBack == 1 ? 
                                    childrenPassengersBack + ' ребенок' 
                                    : childrenPassengersBack + ' ребенка'
                                }
                            </span>
                        : ""}
                        {priceForChildrenBack ?
                            <span className="price">
                                <span className="price_value details_price_value">{priceForChildrenBack}</span>
                                <span className="currency ticket_currency"> ₽</span>
                            </span>
                        : ""}
                    </div>
                </>
                }
            </div>
        </div>
        <TotalPrice 
            totalPrice={
                priceForAdultsThere+priceForChildrenThere+priceForAdultsBack+priceForChildrenBack
            }
        />
    </>
  )
}
