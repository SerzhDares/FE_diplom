import "./loading.css";

export const Loading = () => {
  return (
    <div className="loadind_container">
        <span className="loading_text">идет поиск</span>
        <img src="/src/images/loading_img.gif" alt="Загрузка..." className="loading_img"/>
    </div>
  )
}
