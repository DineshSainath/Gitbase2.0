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

  function handleMouseEnter(e) {
    e.target.style.background = "#FDB26A";
    e.target.style.width= "220px";
    e.target.style.borderRadius="8px";
  }

  return (
    <div className="App">
    <Header mouse={handleMouseEnter} change={getInput} />
    
   {/* render if its a valid username input */}
   {status &&  <div className="card-section">  
      <Box className="cards" name={profile.name} id={profile.id} bio={profile.bio} followers={profile.followers} following={profile.following} createDate={profile.created_at} updateDate={profile.updated_at} repos={profile.public_repos} avatar={profile.avatar_url}/>
    </div>}
    
    </div>
  );
}

export default App;
