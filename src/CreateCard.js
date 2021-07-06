import react from 'react';
import CustomCard from './CustomCard.js';
import 

const App=()=>{
    const data = [
        {
          id: "1",
          title: "One",
          button: "First Button",

        },
        {
          id: "2",
          title: "Two",
          button: "Second Button",
        },
        {
          id: "3",
          title: "Three",
          button: "Third Button",
        },
        
      ];
      return(
          <div>
              <CustomCard data={data}/>
          </div>
      )
}
export default App;