import React from 'react'
import './Task.css'

const Task =(props)=>{



 return (


<div  >
 
 <ul className="list-group">
  <li className="list-group-item"> 
  <span>  {props.task}  </span> 
  <span className="btn btn-success"
   onClick={props.clicked} style={{  float:"right"}}>Done!</span>
  <span style={{fontWeight:"bold" ,margin :"5px",float:"right"}}>  {props.time} </span>
    </li> 
  
 </ul>

</div> 


 )

}

export default Task;