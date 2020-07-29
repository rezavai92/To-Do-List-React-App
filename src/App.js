import React, {Component} from 'react';

import './App.css';

import Task from './Task/Task.js'

class  App extends Component {

state ={
  tasks: [],
}


clearAllHandler = ()=>{

  let tasks =[...this.state.tasks];

  tasks.splice(0,tasks.length);
  this.setState({tasks:tasks});
} 
 deleteHandler =(index)=>{
  
let stateOfTask =[...this.state.tasks];

  stateOfTask.splice(index,1);
  this.setState({tasks:stateOfTask});
 }

 taskHandler=()=>{
  
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
  let tasklist = [...this.state.tasks];

  




  tasklist.push({task:task,start:time});
  this.setState ( {tasks: tasklist});
}

 }

render() {

const buttonStyle ={
  backgroundColor : "#ede9dd",
  width: "10%",
  height:"40px",

}

const inputStyle ={
  
  //border: "1px solid black",
  borderRadius: "0",
  width :"45%",
  padding: "10px",
  marginBottom : "20px",
  
  fontSize: "16px",
}

const tasks =( <div className="jumbotron"> 
{

   this.state.tasks.length>0     ?     
this.state.tasks.map((task,index) => {

    return (<Task key={index} clicked={this.deleteHandler.bind(this,index)} task={task.task} time={task.start} />  )

    })  : null  }

</div>  );


 return (<div className="container" >
      
       <div class="App"  > 
       <h1 >My To Do List</h1> 
      <input style={inputStyle}  id="task" type="text" placeHolder="Title..."  />
      <input id ="date" type="time"></input>
      <button  className="btn btn-primary" onClick={this.taskHandler} >Add</button>
      </div>
       {tasks}
      <div class="App"><button onClick={this.clearAllHandler} className="btn btn-danger"> Clear All</button> </div>
      </div> 
  
 )
}
}


export default App;
