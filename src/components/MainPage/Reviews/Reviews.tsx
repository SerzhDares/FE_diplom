import { Review } from './Review';
import './reviews.css';

export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
     <div className="container">
      <h2 className="section_title">Отзывы</h2>
      <div className="reviews_container">
        <Review reviewImg={"/src/images/review_1.png"} reviewTitle={"Екатерина Вальнова"}
          reviewText={
            `Доброжелательные подсказки 
            на всех этапах помогут правильно заполнить
            поля и без затруднений купить авиа или ж/д
            билет, даже если вы заказываете онлайн билет
            впервые.`}
        />
        <Review reviewImg={"/src/images/review_2.png"} reviewTitle={"Евгений Стрыкало"}
          reviewText={
            `СМС-сопровождение до посадки
             сразу после оплаты ж/д билетов
             и за 3 часа до отправления мы пришлем
             вам СМС-напоминание о поездке.`}
          />
      </div>
     </div>
    </section>
  )
}
