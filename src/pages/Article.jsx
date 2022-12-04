import React from "react";
import Pic from '../assets/home/News/1.jpg'

const Article = () => {

    const title = "Группе компаний РЭИ исполнилось 27 лет !"
    const date = "31.01.2022"


    return (
        <div className="article">
            <div className="article__container">
                <div className="article__container--pic">
                    <img src={Pic} alt="" />
                </div>
                <div className="article__container--title">
                    <h1>{title}</h1>
                    {/* <span>{date}</span> */}
                </div>
                
                
                <article>
                    <h2>Заголовок H2</h2>
                    <h3>Заголовок H3</h3>
                    <h4>Заголовок H4</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi cumque sit hic placeat quas ex corrupti, dolor magni veniam modi ad voluptates itaque magnam repellat laborum beatae minus suscipit!</p>
                    <a href="/">Ссылка <span></span></a>
                </article>
            </div>
        </div>
    )
}

export default Article;