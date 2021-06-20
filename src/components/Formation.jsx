import React from 'react';
import '../style/formation.css';
import Wcs from '../logo/wcs.png';
import Univ from '../logo/univangers.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: 50,
  duration: 1000,
});

const Formation = () => {
  return (
    <div className='formation' id='formation'>
      <hr />
      <h1 className='title'>Formation</h1>
      <ul className='educ'>
        <li className='education'>
          <img src={Wcs} alt='wcs' className='logo1' data-aos='zoom-in' />
          <br />
          Développeur web et web mobile
          <br />
          Wild Code School, Nantes
          <br /> mars-juillet 2021
        </li>
        <li className='education'>
          <img
            src={Univ}
            alt='univ-angers'
            className='logo2'
            data-aos='zoom-in'
          />
          <br />
          Master 2 - Sciences de l'information et des bibliothèques
          <br />
          Université d'Angers
          <br />
          2007-2009
        </li>
      </ul>
    </div>
  );
};

export default Formation;
