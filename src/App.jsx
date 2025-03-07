import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from './routes/RouteList';

function App() {
  return (
    <Router>
      <RouteList />
    </Router>

    // <HomePage/>
  );
}

export default App;
