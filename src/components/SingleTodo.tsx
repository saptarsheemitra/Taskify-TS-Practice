import React from 'react'
import './styles.css'
import { Todo } from '../model/models'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md";

interface Props {
  todo: Todo
  // key: number;
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  console.log(todos)
  console.log(todo)
  return (
    <form className="todos_single">
      <span className="todos_single--text">{todo.todo}</span>
      <div>
        <span className="icon"><AiFillEdit/></span>
        <span className="icon"><AiFillDelete/></span>
        <span className="icon"><MdDone/></span>
      </div>
    </form>
  )
}

export default SingleTodo
