import Tareas from "./Tareas.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'

window.onload = ()=>{
    const input = document.getElementById("input");
    const root = ReactDOM.createRoot(document.getElementById("tareas"))
    const btnClear = document.getElementById("btnClear")

    const borrado = (data)=>{
            const eliminar = document.getElementById(data)
            eliminar.parentNode.removeChild(eliminar)
        }

    function hola (e){{
        if(e.key==="Enter"){
        console.log("hasta ac'a todo bn");
        const p = e.target.value
        root.render(<p>hola</p>)
        root.render(<Tareas input={p} elimination={borrado}/>)
        e.target.value = ""
        }
    }
        
    }
    btnClear.addEventListener("click",()=>{
        root.render(<Tareas clear="true"/>)
    })
    input.addEventListener("keydown",hola)
}