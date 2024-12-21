import { MoreButton } from '../MoreButton';
import { useState } from 'react';

interface AsidePassengersPriceInfo {
    adultsPassengers: string;
    priceForAdults: number;
    childrenPassengers: string;
    priceForChildren: number;
}

export const AsidePassengersPriceInfo = ({
    adultsPassengers, priceForAdults, 
    childrenPassengers, priceForChildren
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
                <div className="ti_text_block">
                    <span className="ti_text_option">{adultsPassengers}</span>
                    <span className="price">
                        <span className="price_value details_price_value">{priceForAdults}</span>
                        <span className="currency ticket_currency"> ₽</span>
                    </span>
                </div>
                <div className="ti_text_block">
                    <span className="ti_text_option">{childrenPassengers}</span>
                    <span className="price">
                        <span className="price_value details_price_value">{priceForChildren}</span>
                        <span className="currency ticket_currency"> ₽</span>
                    </span>
                </div>
            </div>
        </div>
        <div className="aside_block_item time_choosing">
            <div className="ti_text_block total_text_block">
                <span className="ti_text_total">итого </span>
                <span className="price">
                    <span className="total_price">{priceForAdults+priceForChildren}</span>
                    <span className="total_currency"> ₽</span>
                </span>
            </div>
        </div>
    </>
  )
}
