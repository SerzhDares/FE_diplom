import './aboutUs.css';

export const AboutUs = () => {
  return (
    <div className="container">
    <section className="about" id="about">
      <h2 className="section_title about_title">О нас</h2>
      <article className="about_article">
        <p className="about_article_text">
          Мы рады видеть вас! Мы работаем для Вас с 2003 года. Более 20 лет мы наблюдаем, как с каждым днем 
          <br/>все больше людей заказывают жд билеты через интернет.
        </p>
        <p className="about_article_text">
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
          <br/>Мы расскажем о преимуществах заказа через интернет.
        </p>
        <p className="about_article_text about_article_text_last">
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          <br/>Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
        </p>
      </article>
    </section>
  </div>
  )
}
