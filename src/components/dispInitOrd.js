import React, { useState, useEffect } from 'react';
import InitOrd from './initOrd';

function DispInitOrd(props)
{

    function calcDetInt(dex)
    {
        return(parseInt(dex) + 22);
        //todo: make the actual calculation
        //Math.floor(Math.random()*(max-min+1))+parseInt(dex)
    }
    
    const initList = [];
    for(const comb in props.comb)
    {
        let tmpObj = {};
        tmpObj.name = comb.name;
        tmpObj.detInt = calcDetInt(comb.dex);
        initList.push(tmpObj);
    }

    console.log(initList);

    const sortedInitList = initList.sort((a,b) => a.detInt - b.detInt); // do some work to sort this by detInt 
        
    console.log(sortedInitList);
        
        


   
return(
    <div id="dispInit">
        <button onClick={handleClick}>Calculate Initiative</button>
        <div>
        {props.sortedInitList.map(sortedComb=>{
            return(<InitOrd sortedComb={sortedComb}/>)
        })}
        </div>
    </div>
)
};


export default DispInitOrd