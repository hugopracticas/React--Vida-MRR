import { useState } from "react"

export const TodoList = () => {

    const [task, setTask] = useState('')
    const [repeat, setRepeat] = useState(false)
    const [taskList, setTaskList] = useState([])

    const handleChangeValue = (e) => {
       const value = e.target.value
       setTask(value)
    }

    const handleonSubmit = (e) => {
        e.preventDefault()
        const repeatTask = taskList.filter((tarea) => tarea === task)
        console.log(repeatTask.length);
        if(repeatTask.length === 1){
            setRepeat(true)
        }
        setTaskList([...taskList, task])
    }

    

    return (
        <div>
            <form onSubmit={handleonSubmit}>
                <input type="text" onChange={handleChangeValue} />
                <input type="button" value='New Task' onClick={handleonSubmit}/>
            </form>
            <div>
                {repeat ? 'ya tienes esta tarea' : 'puedes continuar' }
            </div>
        </div>
    )
}