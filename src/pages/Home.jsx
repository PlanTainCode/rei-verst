import React from 'react';
import { Link } from 'react-router-dom';
import { SliderHome } from '../components';
import Slider from "react-slick";

// 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// styles

// foneAssets
import ShurMis from '../assets/home/shur-mis.png';
import FoneMis from '../assets/home/fone.png';

// ZamenAssets
import Pn1 from '../assets/home/Mission/1.png';
import Pn2 from '../assets/home/Mission/2.png';
import Pn3 from '../assets/home/Mission/3.png';
import Pn4 from '../assets/home/Mission/4.png';
import Pn5 from '../assets/home/Mission/5.png';
import Pn6 from '../assets/home/Mission/6.png';
import Hn1 from '../assets/home/News/1.jpg';
import Hn2 from '../assets/home/News/2.jpg';
import Hn3 from '../assets/home/News/3.jpg';

// Cennosti
import ShurC1 from '../assets/home/values/shur-1.png'
import ShurC2 from '../assets/home/values/shur-2.png'

// Tech
import Tn1 from '../assets/home/tech/1.png';
import Tn2 from '../assets/home/tech/2.png';
import Tn3 from '../assets/home/tech/3.png';
import Tn4 from '../assets/home/tech/4.png';
import Tn5 from '../assets/home/tech/5.png';


