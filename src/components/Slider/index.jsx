import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img from '../../assets/home/sliderImg.jpg'
import { Link } from 'react-router-dom';


const SliderHome = function() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    const items = [
        {
            img: Img,
            h2: "Инженерные изыскания 1",
            p: "ГК РЭИ — это все виды инженерных взысканий и исследования любой направленности",
            a: "/",
        },
        {
            img: Img,
            h2: "Инженерные изыскания 2",
            p: "ГК РЭИ — это все виды инженерных взысканий и исследования любой направленности",
            a: "/",
        },
        {
            img: Img,
            h2: "Инженерные изыскания 3",
            p: "ГК РЭИ — это все виды инженерных взысканий и исследования любой направленности",
            a: "/",
        },
        {
            img: Img,
            h2: "Инженерные изыскания 4",
            p: "ГК РЭИ — это все виды инженерных взысканий и исследования любой направленности",
            a: "/",
        },
    ]

    return (
        <Slider {...settings} className='slider'>
            
            {items.map((item) => (
                <div className='slider__list'>
                    <img src={item.img} alt="" />
                    <h2>{item.h2}</h2>
                    <p>{item.p}</p>
                    <Link to={item.a}>Перейти</Link>
                </div>
            ))}
        </Slider>
    )
}

export default SliderHome