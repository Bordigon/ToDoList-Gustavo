import React, {useState, useEffect} from 'react'

export default function Tareas (props){
    const [key, setKey] = useState(0)
    const [tarea, setTarea] = useState([]);
    useEffect(()=>{
    //    setTarea(tarea.concat(<div Key={key} key={key}>{props.input}</div>)) 
        setTarea(tarea.concat(props.input))
        setKey(key+1)   
    },[props.input])

    const tareasEnHtml = tarea.map((task)=>{
            return (
            <li id={key} key={key}className="list-group-item">{task}
                <button className="btn-close float-end"></button>
            </li>
                )
        
    })

    console.log(tarea)
    return (
        <>
            {tareasEnHtml}
        </>
    )
}