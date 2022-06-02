import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const Todolist=(props)=>{
    const {id, onSelect, text, onChecked} = props;

   
    return(
        <>
        <div className="todo">
            <i className="fa fa-times"
             aria-hidden="true" 
             onClick={()=>{onSelect(id);
             }} />
             <i className="fa fa-check"
             aria-hidden="true" 
             onClick={()=>{onChecked(id);
             }} /><li>{text}</li>
        </div>        

        </>
    )
};

export default Todolist;