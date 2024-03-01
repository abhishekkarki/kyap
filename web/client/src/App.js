import React, { useState } from 'react';
import './App.css'; // Make sure this line is here to import your CSS styles

function App() {
  const [inputText, setInputText] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSubmit = () => {
    // Make sure the port number matches your backend server's port
    fetch('http://localhost:3000/api/print', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.log('Error:', error));
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          className="App-input" // Add this line if you have specific styles for input
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your message" // Optional: adds a placeholder text
        />
        <button className="App-button" onClick={handleSubmit}>Send to Backend</button> {/* Add this line if you have specific styles for button */}
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
