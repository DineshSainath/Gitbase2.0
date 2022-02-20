import {React, useState, useEffect} from 'react';
import './App.css';
import Header from './Header.jsx';
import Box from "./Box.jsx";
import Box2 from './Box2';

function App() {
  
  const [username, setUsername] = useState('');
  const [status,setStatus] = useState(false);
  const [profile, setProfile] = useState(null);
  const [repos,setRepos] = useState(null);
  const [repoStatus,setRepoStatus] = useState(false);
  
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
        let res = await fetch(data.repos_url);
        let repoData = await res.json();
        setRepos(repoData);
        // console.log(repoData);
        setRepoStatus(true);
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

      <Box className="cards" name={profile.name} id={profile.id} bio={profile.bio} followers={profile.followers} following={profile.following} createDate={profile.created_at} updateDate={profile.updated_at} repos={profile.public_repos} reposUrl={profile.repos_url} avatar={profile.avatar_url}/>

    {/* condition to check if repos are present */}
      {repoStatus && 
      <Box2 data={repos} count={profile.public_repos} name={repos.name} lang={repos.language} id={repos.id} desc={repos.description} url={repos.html_url} created={repos.created_at} updated={repos.updated_at}/>
    }

    </div>
    }
    
    
    </div>
  );
}

export default App;
