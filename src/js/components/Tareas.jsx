import React, {useState} from 'react'

export default function Tareas (props){
    console.log("hola")
    const contenido = document.getElementById("contenido")
    const [tarea, setTarea] = useState('');
    const p = <p>{props.input}</p>;
    setTarea(tarea + p)
    return ({tarea})
}