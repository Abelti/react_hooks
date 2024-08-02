import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import StateComponent from './components/StateComponent';
import EffectComponent from './components/EffectComponent';
import CallbackComponent from './components/CallbackComponent';
import MemoComponent from './components/MemoComponent';
import IdComponent from './components/IdComponent';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/state">State</Link></li>
            <li><Link to="/effect">Effect</Link></li>
            <li><Link to="/callback">Callback</Link></li>
            <li><Link to="/memo">Memo</Link></li>
            <li><Link to="/id">Id</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/state" element={<StateComponent />} />
        <Route path="/effect" element={<EffectComponent />} />
        <Route path="/callback" element={<CallbackComponent />} />
        <Route path="/memo" element={<MemoComponent />} />
        <Route path="/id" element={<IdComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
