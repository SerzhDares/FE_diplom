import './howItWorks.css';

export const HowItWorks = () => {

  return (
    <section className="info" id="info">
      <div className="container">
        <div className="info_title">
          <h2 className="section_title info_title_text">Как это работает</h2>
          <a href='/#contacts'>
            <button className="transparent_btn info_btn">Узнать больше</button>
          </a>
        </div>
        <div className="info_parts">
          <div className="info_part">
            <img src="src/images/computer_icon.svg" alt="computer" className="info_part_icon"/>
            <span className="info_part_text">Удобный заказ<br/>на сайте</span>
          </div>
          <div className="info_part">
            <img src="src/images/house_icon.svg" alt="house" className="info_part_icon"/>
            <span className="info_part_text">Нет необходимости<br/>ехать в офис</span>
          </div>
          <div className="info_part">
            <img src="src/images/planet_icon.svg" alt="planet" className="info_part_icon"/>
            <span className="info_part_text">Огромный выбор<br/>направлений</span>
          </div>
        </div>
      </div>
    </section>
  )
}
