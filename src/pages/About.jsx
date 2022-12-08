import React from "react";
import { Headof } from "../components";

import Pic from '../assets/headof/news.jpg'
import { Link } from "react-router-dom";

// Pics
import Shur from '../assets/about/Shur.png'
import Pic2 from '../assets/about/Pic.jpg'


const About = () => {


    const premItems = [
        {
            Title: "50+",
            Description: "Сотрудников",
            id: 1,
        },
        {
            Title: "25+",
            Description: "Лет работы",
            id: 2,
        },
        {
            Title: "10K+",
            Description: "Реализованных проектов ",
            id: 3,
        },
        {
            Title: "100%",
            Description: "Довольных клиентов",
            id: 4,
        },
    ]
    

    return (
        <div className="about">
            <Headof 
                title={"О компании"}
                pic={Pic}
            />
            {/*  */}
            <div className="about__f-b">
                <div className="about__f-b--shur1">
                    <img src={Shur} alt="" />
                </div>
                <div className="about__f-b--shur2">
                    <img src={Shur} alt="" />
                </div>
                <h2>О нас</h2>
                <span></span>
                <article>
                    <p>Мы оказываем услуги в области инженерных изысканий в строительстве, разработки нормативной природоохранной документации, аналитических исследований объектов окружающей среды как для организаций, так и для частных лиц на территории Москвы, Московской области и других регионов России. </p>
                    <p>Все исследования проводятся на базе собственного аккредитованного Испытательного лабораторного центра. Имеются все необходимые лицензии на производство инженерных изысканий и проектных работ.</p>
                    <p>Отчеты о проведенных изысканиях, все разработанные проекты и иные документы, выпускаемые в ГК РЭИ, соответствуют всем нормам и требованиям федерального и регионального законодательства.</p>
                </article>
            </div>
            {/*  */}
            {/*  */}
            <div className="about__s-b">
                <div className="about__s-b--container">
                    {premItems.map((item, index) => (
                        <div className="about__s-b--item" key={`${item.id}__${index}`}>
                            <h3>{item.Title}</h3>
                            <p>{item.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div className="about__t-b">
                <div className="about__t-b--l">
                    <p>Для воплощения в жизнь Вашего проекта, необходимы качественные инженерные изыскания. Условия окружающей среды  уникальны для каждой местности, они способны повлиять на Ваш проект. Для изучения этих условий и прогноза возможных последствий необходимо изучить и предвидеть все возможные факторы</p>
                    <p>Мы являемся действительным членом АССОЦИАЦИЯ «ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ» (СРО «АИИС»)</p>
                    <p>Наша компания получила более 300 положительных заключений о прохождении экспертизы. Мы знаем многие тонкости и подводные камни в инженерных изысканиях Инженерные изыскания, лабораторные исследования, проектирование, сокращение СЗЗ и услуги водопользователям</p>
                </div>
                <div className="about__t-b--r">
                    <div className="about__t-b--shurt1">
                        <img src={Shur} alt="" />
                    </div>
                    <div className="about__t-b--shurt2">
                        <img src={Shur} alt="" />
                    </div>
                    <div className="about__t-b--pic">
                        <img src={Pic2} alt="" />
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
        </div>
    )
}

export default About;