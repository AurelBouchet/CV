import React from 'react';
import './App.css';
import Experiences from './components/Experiences';
import Menu from './components/Menu';
import Profil from './components/Profil';
import Realisations from './components/Realisations';
import Formation from './components/Formation';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Menu />
      <Profil />
      <Realisations />
      <Formation />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
