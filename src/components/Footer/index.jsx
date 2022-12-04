import React from 'react'
import Logo from '../../assets/layout/Header/Logo.png'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <span></span>
      <div className="footer__container">
        <div className="footer__logo">
          <Link to='/'> 
            <img src={Logo} alt="Логотип" />
          </Link>
        </div>
        <div className="footer__links">
          <ul>
            <li><Link to='/'>О нас</Link></li>
            <li><Link to='/'>Работы</Link></li>
            <li><Link to='/'>Контакты</Link></li>
            <li><Link to='/'>Документация</Link></li>
          </ul>
          <ul>
            <li><Link to='/'>Услуги</Link></li>
            <li><Link to='/'>Инженерные изыскания</Link></li>
            <li><Link to='/'>Лабораторный центр</Link></li>
            <li><Link to='/'>Экологическое проектирование</Link></li>
            
          </ul>
        </div>
        <button>Оставить заявку</button>
      </div>
    </footer>
  )
}

export default Footer