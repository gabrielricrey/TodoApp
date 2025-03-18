import { useState, useContext } from "react"
import { TodosContext } from "../context/TodosContext"
import { Link } from "react-router-dom"
import CreateTodo from "../components/CreateTodo";
import Todo from "./Todo"
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";

let TodosList = () => {

    let { todos, setTodos } = useContext(TodosContext)
    let [showCreate, setShowCreate] = useState(false);

    const getTodoPos = id => todos.findIndex(todo => todo.id === id)
    
    const handleDragEnd = event => {
        const {active,over} = event
    
        if(active.id === over.id) return;
    
        setTodos(todos => {
            const originalPos = getTodoPos(active.id)
            const newPos = getTodoPos(over.id)
    
            return arrayMove(todos,originalPos,newPos)
        })
    }

    return (
        <>
            <div className="top">
                <h2 id="header">Todos</h2>
            </div>
            <div className="bottom">
                <button id="create-btn" onClick={() => { setShowCreate(true) }}>+</button>
            </div>



            {
                showCreate && <CreateTodo setShowCreate={setShowCreate} />
            }
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <ul className="todo-list">
                <SortableContext items={todos} strategy={verticalListSortingStrategy}>

                    {
                        todos.map((todo, i) => <Todo title={todo.title} id={todo.id} done={todo.done} index={i} setShowCreate={setShowCreate} key={todo.id} />)
                    }
                </SortableContext>
            </ul>
            </DndContext>



        </>
    )
}

export default TodosList