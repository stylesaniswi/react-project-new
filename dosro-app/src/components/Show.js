import { React, useState } from "react";

function Show(){
    const [items, setItems] = useState([]);
    const [age, setAge]= useState(0);
  

  
  
  
  const apiData  =()=>{

    fetch(`https://jsonplaceholder.typicode.com/posts/${age}`)
    .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          setItems((oldItems)=>{
            return [...oldItems, result.title, result.body, result.userId]
          });
        },
        
        (error) => {
          alert(error);
        }
      )
  };
    return (
      <div className="main">
        <div className="container">
          <br />
          <h2> Added Datas!!</h2>
          <br />
          <input type='number' placeholder='age' onChange={(event)=>{
            setAge(event.target.value);
          }}  />
        <button onClick={apiData}>Show API Data</button>
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

export default Show;