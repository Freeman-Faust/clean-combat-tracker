import React from "react";



const PCStats = function(props)
{

    return(
        <div className="pcStats">
        <header>{props.name}</header>
             <div>{props.DEX_mod}</div>
             <div>{props.STR_mod}</div>
             <div>{props.HP}</div>
             <div>{props.AC}</div>
            </div>
    )
}


export default PCStats;