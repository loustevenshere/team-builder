import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  
  const teamDataStart = {
    name: '',
    email: '',
    role: ''
  };

  const [team, setTeam] = useState(teamDataStart);
    
  const [savedFormInfo, setSavedFormInfo] = useState([]);

  const onInputChange = evt => {
    setTeam({
        ...team,
        [evt.target.name]: evt.target.value,
    })
};

const onSubmit = evt => {
  evt.preventDefault()
   const newData = {
     name: team.name.trim(),
     email: team.email.trim(),
     role: team.role.trimEnd()
    }
     setSavedFormInfo([...savedFormInfo, newData])
     setTeam(teamDataStart);
};

  return (
    <div className="App">
      <Form team={team} change={onInputChange} submit={onSubmit}/>
      <h2>My team members names are: {team.name}</h2>
       <h3>Email is: {team.email}</h3>
       <h4>Roles are: {team.role} </h4>
    </div>
  );
}

export default App;
