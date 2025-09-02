import React, {useState, useEffect} from 'react'

export default function Tareas (props){
    const [key, setKey] = useState(0)
    const [tarea, setTarea] = useState([]);
    const clear = props.clear
    useEffect(()=>{
        setTarea(tarea.concat(props.input))
        setKey(key+1)   
    },[props.input])

    const tareasEnHtml = tarea.map((task)=>{
            var counter = tarea.indexOf(task)
            const btnKey = `btn${counter}`;
            const liKey = `li${counter}`;
            return (
            <li id={liKey} className="list-group-item">{task}
                <button id={btnKey} className="btn-close float-end" onClick={(e)=>props.elimination(e.target.parentNode.id)}></button>
            </li>
                )
        
    })

    console.log(tarea)
    
    if(clear==="true"){
        setTarea([])
        return (<></>)
    }

    else{
    return (
        <>
            {tareasEnHtml}
        </>
    )}
}