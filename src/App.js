import './App.css';
import {useEffect, useState} from "react";

const App =()=> {
  const [users, setUsers]=useState(null);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users)=>{
          setUsers(users);
        })
        .finally(()=>{
          console.log('Promise Finished')
            }
        );
  },[]);
  return (
    <div className="App">
      <h1>{users}</h1>
    </div>
  );
}

export default App;
