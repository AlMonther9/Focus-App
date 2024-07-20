// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Focus from './pages/Focus';
import Tasks from './pages/Tasks';
import GlobalStyles from './styles/GlobalStyles';

const App = () => (
  <Router>
    <GlobalStyles />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/focus">Focus</Link>
      <Link to="/tasks">Tasks</Link>
    </nav>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  </Router>
);

export default App;
