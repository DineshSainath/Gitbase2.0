import React from "react";
import "./Box.css"
import {Card} from "react-bootstrap";

function Box(props){

    return(<div className="Box">

    <Card className="Card" bg="Dark">
        <Card.Img className="CardImg" variant="top" src={props.avatar} />
        <Card.Body>
            <Card.Title>
                {props.name}
            </Card.Title>
        </Card.Body>
    </Card>
    </div>)

}

export default Box;