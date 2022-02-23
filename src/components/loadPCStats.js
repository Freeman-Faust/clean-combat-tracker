import React, { useState, useEffect } from 'react';
import PCStats from "./pcStats";

function LoadPCStats(props)
{
return(
    <div id="pcData">
        {props.pc.map(char=>{
            return(<PCStats name={char.name} DEX_mod={char.DEX_mod} STR_mod={char.STR_mod} HP={char.HP} AC={char.AC}/>)
        })}
    </div>
)
};

export default LoadPCStats;