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
        
        <div className="flex-container repoBox" >

        { repos.map((e)=> {
            return(<div className="cards"> 
             {e.name} 
            </div> )
        }) }

        </div>


    </div>)

}

export default Box2;