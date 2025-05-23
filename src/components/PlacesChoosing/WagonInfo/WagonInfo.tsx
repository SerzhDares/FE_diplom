import { useAppSelector } from "../../../hooks";
import { seatsState } from "../../../store/slices/seatsSlice";
import { WagonCoupeScheme } from "../WagonSchemes/WagonCoupeScheme";
import { WagonLuxeScheme } from "../WagonSchemes/WagonLuxeScheme";
import { WagonSeatScheme } from "../WagonSchemes/WagonSeatScheme";
import { WagonStandardScheme } from "../WagonSchemes/WagonStandardScheme";
import "./wagonInfo.css";

interface WagonInfoProps {
    wagonNumber: string | null | undefined;
    direction: string;
    humansQuantity: number;
}

export const WagonInfo = ({wagonNumber, direction, humansQuantity}: WagonInfoProps) => {

    const { trainWagonsSeats } = useAppSelector(seatsState);
    const wagonsWithDirection = trainWagonsSeats[direction as keyof typeof trainWagonsSeats];

    const coach = wagonsWithDirection.filter((item: any) => item.coach.name === wagonNumber)[0];

    const availableSeatsParts = (seats: any) => {
        const availableTop = [];
        const availableBottom = [];
        const availableSide = [];
        seats?.map((seat: any) => {
            if(seat.index % 2 && seat.index < 33) availableTop.push(seat.index);
            if(!(seat.index % 2) && seat.index < 33) availableBottom.push(seat.index);
            if(seat.index >= 33) availableSide.push(seat.index);
        })
        return [availableTop.length, availableBottom.length, availableSide.length]
    }

    return (
        <>
            <div className="wagon_info">
                <div className="wagon_number_big">
                    <span className="big_number">{wagonNumber}</span>
                    <br/>вагон
                </div>
                <div className="wi_block wi_places">
                    <div className="wi_block_title">
                        <span className="wi_block_title-name">Места</span>
                        <span className="wi_places_quantity"> {coach?.coach?.available_seats}</span>
                    </div>
                    {availableSeatsParts(coach?.seats)[0] != 0 && (coach?.coach.class_type == "second" || coach?.coach?.class_type == "third") &&
                        <div className="places_type_block">
                            <span className="places_type">Верхние</span>
                            <span className="places_type_quantity">{availableSeatsParts(coach?.seats)[0]}</span>
                        </div>
                    }
                    {availableSeatsParts(coach?.seats)[1] != 0 &&
                        <div className="places_type_block">
                            <span className="places_type">{coach?.coach?.class_type == "fourth" ? "Сидячие" : "Нижние"}</span>
                            <span className="places_type_quantity">{coach?.coach?.class_type == "first" || coach?.coach?.class_type == "fourth" ? coach?.coach?.available_seats : availableSeatsParts(coach.seats)[1]}</span>
                        </div>
                    }
                    {availableSeatsParts(coach?.seats)[2] != 0 && coach?.coach?.class_type !== "fourth" &&
                        <div className="places_type_block">
                            <span className="places_type">Боковые</span>
                            <span className="places_type_quantity">{availableSeatsParts(coach?.seats)[2]}</span>
                        </div>
                    }
                </div>
                <div className="wi_block wi_prices">
                    <div className="wi_block_title">
                        <span className="wi_block_title-name">Стоимость</span>
                    </div>
                    {coach?.coach?.top_price != 0 && (coach?.coach?.class_type == "second" || coach?.coach?.class_type == "third") && 
                        <div className="prices_block">
                            <span className="price_value wi_price_value">{coach?.coach?.top_price}</span>
                            <span className="currency">₽</span>
                        </div>
                    }
                    {coach?.coach?.bottom_price != 0 &&
                        <div className="prices_block">
                            <span className="price_value wi_price_value">{coach?.coach?.class_type !== "first" ? coach?.coach?.bottom_price : coach?.coach?.price}</span>
                            <span className="currency">₽</span>
                        </div>
                    }
                    {coach?.coach?.side_price != 0 &&
                        <div className="prices_block">
                            <span className="price_value wi_price_value">{coach?.coach?.side_price}</span>
                            <span className="currency">₽</span>
                        </div>
                    }
                </div>
                <div className="wi_block wi_options">
                    <div className="wi_block_title">
                        <span className="wi_block_title-name">Обслуживание</span>
                        <span className="wi_service_com">ФПК</span>
                    </div>
                    <div className="options_icons_block">
                        {coach?.coach?.have_air_conditioning &&
                            <div className="options_icon options_icon_active conditioner_oi">
                                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929"/>
                                    <path d="M16.0993 18.641C15.7147 18.8691 15.3588 19.0788 15.003 19.2885C14.3847 19.6527 13.7737 20.0205 13.1518 20.3774C13.0296 20.4473 12.9865 20.5319 12.9793 20.6643C12.9326 21.3964 12.8787 22.1321 12.8283 22.8642C12.7996 23.2946 12.4941 23.5889 12.0879 23.5742C11.6925 23.5595 11.4013 23.2284 11.4157 22.798C11.4301 22.4632 11.4553 22.1248 11.4768 21.79C11.484 21.6576 11.4912 21.5251 11.4984 21.3633C11.3906 21.4258 11.3079 21.47 11.2252 21.5178C10.6825 21.8378 10.1397 22.1616 9.59333 22.4816C9.31296 22.6435 8.98946 22.603 8.75942 22.3897C8.54734 22.1947 8.45389 21.8489 8.59048 21.584C8.66596 21.4369 8.79536 21.2934 8.93554 21.2051C9.49269 20.8556 10.0606 20.5319 10.6249 20.1971C10.6753 20.1677 10.7256 20.1346 10.7939 20.0941C10.3697 19.8807 9.96715 19.6821 9.56457 19.4798C9.21232 19.2995 9.05776 18.9537 9.1584 18.5969C9.28061 18.1738 9.73351 17.9604 10.1397 18.1554C10.8011 18.4718 11.4553 18.8029 12.1095 19.134C12.2353 19.2002 12.3323 19.1965 12.4545 19.1229C13.3747 18.5711 14.2985 18.0303 15.2187 17.4859C15.269 17.4564 15.3193 17.4233 15.3948 17.3755C15.1935 17.2578 15.0102 17.1474 14.8269 17.0407C14.0397 16.5735 13.2489 16.1137 12.4653 15.6391C12.3287 15.5545 12.2245 15.5619 12.0879 15.6318C11.4517 15.9592 10.8119 16.2756 10.1684 16.5883C9.78743 16.7759 9.37766 16.6398 9.20153 16.2756C9.01822 15.904 9.16559 15.4846 9.5502 15.286C9.90245 15.102 10.2583 14.9291 10.6106 14.7489C10.6645 14.7231 10.7148 14.6937 10.7867 14.6532C10.2439 14.3332 9.72273 14.0242 9.20153 13.7151C9.10448 13.6563 9.00384 13.6011 8.90679 13.5386C8.54734 13.3178 8.42873 12.8948 8.62283 12.5416C8.82052 12.1848 9.24826 12.0707 9.61849 12.2841C10.2008 12.6225 10.7795 12.9684 11.3582 13.3105C11.3942 13.3325 11.4301 13.3509 11.4984 13.3914C11.4768 13.0346 11.4589 12.7108 11.4409 12.3834C11.4301 12.2289 11.4157 12.0781 11.4121 11.9236C11.4049 11.5189 11.6925 11.1952 12.0735 11.1768C12.4725 11.1584 12.7924 11.4453 12.8212 11.8574C12.8751 12.6078 12.929 13.362 12.9757 14.1124C12.9829 14.2375 13.0296 14.3074 13.1375 14.3663C14.0684 14.9107 14.9922 15.4589 15.9196 16.007C15.9699 16.0364 16.0202 16.0659 16.0957 16.1063C16.0993 16.0254 16.1065 15.9665 16.1065 15.9114C16.1065 14.8151 16.1029 13.7151 16.1101 12.6189C16.1101 12.4864 16.067 12.4092 15.9591 12.3356C15.3517 11.9199 14.7442 11.5042 14.1439 11.0811C13.6874 10.7611 13.7234 10.0879 14.205 9.83405C14.4602 9.70161 14.7154 9.72368 14.9527 9.88555C15.2762 10.1063 15.5997 10.327 15.9232 10.5477C15.9699 10.5808 16.0202 10.6139 16.1065 10.6691C16.1065 10.5735 16.1065 10.5073 16.1065 10.4447C16.1065 9.78254 16.1029 9.12037 16.1065 8.45819C16.1101 7.95788 16.4803 7.62679 16.9332 7.70404C17.2495 7.75555 17.4904 8.02778 17.5155 8.35886C17.5191 8.40669 17.5155 8.45819 17.5155 8.50601C17.5155 14.4178 17.5155 20.3259 17.5155 26.2376C17.5155 26.6349 17.3466 26.9145 17.0375 27.0175C16.5666 27.1794 16.1065 26.8373 16.1029 26.3149C16.0993 25.6454 16.1029 24.9795 16.1029 24.31C16.1029 24.2438 16.1029 24.1812 16.1029 24.0708C15.8513 24.2438 15.632 24.3909 15.4164 24.5381C15.2618 24.6447 15.1108 24.7514 14.9527 24.8544C14.5896 25.0972 14.1619 25.0236 13.939 24.6815C13.709 24.332 13.806 23.8943 14.1727 23.6404C14.7729 23.2247 15.3732 22.8127 15.9699 22.3933C16.031 22.3492 16.0957 22.2535 16.0957 22.1836C16.1029 21.0432 16.1029 19.9028 16.0993 18.7624C16.1101 18.7366 16.1065 18.7072 16.0993 18.641Z" fill="#292929"/>
                                    <path d="M27.1595 12.619C26.9474 12.8765 26.7137 13.1156 26.5268 13.3879C26.2536 13.7925 25.9697 14.2045 25.7648 14.6497C25.4161 15.4038 25.6102 16.1101 26.2501 16.6289C26.8324 17.1034 27.5153 17.3609 28.2198 17.5706C28.3025 17.5964 28.3888 17.6184 28.4211 17.6295C27.8496 17.887 27.2529 18.1482 26.6634 18.4278C26.4873 18.5124 26.3255 18.6411 26.1746 18.7699C25.621 19.2371 25.4485 19.8478 25.6749 20.5504C25.8619 21.139 26.2141 21.6246 26.5987 22.0881C26.7641 22.2868 26.9438 22.4744 27.1487 22.6988C26.8935 22.6473 26.6778 22.5958 26.4585 22.559C25.8906 22.4634 25.3227 22.3861 24.744 22.456C23.9208 22.559 23.3925 23.0777 23.2774 23.9165C23.1696 24.7111 23.3062 25.48 23.5003 26.2415C23.5111 26.2819 23.5183 26.3224 23.5398 26.4033C23.3421 26.2231 23.1768 26.0649 23.0043 25.9177C22.5657 25.5425 22.1128 25.193 21.588 24.9576C20.7649 24.5897 20.0496 24.792 19.5212 25.5388C19.1402 26.0759 18.9066 26.6829 18.7197 27.312C18.7017 27.3672 18.6873 27.426 18.6514 27.4738C18.6514 26.2562 18.6514 25.0422 18.6514 23.8098C20.5744 23.7436 22.156 22.9674 23.3565 21.4296C24.2587 20.2708 24.6901 18.9354 24.6505 17.4529C24.5643 14.0684 21.7965 11.4197 18.6586 11.4381C18.6586 10.1653 18.6586 8.89242 18.6586 7.5791C18.6873 7.65636 18.7053 7.7005 18.7161 7.74465C18.9389 8.46568 19.2013 9.16833 19.6434 9.78268C20.1574 10.4927 20.844 10.6877 21.642 10.3455C22.289 10.0696 22.8245 9.63185 23.3206 9.13522C23.3889 9.06532 23.4572 8.9991 23.5255 8.92921C23.5326 8.92185 23.547 8.92185 23.5614 8.91817C23.4967 9.28605 23.4068 9.65024 23.3781 10.0181C23.3421 10.4927 23.3134 10.9746 23.3601 11.4455C23.4392 12.2438 23.9748 12.7514 24.7584 12.8618C25.5024 12.9648 26.2249 12.8434 26.9438 12.6558C27.0085 12.6374 27.0696 12.6227 27.1343 12.608C27.1379 12.608 27.1451 12.6116 27.1595 12.619Z" fill="#292929"/>
                                    <path d="M18.655 22.5333C18.655 19.2666 18.655 15.9961 18.655 12.6963C20.3624 12.7772 21.7427 13.4799 22.6521 14.955C23.752 16.7392 23.7268 18.5749 22.6233 20.3555C21.5594 22.0624 19.701 22.6069 18.655 22.5333Z" fill="#292929"/>
                                </svg>
                                <div className="option_prompt">
                                    кондиционер
                                </div>
                            </div>
                        }
                        {coach?.coach?.have_wifi &&
                            <div className="options_icon options_icon_active wifi_oi">
                                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929"/>
                                    <path d="M27.4737 13.4662C27.2528 13.6749 27.0318 13.8837 26.8171 14.0988C26.6024 14.3139 26.4004 14.5416 26.1731 14.7883C23.8686 12.5552 21.16 11.3785 17.9906 11.3785C14.8337 11.3785 12.1378 12.5552 9.89644 14.7251C9.44817 14.2822 9.01883 13.8521 8.52637 13.3586C9.20825 12.8272 9.87118 12.2262 10.6099 11.7328C15.8692 8.24078 22.6501 8.84809 27.2338 13.2005C27.3096 13.2701 27.3917 13.3333 27.4737 13.3966C27.4737 13.4219 27.4737 13.4409 27.4737 13.4662Z" fill="#292929"/>
                                    <path d="M17.6873 24.4735C17.6052 24.4356 17.5232 24.3913 17.4348 24.3533C16.7655 24.0687 16.393 23.3665 16.5319 22.6516C16.6708 21.9431 17.2959 21.4307 18.0219 21.4307C18.7417 21.437 19.3668 21.9557 19.4993 22.6643C19.6319 23.3728 19.2468 24.075 18.5712 24.3533C18.4828 24.3913 18.4008 24.4292 18.3124 24.4672C18.104 24.4735 17.8957 24.4735 17.6873 24.4735Z" fill="#292929"/>
                                    <path d="M12.5606 17.401C12.1123 16.9582 11.683 16.5343 11.2537 16.1041C14.5178 12.5615 20.8505 12.0934 24.7397 16.0662C24.304 16.4963 23.8621 16.9265 23.4138 17.3694C21.9364 15.9523 20.1244 15.1552 17.9904 15.1615C15.8627 15.1679 14.0569 15.9586 12.5606 17.401Z" fill="#292929"/>
                                    <path d="M22.1069 18.7674C21.6586 19.2102 21.2293 19.6404 20.8 20.0642C19.1142 18.47 16.6834 18.6408 15.225 20.0579C14.7956 19.6277 14.3663 19.2039 13.9307 18.7737C15.6606 16.743 19.6319 16.2306 22.1069 18.7674Z" fill="#292929"/>
                                </svg>
                                <div className="option_prompt">
                                    Wi-Fi
                                </div>
                            </div>
                        }
                        {coach?.coach?.is_linens_included ?
                            <div className="options_icon options_icon_active bedclothes_oi">
                                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929"/>
                                    <path d="M27.545 21.1613C27.6815 21.5772 27.8553 22.1645 28.0538 22.7395C28.3641 23.6815 27.7312 24.6235 26.7259 24.6235C21.4764 24.6357 16.2145 24.6357 10.9649 24.6113C9.19028 24.599 7.93684 23.7304 7.65141 22.2256C7.5149 21.5283 7.58936 20.7575 7.72587 20.0602C8.17264 17.6868 8.69387 15.3256 9.20269 12.9522C9.28956 12.5363 9.42607 12.1203 9.61222 11.7411C9.99694 10.9581 10.5678 10.432 11.5234 10.2852C12.3301 10.1629 13.1119 9.85704 13.8938 9.60013C14.3902 9.42885 14.8493 9.40438 15.3085 9.698C16.1524 10.2485 17.0708 10.3831 18.076 10.3586C20.3098 10.3097 22.5437 10.3464 24.7775 10.3586C25.5718 10.3586 25.5718 10.3709 25.7952 11.1049C26.0806 12.0836 26.3536 13.0624 26.6515 14.0411C26.7259 14.2613 26.8873 14.457 27.0238 14.6528C27.334 15.081 27.7436 15.448 27.9421 15.9129C28.4758 17.1363 28.4882 18.4576 28.3393 19.7666C28.2896 20.1948 27.8925 20.574 27.545 21.1613ZM8.63182 19.1794C9.72392 18.3352 10.8781 18.274 12.0695 18.2863C16.7853 18.2985 21.5012 18.2863 26.2047 18.2985C26.6639 18.2985 27.1355 18.3597 27.7312 18.3964C27.6195 17.7235 27.5574 17.0996 27.3961 16.5001C27.0486 15.2033 26.1923 14.7017 24.8644 15.032C23.946 15.2645 23.0153 15.5092 22.1714 15.9006C19.6521 17.0629 17.0335 16.8794 14.4026 16.549C14.1171 16.5123 14.0054 16.3655 14.0427 16.0964C14.0799 15.7905 14.1171 15.4969 14.142 15.1911C14.2164 14.1145 14.3033 13.0379 14.3653 11.9613C14.3902 11.423 14.3653 10.8725 14.3653 10.2485C14.1047 10.3342 13.8938 10.3953 13.6828 10.4565C12.963 10.6523 12.2556 10.8847 11.5358 11.0315C10.9525 11.1416 10.543 11.4352 10.3196 11.9491C10.1459 12.3405 10.0094 12.7443 9.91007 13.1602C9.72392 13.9065 9.5874 14.665 9.42607 15.4235C9.17787 16.6347 8.91725 17.8336 8.63182 19.1794ZM18.6593 23.9139C21.2034 23.9139 23.7475 23.9139 26.2916 23.9139C26.4529 23.9139 26.6267 23.9262 26.788 23.9017C27.1479 23.8527 27.4457 23.498 27.3961 23.1676C27.3464 22.8251 27.1355 22.6293 26.7632 22.6416C26.6018 22.6416 26.4281 22.6416 26.2668 22.6416C21.4888 22.6538 16.7109 22.666 11.9329 22.666C11.6475 22.666 11.3497 22.6905 11.0642 22.6538C10.4685 22.5926 10.0342 22.0788 10.0466 21.4671C10.059 20.8799 10.4313 20.4884 11.0518 20.4517C11.6847 20.415 12.3301 20.3783 12.9754 20.3661C17.5424 20.3171 22.1093 20.2804 26.6763 20.2315C26.7756 20.2315 26.8873 20.2315 26.9865 20.2192C27.3464 20.1825 27.6443 19.9012 27.6567 19.6075C27.6567 19.2161 27.3713 19.0937 27.061 19.0081C26.9245 18.9714 26.7756 18.9714 26.6267 18.9714C21.4392 18.9714 16.2393 18.9591 11.0518 18.9958C10.5182 18.9958 9.9473 19.1916 9.47571 19.4485C7.99889 20.2682 7.87479 22.4091 9.20269 23.3634C9.74874 23.7549 10.4065 23.8772 11.0766 23.8772C13.6083 23.9139 16.14 23.9139 18.6593 23.9139ZM15.1472 10.4687C15.0355 12.3283 14.9238 14.09 14.8121 15.815C18.1629 16.549 21.191 15.7905 24.0826 14.3714C21.0172 13.4538 18.2001 11.8512 15.1472 10.4687ZM26.7135 20.9655C26.4529 20.9655 26.2295 20.9655 25.9937 20.9655C24.1322 20.99 22.2707 21.0389 20.4091 21.0512C17.5424 21.0756 14.6756 21.0756 11.7964 21.1001C11.5482 21.1001 11.2876 21.1001 11.0642 21.1857C10.9401 21.2347 10.7788 21.4426 10.7912 21.565C10.8036 21.6996 10.9649 21.8708 11.1015 21.9442C11.2131 22.0054 11.3869 21.9687 11.5234 21.9687C16.5247 21.9565 21.5385 21.9565 26.5398 21.9442C26.6887 21.9442 26.8376 21.9075 27.0114 21.8953C26.9493 21.6873 26.9121 21.5283 26.8624 21.3692C26.8252 21.2469 26.7756 21.1368 26.7135 20.9655ZM18.3242 11.0682C18.3118 11.1049 18.3118 11.1538 18.2994 11.1905C20.7318 12.3528 23.1518 13.5395 25.9193 14.1145C25.6462 13.148 25.4104 12.2427 25.1126 11.3618C25.063 11.215 24.7651 11.0804 24.579 11.0804C22.494 11.0682 20.4091 11.0682 18.3242 11.0682Z" fill="#292929"/>
                                </svg>
                                <div className="option_prompt">
                                    постельное белье
                                </div>
                            </div>
                            : coach?.coach?.class_type == "fourth" ? "" :
                            <div className="options_icon bedclothes_oi">
                                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929"/>
                                    <path d="M27.545 21.1613C27.6815 21.5772 27.8553 22.1645 28.0538 22.7395C28.3641 23.6815 27.7312 24.6235 26.7259 24.6235C21.4764 24.6357 16.2145 24.6357 10.9649 24.6113C9.19028 24.599 7.93684 23.7304 7.65141 22.2256C7.5149 21.5283 7.58936 20.7575 7.72587 20.0602C8.17264 17.6868 8.69387 15.3256 9.20269 12.9522C9.28956 12.5363 9.42607 12.1203 9.61222 11.7411C9.99694 10.9581 10.5678 10.432 11.5234 10.2852C12.3301 10.1629 13.1119 9.85704 13.8938 9.60013C14.3902 9.42885 14.8493 9.40438 15.3085 9.698C16.1524 10.2485 17.0708 10.3831 18.076 10.3586C20.3098 10.3097 22.5437 10.3464 24.7775 10.3586C25.5718 10.3586 25.5718 10.3709 25.7952 11.1049C26.0806 12.0836 26.3536 13.0624 26.6515 14.0411C26.7259 14.2613 26.8873 14.457 27.0238 14.6528C27.334 15.081 27.7436 15.448 27.9421 15.9129C28.4758 17.1363 28.4882 18.4576 28.3393 19.7666C28.2896 20.1948 27.8925 20.574 27.545 21.1613ZM8.63182 19.1794C9.72392 18.3352 10.8781 18.274 12.0695 18.2863C16.7853 18.2985 21.5012 18.2863 26.2047 18.2985C26.6639 18.2985 27.1355 18.3597 27.7312 18.3964C27.6195 17.7235 27.5574 17.0996 27.3961 16.5001C27.0486 15.2033 26.1923 14.7017 24.8644 15.032C23.946 15.2645 23.0153 15.5092 22.1714 15.9006C19.6521 17.0629 17.0335 16.8794 14.4026 16.549C14.1171 16.5123 14.0054 16.3655 14.0427 16.0964C14.0799 15.7905 14.1171 15.4969 14.142 15.1911C14.2164 14.1145 14.3033 13.0379 14.3653 11.9613C14.3902 11.423 14.3653 10.8725 14.3653 10.2485C14.1047 10.3342 13.8938 10.3953 13.6828 10.4565C12.963 10.6523 12.2556 10.8847 11.5358 11.0315C10.9525 11.1416 10.543 11.4352 10.3196 11.9491C10.1459 12.3405 10.0094 12.7443 9.91007 13.1602C9.72392 13.9065 9.5874 14.665 9.42607 15.4235C9.17787 16.6347 8.91725 17.8336 8.63182 19.1794ZM18.6593 23.9139C21.2034 23.9139 23.7475 23.9139 26.2916 23.9139C26.4529 23.9139 26.6267 23.9262 26.788 23.9017C27.1479 23.8527 27.4457 23.498 27.3961 23.1676C27.3464 22.8251 27.1355 22.6293 26.7632 22.6416C26.6018 22.6416 26.4281 22.6416 26.2668 22.6416C21.4888 22.6538 16.7109 22.666 11.9329 22.666C11.6475 22.666 11.3497 22.6905 11.0642 22.6538C10.4685 22.5926 10.0342 22.0788 10.0466 21.4671C10.059 20.8799 10.4313 20.4884 11.0518 20.4517C11.6847 20.415 12.3301 20.3783 12.9754 20.3661C17.5424 20.3171 22.1093 20.2804 26.6763 20.2315C26.7756 20.2315 26.8873 20.2315 26.9865 20.2192C27.3464 20.1825 27.6443 19.9012 27.6567 19.6075C27.6567 19.2161 27.3713 19.0937 27.061 19.0081C26.9245 18.9714 26.7756 18.9714 26.6267 18.9714C21.4392 18.9714 16.2393 18.9591 11.0518 18.9958C10.5182 18.9958 9.9473 19.1916 9.47571 19.4485C7.99889 20.2682 7.87479 22.4091 9.20269 23.3634C9.74874 23.7549 10.4065 23.8772 11.0766 23.8772C13.6083 23.9139 16.14 23.9139 18.6593 23.9139ZM15.1472 10.4687C15.0355 12.3283 14.9238 14.09 14.8121 15.815C18.1629 16.549 21.191 15.7905 24.0826 14.3714C21.0172 13.4538 18.2001 11.8512 15.1472 10.4687ZM26.7135 20.9655C26.4529 20.9655 26.2295 20.9655 25.9937 20.9655C24.1322 20.99 22.2707 21.0389 20.4091 21.0512C17.5424 21.0756 14.6756 21.0756 11.7964 21.1001C11.5482 21.1001 11.2876 21.1001 11.0642 21.1857C10.9401 21.2347 10.7788 21.4426 10.7912 21.565C10.8036 21.6996 10.9649 21.8708 11.1015 21.9442C11.2131 22.0054 11.3869 21.9687 11.5234 21.9687C16.5247 21.9565 21.5385 21.9565 26.5398 21.9442C26.6887 21.9442 26.8376 21.9075 27.0114 21.8953C26.9493 21.6873 26.9121 21.5283 26.8624 21.3692C26.8252 21.2469 26.7756 21.1368 26.7135 20.9655ZM18.3242 11.0682C18.3118 11.1049 18.3118 11.1538 18.2994 11.1905C20.7318 12.3528 23.1518 13.5395 25.9193 14.1145C25.6462 13.148 25.4104 12.2427 25.1126 11.3618C25.063 11.215 24.7651 11.0804 24.579 11.0804C22.494 11.0682 20.4091 11.0682 18.3242 11.0682Z" fill="#292929"/>
                                </svg>
                                <div className="option_prompt">
                                    постельное белье не включено. 
                                    стомость - {coach?.coach?.linens_price} руб.
                                </div>
                            </div>
                        }
                        <div className="options_icon food_oi">
                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929"/>
                                <path d="M10.3989 8.52637C10.6596 8.52637 10.8493 8.52637 11.039 8.52637C15.7804 8.52637 20.5219 8.52637 25.2633 8.52637C26.745 8.52637 27.4681 9.25024 27.4681 10.7573C27.4681 11.5643 27.48 12.3831 27.4681 13.19C27.4562 14.3767 26.6739 15.1599 25.5004 15.1718C24.9077 15.1837 24.3269 15.1718 23.6868 15.1718C23.6868 16.0974 23.6868 16.9518 23.6868 17.8181C23.6749 20.1915 22.0747 21.8053 19.7158 21.8172C17.9378 21.8172 16.1597 21.8291 14.3817 21.8172C12.0465 21.8053 10.4226 20.2033 10.4226 17.8774C10.387 14.7802 10.3989 11.7067 10.3989 8.52637ZM23.7223 10.4369C23.7223 11.3625 23.7223 12.3 23.7223 13.2375C24.3387 13.2375 24.9314 13.2375 25.5241 13.2375C25.5241 12.2882 25.5241 11.3625 25.5241 10.4369C24.9077 10.4369 24.3387 10.4369 23.7223 10.4369Z" fill="#292929"/>
                                <path d="M25.5363 23.7515C25.5363 24.3685 25.5363 24.9619 25.5363 25.579C19.8584 25.579 14.2043 25.579 8.52637 25.579C8.52637 24.9619 8.52637 24.3804 8.52637 23.7515C14.1805 23.7515 19.8347 23.7515 25.5363 23.7515Z" fill="#292929"/>
                            </svg>
                            <div className="option_prompt">
                                питание оплачивается дополнительно
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose_places_container">
                <span className="choose_places">
                    {humansQuantity} человек выбирают места в этом поезде
                </span>
            </div>
            <div className="scheme_wagon_number">{wagonNumber}</div>
            {coach?.coach?.class_type == "fourth" && 
                <WagonSeatScheme 
                    wagonId={coach?.coach._id}
                    wagonName={coach?.coach.name}
                    seats={coach?.seats} 
                    bottomPrice={coach?.coach?.bottom_price}
                    direction={direction}
                    seatNumber={0} 
                />
            }
            {coach?.coach?.class_type == "third" && 
                <WagonStandardScheme 
                    wagonId={coach?.coach._id}
                    wagonName={coach?.coach.name}
                    seats={coach?.seats} 
                    topPrice={coach?.coach?.top_price} 
                    bottomPrice={coach?.coach?.bottom_price} 
                    sidePrice={coach?.coach?.side_price}
                    direction={direction}
                    seatNumber={0} 
                />
            }
            {coach?.coach?.class_type == "second" && 
                <WagonCoupeScheme
                    wagonId={coach?.coach._id} 
                    wagonName={coach?.coach.name}
                    seats={coach?.seats} 
                    topPrice={coach?.coach?.top_price} 
                    bottomPrice={coach?.coach?.bottom_price}
                    direction={direction}
                    seatNumber={0} 
                />
            }
            {coach?.coach?.class_type == "first" && 
                <WagonLuxeScheme 
                    wagonId={coach?.coach._id}
                    wagonName={coach?.coach.name}
                    seats={coach?.seats} 
                    bottomPrice={coach?.coach?.price}
                    direction={direction}
                    seatNumber={0} 
                />
            }
        </>
    )
}
