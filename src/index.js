import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Home from "./pages/Home"
import About from "./pages/About"
import Snacks from "./pages/Snacks"
import SnackDetail from "./pages/SnackDetail"
import logoImg from "./assets/images/mami-nickz-logo.png"
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to="/"><img src={logoImg} alt="Mami Nickz Logo" /></Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/snacks">Snacks</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/snacks' element={<Snacks />} />
        <Route path='/snacks/:id' element={<SnackDetail />} />
      </Routes>
    </BrowserRouter>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
