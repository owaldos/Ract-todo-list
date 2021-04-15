import React,{useState,useRef} from 'react'
import '../components/datacollector.css'
import uuid from 'uuid/dist/v4'

const DataCollector = ({handleButtonAdd}) => {
    const [state, setState] = useState(true)
    const input = useRef()

   
  const enter = (e)=>{
    if(e.key==='Enter'&& input.current.value.length > 0)handleClickButton()
  }

    

    const handleInput=(e)=>{
         e.target.value.length ?  setState(false):setState(true)  
       
    }

    const handleClickButton =()=>{
        let object=  { id:uuid(), value:input.current.value,check:false}
        handleButtonAdd(object)
        input.current.value=''
        setState(true)
    } 
      
    return (
        <div  className='containerCollector1'>
            <div className='containerCollector2'>
                <input  id = 'input' ref={input} className='input' type='text'  onChange={handleInput} onKeyPress={enter}></input>
                <button  className='button' disabled={state}  onClick={handleClickButton}>Add</button>
            </div> 
        </div>
       
    )
}

export default DataCollector
