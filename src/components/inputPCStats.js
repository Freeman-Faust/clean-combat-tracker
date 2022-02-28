import App from "../App";
import React from "react";


const InputPCStats = function(props)
{

const onStatsSubmit = (event)=>
{
    event.preventDefault();
    const formData = new FormData(document.getElementById("statsInput"))
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    console.dir(formDataJsonString)

    fetch('http://localhost:3000/PC_Stats', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: formDataJsonString
    })
}

    return(
        <div className="pcStats">
            <form id="statsInput" onSubmit={onStatsSubmit}>
               <description>Name: </description> 
               <input name="name" type="text"></input> 
               <description>AC: </description>
               <input name="AC" type="number"></input> 
               <description>HP: </description>
               <input name="HP" type="number"></input>  
               <description>Str Modifier: </description> 
               <input name="STR_mod" type="number"></input> 
               <description>Dex Modifier: </description> 
               <input name="DEX_mod" type="number"></input> 
               <input name="id" hidden value={props.name}></input>
               <button>Submit</button>
            </form>
        </div>
    )
}

export default InputPCStats;
