import React from "react";



const InitOrd = function(props)
{
    return(
        <div className="initOrd">
        <header>Initiative Order</header>
             <div>{props.sortedComb.name}</div>
             <div>{props.sortedComb.detInt}</div>
            </div>
    )
}

export default InitOrd;

