import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Info } from './components/Info';
import { Rewards } from './components/Rewards';
import { Formulario } from './components/Formulario';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Info />
      <Rewards />
      <Formulario />
      <Footer />
      <Loader />
    </div>
  );
}

export default App;