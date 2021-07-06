import React, { useState } from "react";
import './styles.css';

function CustomCard(props) {
  const [title] = useState(props.title);
  
  const  handleClick=(evt)=>{
        alert(evt.target.value);
  }
  return (
      <div className="">
   {props && props.data.map((item,i)=>{
       return(
    <div className="thankYouParent">
    {item.title}
    <input type="button" value={item.button} onClick={handleClick}/>
</div>
       )
   })}
   </div> 
  );
}
export default CustomCard;