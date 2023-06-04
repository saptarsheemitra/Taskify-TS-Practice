import React, {useRef} from 'react'
import "./styles.css";


interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent)=> void;
}

const InputFeild:React.FC<Props> = ({todo,setTodo, handleAdd}:Props) => {
  const InputRef = useRef<HTMLInputElement>(null)


  return (
    <form className='input' onSubmit={(e)=> {
      handleAdd(e)
      InputRef.current?.blur();
    }}>

      <input ref={InputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Enter a task' className='input_box'/>
      <button className='input_submit' type='submit'> Go </button>

    </form>
  )
}

export default InputFeild