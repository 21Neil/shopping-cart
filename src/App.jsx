import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Outlet } from 'react-router';

const App = ({ children }) => {
  return (
    <>
      <Navbar />
      {children ?? <Outlet />}
    </>
  );
};

export default App;
