import React, {useState, useEffect} from 'react'

export default function Tareas (props){
    const id = props.id
    const [tarea, setTarea] = useState([]);
    useEffect(()=>{
        setTarea(tarea.concat(<p>{props.input}</p>))    
    },[props.input])

    console.log(tarea)
    return (
        <>
            {tarea}
        </>
    )
}