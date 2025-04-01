// src/App.jsx
import React from 'react';
import Navbar from './Components/navbar/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        {/* Other sections can go here */}
      </div>
    </div>
  );
};

export default App;