import App from "../App";
import React from "react";



const NPCStats = function(props)
{

    return(
        <div className="npcStats">
        <header>{props.name}</header>
             <div>{props.DEX_mod}</div>
             <div>{props.STR_mod}</div>
             <div>{props.HP}</div>
             <div>{props.AC}</div>
            </div>
    )
}


export default NPCStats;