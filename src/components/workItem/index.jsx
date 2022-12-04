import React from 'react'


const WorkItem = ({shur, pic, h3, p}) => {

    const [tooglePopup, setTooglePopup] = React.useState(false)

    React.useEffect(() => {
        if (tooglePopup) {
            document.querySelector("body").classList.add("body--overlay")
        } else {
            document.querySelector("body").classList.remove("body--overlay")
        }
    })
    return (
    <>
        <div className="works__items--item" onClick={() => setTooglePopup(true)}>
            <div className="works__items--shur">
                <img src={shur} alt="" />
            </div>
            <img src={pic} alt="" />
            <h3>{h3}</h3>
        </div>
        <div className={tooglePopup ? "work-popup active" : "work-popup"}>
            <div className={tooglePopup ? "work-popup__area active" : "work-popup__area"}></div>
            <div className="work-popup__body">
                <div className="work-popup__body--close" onClick={() => setTooglePopup(false)}>
                    <span></span>
                    <span></span>
                </div>
                <div className="work-popup__body--container">
                    <div className="work-popup__body--shur-1">
                        <img src={shur} alt="" />
                    </div>
                    <div className="work-popup__body--shur-2">
                        <img src={shur} alt="" />
                    </div>
                    <h2>{h3}</h2>
                    <p>{p}</p>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default WorkItem