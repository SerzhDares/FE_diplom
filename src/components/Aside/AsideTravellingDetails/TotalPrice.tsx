interface ITotalPrice {
    totalPrice: number
}

export const TotalPrice = ({totalPrice}: ITotalPrice) => {
  return (
    <div className="aside_block_item time_choosing">
        <div className="ti_text_block total_text_block">
            <span className="ti_text_total">итого </span>
            <span className="price">
                <span className="total_price">{totalPrice}</span>
                <span className="total_currency"> ₽</span>
            </span>
        </div>
    </div>
  )
}
