import react ,{useState} from 'react';
import "./styles.css";
import { useDispatch } from "react-redux";
import  { actionCreators } from "./action.js";
const App=()=>{


const player=
  [
  "Batman"
  
  ,"Bowler","Wicket Player","All Rounder"
  ];

  const[gamer,setGamer]=useState('');
  const[chooseGame,setChooseGame]=useState('');
  const[playerList,setPlayerList]=useState(player);
const handleChange=(evt)=>{
  setGamer(evt.target.value);
    
}
const handlePlayer=(evt)=>{
  setChooseGame(evt.target.value);
}
const handleClick=()=>{
  
  dispatch(actionCreators.addToList(setGamer));


}


  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <form>
      <input type="textbox" onChange={handleChange} value={gamer}/>
      <span><select onChange={handlePlayer}>
        <option value="">Select Option</option>
        {player && player.map((item,i)=>{
          return(
            <option key={i}>{item}</option>
          )
        })}
        </select></span>
        <input type="checkbox" value="6"/>Captain?
        <input type="button" value="Add Button" onClick={handleClick}/>
      </form>
      </div>
        {playerList && playerList.map((item,i)=>{
          return(
            <div className="thankYouParent">
              {item}


              </div>
          )
        })

        }
      </div>
  );
}
export default App;
