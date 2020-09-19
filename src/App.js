import React, {useState,useEffect} from 'react';

import './App.css';

import Task from './Task/Task.js'



const App =()=>{


  const [tasks,setTasks] = useState([]);
useEffect(()=>{
let t = JSON.parse(localStorage.getItem("tasks"));
if(t){
  setTasks(t);
}
},[]);

 const clearAllHandler = ()=>{

    let myTasks =[...tasks];
  
    myTasks.splice(0,myTasks.length);
    setTasks(myTasks);
    localStorage.clear();
  } 
  const deleteHandler =(index)=>{
    
  let stateOfTask =[...tasks];
  
    stateOfTask.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(stateOfTask));
    setTasks(stateOfTask);
   }
  
  const  taskHandler=()=>{
    
    let task = document.getElementById("task").value;
    let time = document.getElementById("date").value;
  
    const match = /^\s*$/g;
    if ( match.test(task) || match.test(time)) {
      let x = "Please feel up ";
      let check=0;
      if (match.test(task) ){
        x+="some task ";
        check =1;
      }
  
      if (match.test(time) && check){
        x+="and time"
      }
      else if (match.test(time) && !check) {
        x+="some time";
      }
      alert(x);
    } 
    
  else{
    let tasklist = [...tasks];
  
    
  
  
   
  
    tasklist.push({task:task,start:time});

    setTasks(tasklist);
    localStorage.setItem( 'tasks',JSON.stringify(tasklist));

    //this.setState ( {tasks: tasklist});
  }
  
   }
  
   const buttonStyle ={
    backgroundColor : "#ede9dd",
    width: "10%",
    height:"40px",
  
  }
  
  const inputStyle ={
    
    //border: "1px solid black",
    borderRadius: "5%",
    width :"45%",
    height:"12vh",
    padding: "0px",
    marginBottom : "2%",
    
    fontSize: "16px",
  }
  
  const alltasks =( <div className=""> 
  {
  
     tasks.length>0 ?     
     tasks.map((task,index) => {
  
      return (<Task key={index} clicked={()=>{deleteHandler(index)}} task={task.task} time={task.start} />  )
  
      })  : null  }
  
  </div>  );
  
  

  return (<div className="container" >
      
  <div class="App"  > 
  <h1 >My To Do List</h1> 
  
   <div className="flex">
   <input className="form-control" id="task" type="text" placeholder="Title"></input>
  
  <input   className="date" id ="date" type="time"></input>
  <button  className="btn btn-primary" onClick={taskHandler} >Add</button>
   </div>
  
 </div>
  {alltasks}

  {tasks.length>0 ? ( <div class="App">
    <button onClick={clearAllHandler} className="btn btn-danger"> Clear All</button>
     </div>
  ) : null}
</div>

)

}










export default App;
