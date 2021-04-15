import React,{useState}from 'react'
import './App.css'
import  DataCollector from './components/datacollector.jsx'
import List from './components/list.jsx'



function App() {
  const [state, setState] = useState([])

  const handleButtonAdd = (inputValue)=>{
    setState([...state,inputValue])
  }

 
  const handleCheckbox =(e)=>{
     
    let newState = state.map((item)=>{
      return item.id === e.target.id ?{...item,check:e.target.checked}:item;
    })

    setState(newState)
        
  }
    
    

  const deleteTask =()=>{
    let newState= state.filter((item)=>item.check===false)
    setState(newState) 
  }


  
  return (
    <div className = 'container'>
      <DataCollector handleButtonAdd={handleButtonAdd} />
      <List state={state} deleteTask={deleteTask} handleCheckbox={handleCheckbox}/>
    </div>
   
  );
}

export default App;
