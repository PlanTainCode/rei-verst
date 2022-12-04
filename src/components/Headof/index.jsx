import React from 'react'
import { Link } from 'react-router-dom';


const Headof = ({pic, title, pretitle, prehref}) => {
  return (
    <div className="headof">
        <div className="headof__pic">
            <img src={pic} alt="" />
        </div>
        <div className="headof__container">
            <h1>{title}</h1>
            <div className="headof__container--breadcrumbs">
                <li>
                    <Link href="/">Главная</Link>
                </li>
                {pretitle ? (
                    <li>
                        <span></span>
                        <Link href={prehref}>{pretitle}</Link>
                    </li>
                ) : ''}
                {title ? (
                    <li>
                        <span></span>
                        <p>{title}</p>
                    </li>
                ) : ''}
            </div>
        </div>
    </div>
  )
}

export default Headof;