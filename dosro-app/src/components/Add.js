import { React, useState } from "react";


function Add(){
    const [name, setName]= useState("");
    const [items, setItems] = useState([]);
    const [age, setAge]= useState(0);
    const [address, setAddress] = useState();
  
 
    const listOfItems=(e)=>{
      setItems((oldItems)=>{
      
        return [...oldItems, name, age,address];
        
      })
    };
  
  
  
  const apiCall=()=>{

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: name,
    body: address,
    id: age,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(() => {console.log("success")},
  (error) => {
    alert(error);
  }
  
  );
  }
    return (
      <div className="main">
        <div className="container">
          <br />
          <h2> Todays task!!</h2>
          <br />
          <input type='text' placeholder='name' 
          onChange={(event)=>{
            setName(event.target.value);
          }} /> 
          <input type='number' placeholder='age' onChange={(event)=>{
            setAge(event.target.value);
          }}  />
          <input type='text' placeholder='address' onChange={(event)=>{
            setAddress(event.target.value);
          }}  /><br/>
        
        <button onClick={listOfItems}>add</button>
        <button onClick={apiCall}>API Add</button>
        <ul>
          {items.map((itemval)=>{
            return (
                <li>{itemval}</li>
                )
          })}
        </ul>
        </div>
      </div>
    );
}

export default Add;