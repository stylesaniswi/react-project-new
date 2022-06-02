import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [inputList, setInputList]= useState("");
  const [items, setItems] = useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const listOfItems=(e)=>{
    if(!inputList){
      alert("enter the task!!");
      return;
    }
    setItems((oldItems)=>{
    
      return [...oldItems, inputList];
      
    })
    setInputList("");
  };

  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !==id;
      });
    });
   
};

const doneItems=(id)=>{
  document.getElementsByTagName('li')[id].classList.add('checked');
}

const apiCall=()=>{
  fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(
        (result) => {
          setItems((oldItems)=>{
            return [...oldItems, result.type]
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert(error);
        }
      )
}

  return (
    <div className="main">
      <div className="container">
        <br />
        <h2> Todays task!!</h2>
        <br />
        <input type='text' placeholder='write the task' value={inputList} onChange={itemEvent} />
      <button onClick={listOfItems}>add</button>
      <button onClick={apiCall}>API call</button>
      <ul>
        {items.map((itemval, index)=>{
          return <Todolist
          text={itemval}
          key={index}
          id={index}
          onSelect={deleteItems}
          onChecked={doneItems}
           />
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
