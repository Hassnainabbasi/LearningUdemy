import { useState } from "react"

const Todos = () => {
    const [todo, setTodo] = useState([
        {
            text: "todo1",
            id: 1
        },
        {
            text: "todo2",
            id: 2
        },
        {
            text: "todo3",
            id: 3
        },
        {
            text: "todo1",
            id: 1
        },
        {
            text: "todo2",
            id: 2
        },
        {
            text: "todo3",
            id: 3
        },
        {
            text: "todo1",
            id: 1
        },
        {
            text: "todo2",
            id: 2
        },
        {
            text: "todo3",
            id: 3
        },  
    ])
 return(
    <div>
     {todo.map((items)=>{
    return <div key={items.id}>
        <h1>{items.text}</h1>
    </div>
     })}
    </div>
 )
}

export default Todos