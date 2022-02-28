import React from "react";



const InitOrd = function(props)
{
    return(
        <div className="initOrd">
        <header>{props.sortedComb.name}</header>
             <div>{props.sortedComb.detInt}</div>
            </div>
    )
}

export default InitOrd;

