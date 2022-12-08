import React from "react";
import { Headof } from "../components";

import Pic from '../assets/headof/contacts.jpg'
import { Link } from "react-router-dom";

// Pics
import Shur from '../assets/about/Shur.png'
import Pic2 from '../assets/about/Pic.jpg'


const Contacts = () => {


    

    return (
        <div className="contacts">
            <Headof 
                title={"Контакты"}
                pic={Pic}
            />
            {/*  */}
            <div className="contacts__f-b">
                <h2>Группа компаний РЭИ:</h2>
                <div className="contacts__f-b--grid">
                    <div className="contacts__f-b--item">
                        <h3>Адрес</h3>
                        <p>17513 г.Москва, ул. Островитянова, д.6</p>
                    </div>
                    <div className="contacts__f-b--item">
                        <h3>Как проехать:</h3>
                        <p>От ст. м. Коньково, последний вагон из центра. Далее на автобусе 295 или 712, маршрутное такси 36, до остановки Медицинский институт.</p>
                    </div>
                </div>
            </div>
            <div className="contacts__s-b">
                <div className="contacts__s-b--block">
                    <h2>ГК РЭИ (ОФИС):</h2>
                    <div className="contacts__s-b--item">
                        <h3>Телефон</h3>
                        <a href="">+7 495 225-7126, 225-7127,</a>
                        <a href="">+7 910 446-9790,</a>
                        <a href="">+7 910 405-8273 (звонки, WhatsApp).</a>
                    </div>
                    <div className="contacts__s-b--item">
                        <h3>Email:</h3>
                        <a href="">info@rei.ru</a>
                    </div>
                </div>
                <div className="contacts__s-b--block">
                    <h2>ГК РЭИ (ИЛЦ):</h2>
                    <div className="contacts__s-b--item">
                        <h3>Телефон</h3>
                        <a href="">+7 495 225-7118,</a>
                        <a href="">+7 910 405-8273 (звонки, WhatsApp)</a>
                    </div>
                    <div className="contacts__s-b--item">
                        <h3>Email:</h3>
                        <a href="">infolab@gruppa-rei.ru</a>
                    </div>
                    <div className="contacts__s-b--item">
                        <h2>Технические вопросы:</h2>
                        <h3>Телефон</h3>
                        <a href="">+7 495 225-7118 доб. 202,</a>
                        <a href="">+7 910 492-4079 (звонки, WhatsАpp).</a>
                    </div>
                    <div className="contacts__s-b--item">
                        <h3>Email:</h3>
                        <a href="">lc@gruppa-rei.ru</a>
                    </div>
                </div>
            </div>
            <div className="form-alt">
                <h2>Связаться с нами</h2>
                <form action="/" method="post">
                    <div className="form-alt__inputs">
                        <input type="text" placeholder="Имя" />
                        <input type="text" placeholder="E-mail*" />
                        <input type="text" placeholder="Номер телефона*" />
                    </div>
                    <textarea name="" id="" placeholder="Сообщение"></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div className="contacts__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.589397142531!2d37.48742555556458!3d55.64420170453517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d65f9463b67%3A0x42eeafc4a94b4ecf!2z0YPQuy4g0J7RgdGC0YDQvtCy0LjRgtGP0L3QvtCy0LAsIDYsINCc0L7RgdC60LLQsCwgMTE3NTEz!5e0!3m2!1sru!2sru!4v1670439694533!5m2!1sru!2sru" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}

export default Contacts;