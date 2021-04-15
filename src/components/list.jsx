import React from 'react'
import './list.css'

const List = ({state,  deleteTask, handleCheckbox}) => {
 
   
   
    return (
        <div className='listContainer'>
            <div  className='list' >
                {state.map((item)=>
                    <div  className='taskBorder' key={item.id}>  
                        <input  className='checkbox' type='checkbox' id={item.id} onChange={handleCheckbox}/>
                        <label  className='label' for={item.id}>{item.value}</label> 
                        
                    </div>
                )}
            </div>
           {state.length ? <button className='btn' onClick={deleteTask}>Delete all done</button>:  <p className='p'>No task</p> }

            
        </div>
    )
}

export default List
