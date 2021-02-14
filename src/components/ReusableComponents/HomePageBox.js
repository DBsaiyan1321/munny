import React from "react"; 
import "./HomePageBox.css";

const HomePageBox = ({icon, title, text}) => { 
    return ( 
        <div className="home-page-box">
            <div className="home-page-box__icon">{icon}</div>
            <h1 className="home-page-box__title">{title}</h1>
            <p className="home-page-box__text">{text}</p>
        </div>
    )
};

export default HomePageBox;