import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Patients from './pages/patients';
import Add from './pages/add';
import Delete from './pages/delete';
import Update from './pages/Update';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/patients/:id" element={<Delete />} />
        <Route path="/patients/edit/:id" element={<Update />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

