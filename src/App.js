import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import DiceRoll from './components/diceRoll';
import LoadNPCStats from './components/loadNPCStats';
import LoadPCStats from './components/loadPCStats';
import InputPCStats from './components/inputPCStats';
import DispInitOrd from './components/dispInitOrd';

function App() {

const [data,setData] = useState([{}]);
const [data2,setData2] = useState([{}]);
const [comb,setComb] = useState([{}]);

useEffect(()=>
{
fetch('http://localhost:3001/db').then(x=>x.json()).then(x=>setData(x.NPC_Monst))
},[]);

useEffect(()=>
{
fetch('http://localhost:3001/db').then(x=>x.json()).then(x=>setData2(x.PC_Stats))
},[]);

useEffect(()=>
{
fetch('http://localhost:3001/db').then(x=>x.json()).then(x=>setComb([...x.PC_Stats, ...x.NPC_Monst]))
},[]);

//setComb([x.PC_Stats, x.NPC_Monst])
  return (
    <div className="App">
      <header className="App-header"> 
      Combat Tracker
      </header>
      <LoadNPCStats npc={data}/>
      <LoadPCStats pc={data2}/>
      <DiceRoll/>
      <InputPCStats/>
      <DispInitOrd comb={comb}/>
    </div>
  );
}

export default App;
