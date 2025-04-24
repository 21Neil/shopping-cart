import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Outlet } from 'react-router';

const App = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  return (
    <>
      <Navbar />
      {children ?? <Outlet context={[cartItems, setCartItems]} />}
    </>
  );
};

export default App;
