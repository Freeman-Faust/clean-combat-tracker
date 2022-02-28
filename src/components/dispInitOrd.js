import React, { useState, useEffect } from 'react';
import InitOrd from './initOrd';

function DispInitOrd(props)
{
    function calcInt(min, max) 
    {   
       let resultVar = Math.floor(Math.random()*(max-min+1));
       return(resultVar);
    }

    function calcDetInt(dex)
    {
        return(dex + calcInt(1,20));
        //todo: make the actual calculation
        
    }
    
    const initList = [];
   
    for(const comb of props.comb)
    {
        let tmpObj = {};
        tmpObj.name = comb.name;
        tmpObj.detInt = calcDetInt(parseInt(comb.DEX_mod));
        initList.push(tmpObj);
    }

    console.dir(initList);

    const sortedInitList = initList.sort((a,b) => b.detInt - a.detInt); 
        
    console.log(sortedInitList);
   
return(
    <div id="dispInit">
        <header>Initiative Order</header>
        {/* <button onClick={}>Calculate Initiative</button> */}
        <div>
        {sortedInitList.map(sortedComb=>{
            return(<InitOrd sortedComb={sortedComb}/>)
        })}
        </div>
    </div>
)
};


export default DispInitOrd