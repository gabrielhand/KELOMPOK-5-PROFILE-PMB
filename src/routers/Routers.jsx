import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import Scudetto from '../pages/Scudetto'


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/scudetto' element={<Scudetto/>} />
    </Routes>
  );
};

export default Routers;
