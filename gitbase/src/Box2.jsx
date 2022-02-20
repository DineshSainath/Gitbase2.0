import React from "react";
import "./Box2.css";
import Card from "./Card";

function Box2(props){

    function mapData(repos){
        repos.map((e) => {

            return(<div>
                <p>ommala dei</p>
                <br/>
            </div>)

        });
    }

    var repos = props.data;

    return (
    <div className="Box2">
        <p className="boxHeading"> Repositories </p>
        
        <div className="repoBox flex-container" >

        { repos.map((e)=> {
            return(<div className="card"> 
                <p> {e.name} </p>
            </div> )
        }) }

        </div>


    </div>)

}

export default Box2;