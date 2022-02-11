import {React, useState, useEffect} from 'react';
import './App.css';
import Header from './Header.jsx';
import Box from "./Box.jsx";

function App() {
  
  const [username, setUsername] = useState('');
  const [status,setStatus] = useState(false);
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {

    getData();
    async function getData(){
      let response = await fetch(`https://api.github.com/users/${username}`);
      if(!response.ok){
        setStatus(false);
        console.log(response.status, response.statusText);
      } else {
        let data = await response.json();
        setProfile(data);
        setStatus(true);
      }
    }

  },[username]);

  function getInput(event){
    setUsername(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="App">
    <Header/>
    <input type="search" className="search" placeholder="Search by user " onChange={getInput} />
   
   {/* render if its a valid username input */}
   {status &&  <div className="card-section">  
      <Box name={profile.name} repos={profile.public_repos} avatar={profile.avatar_url}/>
    </div>}
    
    </div>
  );
}

export default App;
