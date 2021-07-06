import react,{useState} from 'react';
const active={'color':'yellow'};
const active1={'color':'black'};


const App = () => {
  const[largest,setLargest] = useState();
const[arr,setArr]= useState([]);
const[num,setNum]=useState();
const handleChange=(evt)=>{
  setNum(evt.target.value);
}
const handleAdd=()=>{
  if(num!=''){
  setArr([...arr, num]);
  setNum('');
  }
}
const handleSecondHighest=()=>{
  let max = 0, secondMax = 0;
  arr.forEach((item) => {
    if (item > max) {
        secondMax = max;
        max = item;
    } else if (item != max && item > secondMax) secondMax = item;
  });
  //return secondMax;
  setLargest(secondMax);
  console.log(secondMax);
  console.log(largest);
  //return secondLargest
}
return(
  <div>
    <input type="text" onChange={handleChange} value={num}/>
    <input type="button" value="Add" onClick={handleAdd}/>
    <input type="button" value="Find Second Highest" onClick={handleSecondHighest}/><br></br>
    Show List : <ul>
      {arr && arr.map((item,i)=>{
        return(
          

          <li  style={item===largest?active:active1}>{item}</li>
        )
      })}
    </ul>

  </div>
)

    }
    export default App;