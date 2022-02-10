import React from "react";
import "./Card.css"

function Card(props){

    return(<div className="card">

    <img src={props.avatar} alt="avatar" />

    </div>)

}

export default Card;