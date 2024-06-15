import React from 'react';
import './App.css';
import MyNavbar from './features/navbar/Navbar';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <AppRouter/>
    </div>
  );
}

export default App;
