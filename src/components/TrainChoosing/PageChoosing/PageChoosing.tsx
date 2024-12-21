import { PageChoosingBtnNext } from "./PageChoosingBtnNext";
import { PageChoosingBtnPrev } from "./PageChoosingBtnPrev";
import "./pageChoosing.css";
import { arrPages } from "../SearchInfo/SearchInfo"; //импорт массива с числом страниц с вариантами поездов, сформированный в компоненте SearchInfo

export const PageChoosing = () => {
  const btnState = (e: any) => {
    const btns = document.querySelectorAll('.choosing_page_btn');
    btns.forEach(btn => {
        if (btn.classList.contains('active_page_btn')) {
            btn.classList.remove('active_page_btn');
        }
    })
    e.target.classList.add('active_page_btn');
  }

  // const arr = [1, 2, 3]
  return (
    <div className="tickets_page_choosing">
        <PageChoosingBtnPrev/>
        {arrPages.map(page => ( //рендеринг кнопок выбора страницы на основе сформированного массива числа страниц
          <button key={page} className={
            page == 1 ? "choosing_page_btn active_page_btn" : "choosing_page_btn"} 
            onClick={btnState}>{page}
          </button>
        ))}
        <PageChoosingBtnNext/>
    </div>
  )
}
