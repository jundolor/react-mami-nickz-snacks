import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Home from "./pages/Home"
import About from "./pages/About"
import Snacks from "./pages/Snacks"
import SnackDetail from "./pages/SnackDetail"
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./server"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/snacks' element={<Snacks />} />
        <Route path='/snacks/:id' element={<SnackDetail />} />
        </Route>
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
