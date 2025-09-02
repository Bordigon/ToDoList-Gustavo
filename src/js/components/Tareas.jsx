import React, {useState, useEffect} from 'react'

export default function Tareas (props){
    const [tarea, setTarea] = useState([]);
    const clear = props.clear
    useEffect(()=>{
        if(clear==="true")
            setTarea([])
        else if(props.input!=="")
        setTarea(tarea.concat(props.input))
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
    
    if(clear=="true"){
        return (<><div className="d-flex align-items-left mx-2">u are free</div></>)
    }

    else{
    return (
        <>
            {tareasEnHtml}
            <div className="d-flex align-items-left mx-2">{tarea.length} tasks left</div>
        </>
    )}
}