import Tareas from "./Tareas.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'

window.onload = ()=>{
    const input = document.getElementById("input");
    const root = ReactDOM.createRoot(document.getElementById("tareas"))
    function hola (e){{
        if(e.key==="Enter"){
        console.log("hasta ac'a todo bn");
        const p = e.target.value
        root.render(<Tareas input={p}  add="true"/>)
        e.target.value = ""
        }
    }
        
    }
    input.addEventListener("keydown",hola)
}