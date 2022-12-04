import React from "react";
import { Headof, WorkItem } from "../components";

import Pic from '../assets/headof/works.jpg'
import { Link } from "react-router-dom";

// Pics
import Pic1 from '../assets/works/1.jpg';
import Pic2 from '../assets/works/2.jpg';
import Pic3 from '../assets/works/3.jpg';
import Pic4 from '../assets/works/4.jpg';
import Pic5 from '../assets/works/5.jpg';
import Pic6 from '../assets/works/6.jpg';
import Pic7 from '../assets/works/7.jpg';
import Pic8 from '../assets/works/8.jpg';

import Shur from '../assets/works/shur.png'

const Works = () => {

    const itemsWork = [
        {
            h2: "Инженерные изыскания",
            href: "/",
            hrefText: "Все виды инженерных ихысканий",
            items: [
                {
                    h3: "Инженерно-экологические изыскания",
                    p: "Данный вид изысканий выполняется как на строящихся, так и на эксплуатируемых объектах. дают возможность комплексно исследовать участок для оценки экологической ситуации и прогноза возможных изменений окружающей природной среды под влиянием антропогенной нагрузки.",
                    pic: Pic1,
                },
                {
                    h3: "Инженерно-геологические изыскания",
                    p: "",
                    pic: Pic2,
                },
            ]
        },
        {
            h2: "Лабораторный центр",
            href: "/",
            hrefText: "Все услуги лабораторного центра",
            items: [
                {
                    h3: "Выполнение измерений",
                    p: "",
                    pic: Pic3,
                },
                {
                    h3: "Почвенные исследования",
                    p: "",
                    pic: Pic4,
                },
            ]
        },
        {
            h2: "Экологическое проектирование",
            href: "/",
            hrefText: "Все виды экологического проектирования",
            items: [
                {
                    h3: "Благоустройство и озеленение территории",
                    p: "",
                    pic: Pic5,
                },
                {
                    h3: "Предельно допустимые выбросы",
                    p: "",
                    pic: Pic6,
                },
            ]
        },
        {
            h2: "Услуги",
            href: undefined,
            hrefText: undefined,
            items: [
                {
                    h3: "Услуги водопользователям",
                    p: "",
                    pic: Pic7,
                },
                {
                    h3: "Комплект аппаратуры 'ТРЕК-РЭИ-1М'",
                    p: "",
                    pic: Pic8,
                },
            ]
        },
    ]

    return (
        <div className="works">
            <Headof 
                title={"Услуги и работы"}
                pic={Pic}
            />
            <div className="works__container">
                {itemsWork.map((itemWork, index) => (
                    <div className="works__block" key={`${itemWork.h2}__${index}`}>
                        <h2>{itemWork.h2}</h2>
                        <div className="works__items">
                            {itemWork.items.map((item, index) => (
                                <WorkItem h3={item.h3} pic={item.pic} shur={Shur} key={`${item.h3}__${index}`} p={item.p} />
                            ))}
                            
                        </div>
                        {itemWork.href !== undefined && itemWork.href !== null ? (
                            <Link to={itemWork.href}>{itemWork.hrefText}</Link>
                        ) : ""}
                        
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Works;