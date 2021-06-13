import React from 'react';
import './App.css';
import Experiences from './components/Experiences';
import Menu from './components/Menu';
import Profil from './components/Profil';
import Realisations from './components/Realisations';
import Formation from './components/Formation';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
function App() {
  return (
    <div>
      <Menu />
      <Profil />
      <Realisations />
      <Formation />
      <Experiences />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
