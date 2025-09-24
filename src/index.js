import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Home from "./pages/Home"
import About from "./pages/About"
import Snacks from "./pages/Snacks/Snacks"
import SnackDetail from "./pages/Snacks/SnackDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostSnacks from './pages/Host/HostSnacks';
import HostSnackDetail from './pages/Host/HostSnackDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import HostSnackInfo from './pages/Host/HostSnackInfo';
import HostSnackPhotos from './pages/Host/HosSnackPhotos';
import HostSnackPricing from './pages/Host/HostSnackPricing';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./server"

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='snacks' element={<Snacks />} />
          <Route path='snacks/:id' element={<SnackDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='snacks' element={<HostSnacks />} />
            <Route path='snacks/:id' element={<HostSnackDetail />}>
              <Route index element={<HostSnackInfo />} />
              <Route path='pricing' element={<HostSnackPricing />} />
              <Route path='photos' element={<HostSnackPhotos />} />
            </Route>
          </Route>
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
