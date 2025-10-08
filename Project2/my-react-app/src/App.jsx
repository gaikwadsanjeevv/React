import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header';
import './App.css';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';
import Button from './Button';
function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Button />
      <Footer />
    </> 
  );
}

export default App;
