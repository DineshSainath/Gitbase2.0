import {React, useState, useEffect} from 'react';
import './App.css';
import Header from './Header.jsx';
import Box from "./Box.jsx";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


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
    e.target.style.background = "black";
    e.target.style.width= "350px";
    e.target.style.borderRadius="10px";
  }

  return (
    <div className="App">
    <Header/>
    <div className="searchBox" onMouseOver={handleMouseEnter}>
    <form className='search'>
    <input type="search" className="input" placeholder="      Search by user " onChange={getInput}/>
    <FontAwesomeIcon className='mGlass' icon={faSearch} />
    </form>
    </div>

    <i class="fas fa-search"></i>

   {/* render if its a valid username input */}
   {status &&  <div className="card-section">  
      <Box className="cards" name={profile.name} repos={profile.public_repos} avatar={profile.avatar_url}/>
    </div>}
    
    </div>
  );
}

export default App;
