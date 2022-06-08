import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import { add,AddNumber,AddSub,AddMul,AddDivide,sub} from './Store/action';
import {v4 as uuid} from 'uuid'
function App() {
  const [Value, setValue] = useState()
  
  const handleAdd=()=>{
    const payload={
      Value,
      count,
      id:uuid
    };
    const Addaction=AddNumber(payload)
   
    dispatch(Addaction)
  }


  const handleSub=()=>{
    const payload={
      Value,
      count,
      id:uuid
    };
    const Addaction=AddSub(payload)
   
    dispatch(Addaction)
  }

  const handleMul=()=>{
    const payload={
      Value,
      count,
      id:uuid
    };
    const Addaction=AddMul(payload)
   
    dispatch(Addaction)
  }

  const handleDivide=()=>{
    const payload={
      Value,
      count,
      id:uuid
    };
    const Addaction=AddDivide(payload)
   
    dispatch(Addaction)
  }


  
  
 
  const dispatch=useDispatch()

  const count=useSelector((state)=>state.count);
  return (
    <div className="App">
     <h1>Counter:{count}</h1>
     <div>
       <button onClick={()=>dispatch(add())}>+</button>
       <button onClick={()=>dispatch(sub())}>-</button>
     </div>
     <div>
      
     <div>
       <input onChange={(e)=>setValue(e.target.value)} type='number'/>
       
       <button onClick={handleAdd} >Add</button>
       <button onClick={handleSub} >Sub</button>
       <button onClick={handleMul} >Mul</button>
       <button onClick={handleDivide} >Div</button>

     </div>
     </div>
    </div>
  );
}

export default App;
