import React from 'react';
import { useState } from 'react';
import '../style/realisations.css';
import Bicloo from '../pics/biclooapp.JPG';
import Space from '../pics/spaceok.jpg';
import Nantes from '../pics/VisitNantes.jpg';
import Todo from '../pics/todo.jpg';
import Harry from '../pics/harry.jpg';
import Harrybis from '../pics/harrybis.jpg';
const Realisations = () => {
  const [isShown, setIsShown] = useState({ Harry });
  function handlePop() {
    setIsShown(!isShown);
  }

  return (
    <div className='realisations' id='realisations'>
      <h1 className='title'>Réalisations</h1>
      <hr />
      <div className='harry'>
        <h3 className='siteName'>Harry and friends</h3>
        <p className='description'>
          Application réalisée autour de l'univers d'Harry Potter. Elle mobilise
          la consommation d'une API et l'injection d'un service.
          <br />
          <br />
          #angular #rxjs #api 📱💻
        </p>

        <img
          className='pic'
          alt='website pic'
          src={isShown ? Harry : Harrybis}
          onMouseEnter={handlePop}
        ></img>
      </div>
      <div className='todo'>
        <h3 className='siteName'>My todo list</h3>
        <p className='description'>
          Todo list en Angular réalisée en mixant Tailwind, des variables SCSS
          et la librairie SweetAlert2. Les données sont stockées dans le
          localStorage.
          <br />
          <br />
          #angular #localstorage #sweetalert2 #api 💻
        </p>
        <a
          className='real'
          href='https://todo-list-eight-lilac.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img className='pic' alt='website pic' src={Todo}></img>
        </a>
      </div>
      <br />
      <div className='space'>
        <h3 className='siteName'>Space Meet</h3>
        <p className='description'>
          Développée à 4 durant un hackathon de 36h, Space Meet est une
          application de rencontre entre humains et extra-terrestes basée sur
          une API du jeu Mass Effect. <br />
          <br />
          #react #localstorage #api <br />
          Déployée après 11 semaines de formation. 📱
        </p>
        <a
          className='real'
          href='https://space-meet.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img className='pic' alt='website pic' src={Space}></img>
        </a>
      </div>
      <br />
      <div className='bicloo'>
        <h3 className='siteName'>Bicloo App</h3>
        <p className='description'>
          Développée en React en 4 semaines à 5 personnes, Bibloo App gamifie le
          déplacement en Bicloo! <br />
          Pour désengorger les stations surchargées, l&apos;application incite
          l&apos;utilisateur à déplacer les vélos vers des stations "vides"
          grâce à un système de récompenses. <br />
          <br />
          #react #reacrtleaflet #api <br />
          Déployée après 10 semaines de formation. 📱
        </p>
        <a
          className='real'
          href=' https://infallible-murdock-c2ad9d.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img className='pic' alt='website pic' src={Bicloo}></img>
        </a>
      </div>
      <br />
      <div className='visit'>
        <h3 className='siteName'>Visit Nantes</h3>
        <p className='description'>
          Protosite statique développé en 1 semaine après 4 semaines de
          formation, Visit Nantes propose de découvrir la ville et ses environs
          au travers de ses onglets "Culture" ou "Pratique"
          <br />
          <br />
          #html #css
          <br /> Déployée après 3 semaines de formation. 📱💻
        </p>
        <a
          className='real'
          href=' https://teasmade.github.io/VisitNantes/index.html'
          target='_blank'
          rel='noreferrer'
        >
          <img className='pic' alt='website pic' src={Nantes}></img>
        </a>
      </div>
      <br />
    </div>
  );
};

export default Realisations;