const Home = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const itemsMis = [
    {
      img: Pn1,
      h3: "Многолетний опыт",
      p: "Сегодня у нас за плечами большой стаж работы.  Группа компаний РЭИ на рынке проектно-изыскательных услуг с 1993 года.",
    },
    {
      img: Pn2,
      h3: "Собственный Испытательный лабораторный центр",
      p: "Все исследования, проводятся на базе собственного Испытательного лабораторного центра, аккредитованного в национальной системе аккредитации.",
    },
    {
      img: Pn3,
      h3: "Профессионализм",
      p: "Большой опыт работы сотрудников компании в сфере инженерных изысканий и проектирования. Постоянное повышение квалификации",
    },
    {
      img: Pn4,
      h3: "Побеждаем в конкурсах и тендерах",
      p: "Наша компания регулярно участвует в государственных тендерах и конкурсах на различные виды изысканий, мониторингов, а также лабораторных исследований",
    },
    {
      img: Pn5,
      h3: "Работаем по всей России",
      p: "Принимаем заказы не только по Москве, но и по другим регионам страны. ",
    },
    {
      img: Pn6,
      h3: "Выполняем множество видов исследований",
      p: "Все виды изысканий, экологическое проектирование, услуги водопользователям, лабораторные исследования и все это в одном месте!",
    },
  ]

  const itemsNews = [
    {
      span: "28.02.2020",
      img: Hn1,
      h3: "Группе компаний РЭИ исполнилось 27 лет !",
      p: "Мы благодарим всех наших клиентов, коллег и партнеров за их выбор и оказанное доверие, ведь в Вашем успехе мы видим свое будущее. За 27 лет из небольшой компании мы превратилась в...",
    },
    {
      span: "28.02.2020",
      img: Hn2,
      h3: "ИЛЦ ООО «ГК РЭИ» перешел на применение ГОСТ ISO/IEC 17025-2019",
      p: "Уважаемые заказчики испытательного лабораторного центра (ИЛЦ) ООО ГК РЭИ! В соответствии с требованиями национального органа по аккредитации (Росаккредитация) информируем, что сис...",
    },
    {
      span: "28.02.2020",
      img: Hn3,
      h3: "Итоги сертификационного аудита",
      p: "Уважаемые заказчики испытательного лабораторного центра (ИЛЦ) ООО ГК РЭИ! В соответствии с требованиями национального органа по аккредитации (Росаккредитация) информируем, что сис...",
    },
  ]

  const itemsValues = [
    {
      h3: "1.	Клиентоориентированность.",
      p: "Группа компаний РЭИ настроена на долгосрочное сотрудничество со своими клиентами, поэтому для постоянных заказчиков действует специальная ценовая политика.",
    },
    {
      h3: "2.	Клиентоориентированность.",
      p: "Группа компаний РЭИ настроена на долгосрочное сотрудничество со своими клиентами, поэтому для постоянных заказчиков действует специальная ценовая политика.",
    },
    {
      h3: "3.	Клиентоориентированность.",
      p: "Группа компаний РЭИ настроена на долгосрочное сотрудничество со своими клиентами, поэтому для постоянных заказчиков действует специальная ценовая политика.",
    },
  ]

  const itemsTech = [
    {
      img: Tn1,
      p: "Московская государственная экспертиза Мосгорэкспертиза",
    },
    {
      img: Tn2,
      p: "Управление РПН по Москве",
    },
    {
      img: Tn3,
      p: "ГАУ МО «Мособлгосэкспертиза»",
    },
    {
      img: Tn4,
      p: "ФБУЗ ЦГиЭ по Москве",
    },
    {
      img: Tn5,
      p: "главгосэкспертиза России",
    },
  ]

  return (
    <div>
        <SliderHome />

        {/* Миссия компании */}
        <div className="mission">
          <div className="mission__fone-1">
          </div>
          <div className="mission__fone-2">
            <img src={ShurMis} alt="" />
          </div>
          <div className="mission__container">
            

            <h2>Миссия компании:</h2>
            <span></span>
            <p>Наша Миссия – выполнение работ в строгом соответствии с отраслевыми стандартами, активное участие в развитии  экологического законодательства и нормотворчества,  содействие в обеспечении безопасности окружающей среды на всех стадиях строительства. Вы всегда можете быть уверены в качестве проделанной нами работы!</p>

            <div className="mission__block">
              {itemsMis.map((itemMis, index) => (
                <div className="mission__block--item" key={`${itemMis.h3}__${index}`}>
                  <img src={itemMis.img} alt="" />
                  <h3>{itemMis.h3}</h3>
                  <p>{itemMis.p}</p>
                </div>
              ))}
            </div>

            <Link to='/'>Читать больше</Link>
          </div>
        </div>
        {/* Конец миссии */}
        {/* Начало новостей */}
        <div className="h-news">
          <div className="h-news__container">
            <h2>Новости компании</h2>
            <span></span>
            <div className="h-news__block">
              {itemsNews.map((itemNews, index) => (
                <Link to='/' className='h-news__block--item' key={`${itemNews.span}__${index}`}>
                  <span>{itemNews.span}</span>
                  <img src={itemNews.img} alt="" />
                  <h3>{itemNews.h3}</h3>
                  <p>{itemNews.p}</p>
                </Link>
              ))}
            </div>
            <Link to='/'>Читать больше</Link>
          </div>
        </div>
        {/* Конец новостей */}
        {/* Начало ценностей */}
        <div className="values">
          <div className="values__container">
            <div className="values__container--shur-1">
                <img src={ShurC1} alt="" />
            </div>
            <div className="values__container--shur-2">
                <img src={ShurC2} alt="" />
            </div>
            <span></span>
            <h2>Ценности компании:</h2>
            <div className="values__block-slider">
              <Slider {...settings} className="values__block-slider--slider">
                {itemsValues.map((itemValues, index) => (
                  <div className="values__block-slider--slider-list" key={`${itemValues.h3}__${index}`}>
                    <h3>{itemValues.h3}</h3>
                    <p>{itemValues.p}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* Конец ценностей */}
        {/* Начало техэкспертиз */}
        <div className="tech">
          <div className="tech__container">
            <h2>Технические отчеты успешно проходят проверку государственных и негосударственных экспертиз</h2>
            <div className="tech__block">
              {itemsTech.map((itemTech, index) => (
                <div className="tech__block--item" key={`${itemTech.p}__${index}`}>
                  <img src={itemTech.img} alt="" />
                  <p>{itemTech.p}</p>
                </div>
              ))}
              
            </div>
          </div>
        </div>
        {/* Конец техэкспертиз */}
    </div>
  )
}

export default Home