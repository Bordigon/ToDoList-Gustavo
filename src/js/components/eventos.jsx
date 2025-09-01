import Tareas from "./Tareas.jsx"
import React from 'react'

window.onload = ()=>{
    const input = document.getElementById("input");
    const contenido = document.getElementById("contenido")
    const p = document.createElement("p")
    function hola (e){{
        if(e.key==="Enter"){
        console.log("hasta ac'a todo bn");
        p.innerHTML = e.target.value
        //contenido.appendChild(Tareas(e.target.value))
        contenido.appendChild(p)
        }
    }
        
    }
    input.addEventListener("keydown",hola)
}