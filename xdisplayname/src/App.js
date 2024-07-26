import './App.css';
import React, { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) =>{
      e.preventDefault();
      setFullName(`Full Name: ${firstName} ${lastName}`);
  }

  return (
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>

          <label htmlFor="">First Name:</label>
          <input type="text" value={firstName} onChange={(e)=>{ setFirstName(e.target.value)}} required/>
          </div>
          <div>

          <label htmlFor="">Last Name:</label>
          <input type="text" value={lastName} onChange={(e)=>{ setLastName(e.target.value)}} required/>
          </div>
          <button type="submit" >Submit</button>
        </form>
        <h5 >{fullName}</h5>
    </div>
  );
}

export default App;
