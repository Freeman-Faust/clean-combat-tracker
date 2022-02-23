import React from "react";

function rollInit(min, max, dex, name){
    const initList = [];
    let detInt = Math.floor(Math.random()*(max-min+1))+parseInt(dex);
    initList.push(name, detInt);
    initList.sort((a,b) => a.detInt - b.detInt);
    return initList;
    // return the result you want
    //I want an array sorted by highest init
}

const InitOrd = function(props)
{
    const finalListOfValues = rollInit(1,20, props.DEX_mod, props.name)

    return(
        <div className="initOrd">
        <header>Initiative Order</header>
             <div>{finalListOfValues.name}</div>
             <div>{finalListOfValues.detInt}</div>
            </div>
    )
}
export default InitOrd;

