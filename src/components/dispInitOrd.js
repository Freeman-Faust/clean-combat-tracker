import React, { useState, useEffect } from 'react';
import InitOrd from './initOrd';

function DispInitOrd(props)
{
   
return(
    <div id="dispInit">
        <button onClick={InitOrd}>Calculate Initiative</button>
        <div>
        {props.comb.map(comb=>{
            return(<InitOrd name={comb.name} DEX_mod={comb.DEX_mod}/>)
        })}
        </div>
    </div>
)
};


export default DispInitOrd