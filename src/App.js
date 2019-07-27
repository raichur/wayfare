import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/layout/Nav'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
