import Tareas from "./Tareas.jsx"
import React from 'react'
import ReactDOM from 'react-dom/client'

window.onload = ()=>{
    const input = document.getElementById("input");
    const root = ReactDOM.createRoot(document.getElementById("tareas"))
  /*  function elimination2 (id){
        const eliminar = document.getElementById(data)
        eliminar.parentNode.removeChild(eliminar) 
    }*/
    function hola (e){{
        if(e.key==="Enter"){
        console.log("hasta ac'a todo bn");
        const p = e.target.value
        root.render(<p>hola</p>)
        root.render(<Tareas input={p} elimination={(data)=>{
            const eliminar = document.getElementById(data)
            eliminar.parentNode.removeChild(eliminar)
        }}/>)
        e.target.value = ""
   //     const button = document.getElementsByClassName("btn-close")
     //   button.addEventListener('click')
        }
    }
        
    }
    input.addEventListener("keydown",hola)
}