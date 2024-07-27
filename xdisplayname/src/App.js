import './App.css';
import React, { useState } from 'react';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setIsSubmited(false);
      if (firstName && lastName) {
        setIsSubmited(true);
        setFullName(`Full Name: ${firstName} ${lastName}`);
      }
  }

  return (
    <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>

          <label htmlFor="">First Name:</label>
          <input type="text" value={firstName} onChange={(e)=>{ setFirstName(e.target.value)}} />
          </div>
          <div>

          <label htmlFor="">Last Name:</label>
          <input type="text" value={lastName} onChange={(e)=>{ setLastName(e.target.value)}} />
          </div>
          <button type="submit" >Submit</button>
        </form>
        {isSubmited && (
        <div>
          <h4>{fullName}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
