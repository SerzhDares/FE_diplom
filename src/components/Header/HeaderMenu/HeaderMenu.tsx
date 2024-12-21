import { HashLink } from 'react-router-hash-link';
import './headerMenu.css';

export const HeaderMenu = () => {
  return (
    <nav className="header_menu">
      <div className="container">
        <ul className="menu_list">
          <li className="menu_list-item">
            <HashLink smooth className="item_link" to='/#about'>О нас</HashLink>
          </li>
          <li className="menu_list-item">
            <HashLink smooth className="item_link" to='/#info'>Как это работает</HashLink>
          </li>
          <li className="menu_list-item">
            <HashLink smooth className="item_link" to='/#reviews'>Отзывы</HashLink>
          </li>
          <li className="menu_list-item">
            <HashLink smooth className="item_link" to='/#contacts'>Контакты</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
