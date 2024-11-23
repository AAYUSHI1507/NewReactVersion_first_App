import React,{useState,useEffect, useRef} from 'react'
import './App.css';
import './index.css';

function App() {
  //States
  const [Count, setCount] = useState(0);
  const [Hidebtn, setHidebtn] = useState(true);
  const [Todos, setTodos] = useState([
    {
      "title": "This is first Todo",
      "Desc" : "This is the first todo Description"
    },
    { 
      "title": "This is Second Todo",
      "Desc" : "This is the Second todo Description"
    },
    {
      "title": "This is third Todo",
      "Desc" : "This is the third todo Description"
    }]
  );
  const Todos1 = ({todos2}) =>{
    return(
      <>
      <div className=' boxtodo border-solid border-2 border-indigo-600'>
      <h4 className='todo'> {todos2.title}</h4>
      <p className='todo'>{todos2.Desc}</p>
      </div>
      </>
    )
  }
  //Functions
  const HandAddCount = () => {
    setCount(Count+1);
    if(Hidebtn == true){
      btnref.current.style.display = "none";
      setHidebtn(false);
    }else{
      btnref.current.style.display = "block";
      setHidebtn(true);
    }
    }
    let a = useRef(0);
    let btnref = useRef();

    useEffect(() => {
      a.current = a.current+1;
      console.log(`The component is rerendering... ${a.current}`);
    });
  return (
    <div>
      <button  type="button" onClick={HandAddCount}>Count  {Count}</button>

      {Todos.map(todos2=>{
        return <Todos1 key={todos2.title} todos2 = {todos2} />
      })}

      <button ref={btnref}>Show/Hide  Button</button>

    </div>
  )
}

export default App
