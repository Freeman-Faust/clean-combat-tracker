import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import NPCStats from './npcStats';

function LoadNPCStats(props)
{
return(
    <div id="npcData">
        {props.npc.map(monst=>{
            return(<NPCStats name={monst.name} DEX_mod={monst.DEX_mod} STR_mod={monst.STR_mod} HP={monst.HP} AC={monst.AC}/>)
        })}
    </div>
)

}

export default LoadNPCStats