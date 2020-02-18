import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routers from './routers';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
