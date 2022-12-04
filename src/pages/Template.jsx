import React from 'react'
import { Headof, WorkItem } from "../components";
import { Link } from "react-router-dom";

import Pic from '../assets/headof/works.jpg'

import Shur from '../assets/works/shur.png'

import Pic1 from '../assets/works/1.jpg';
import Pic2 from '../assets/works/2.jpg';
import Pic3 from '../assets/works/3.jpg';
import Pic4 from '../assets/works/4.jpg';
import Pic5 from '../assets/works/5.jpg';
import Pic6 from '../assets/works/6.jpg';
import Pic7 from '../assets/works/7.jpg';

const Template = () => {

    const h2 = "Инженерные изыскания"

    const items = [
        {
            h3: "Инженерно-экологические изыскания",
            pic: Pic1,
            p: "",
        },
        {
            h3: "Инженерно-геологические изыскания",
            pic: Pic2,
            p: "",
        },
        {
            h3: "Инженерно-гидрометеорологические изыскания",
            pic: Pic3,
            p: "",
        },
        {
            h3: "Инженерно-геодезические изыскания",
            pic: Pic4,
            p: "",
        },
        {
            h3: "Комплексные инженерные изыскания",
            pic: Pic5,
            p: "",
        },
        {
            h3: "Предварительное обследование объекта",
            pic: Pic6,
            p: "",
        },
        {
            h3: "Обследование объектов при сдаче в эксплуатацию",
            pic: Pic7,
            p: "",
        },
    ]
  return (
    <div className="template">
        <Headof 
            prehref={"/"}
            pretitle={"Услуги и работы"}
            pic={Pic}
            title={"Инженерные изыскания"}
        />
        <div className="works__container">
                <div className="works__block">
                    <h2>{h2}</h2>
                    <div className="works__items">
                        {items.map((item, index) => (
                            <WorkItem h3={item.h3} pic={item.pic} shur={Shur} key={`${item.h3}__${index}`} p={item.p} />
                        ))}
                        
                    </div>
                    
                </div>
            
        </div>
    </div>
  )
}

export default Template;