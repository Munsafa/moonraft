import './App.css';
import data from "./data"
// import axios from "axios"
// import { useEffect, useState } from 'react';
function App() {
  // const [posts, setposts] = useState([])
  // useEffect(()=>{
  //   axios.get("https://jsonkeeper.com/b/07NH").then((res) => {
  //     setposts(res.data);
  //     console.table(res);
  //   });
  // },[])
  console.table(data)
  return (
    <>
        {
          data.map((o)=>(
            <div className="container" key={o.id}>

            <div className="inner-container">
              <div>
              <span><strong>ID: </strong>{o.id}</span>
                <span><strong>Name: </strong>{o.name}</span>
                <span><strong>Email: </strong>{o.emailId}</span>
              </div>
              <div>

                <span><strong>Joining Date: </strong>{o.joiningDate}</span>
                <span><strong>location: </strong>{o.location}</span>
                <span><strong>Department: </strong>{o.department}</span>
              </div>
            </div>
              <p><strong>About: </strong>{o.aboutMe}</p>
        </div>
          ))
        }
    </>
  );
}

export default App;
