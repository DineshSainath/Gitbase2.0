import React from "react";
import "./Box.css"

function Box(props){

    return(<div className="Box flex-container">

    <div className="ImgBox">
        <img className="CardImg" src={props.avatar} alt="user img" />
        <span className="name">{props.name}</span>
    </div>

    <p>{props.bio}</p>

    <table class="info table">
    <tr>
        <td className="head">Id:</td>
        <td>{props.id}</td>
    </tr>
    <tr>
        <td className="head">Followers: </td>
        <td>{props.followers}</td>
    </tr>
    <tr>
        <td className="head">Following: </td>
        <td>{props.following}</td>
    </tr>
    <tr>
        <td className="head">Created: </td>
        <td>{props.createDate}</td>
    </tr>
    <tr>
        <td className="head">Updated: </td>
        <td>{props.updateDate}</td>
    </tr>
    </table>

    

    
</div>)

}

export default Box;



  

    