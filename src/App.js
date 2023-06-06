import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Main } from './components/Main';
import { Rewards } from './components/Rewards';
import { Formulario } from './components/Formulario';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Main />
      <Rewards />
      <Formulario />
      <Footer />
      <Loader />
    </div>
  );
}

export default App;