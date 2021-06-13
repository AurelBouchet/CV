import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/experiences.css';
import Reader from '../logo/reader.svg';
import Teacher from '../logo/teacher.svg';
import Barman from '../logo/barman.svg';

AOS.init({
  delay: 200,
  duration: 1100,
});

const Experiences = () => {
  return (
    <div className='experiences' id="experiences">
      <hr />
      <h1 className='title'>Expériences</h1>
      <div className='contento'>
        <div className='left'>
          <div className='teach' data-aos='fade-right'>
         
            <img src={Teacher} alt='teach' />
          </div>
          <div className='barman' data-aos='fade-right'>
            <img src={Barman} alt='barman' />
          </div>
        </div>
        <ul className='expe'>
          <li className='work'>
          <hr className="tiret"/>
            <strong>Professeur des écoles</strong>
            <br /> 2019-2020, École Pierre de Ronsard
            <br /> Le Mans<br /> <hr className="tiret"/>
          </li>
          <li className='work'>
          <strong> Aide-documentaliste</strong>
            <br /> 2014-2019, Explore
            <br /> Carquefou<br /> <hr className="tiret"/>
          </li>
          <li className='work'>
          <strong>Aide-documentaliste</strong>
            <br /> 2010-2012, Vecteur Plus
            <br /> Bouguenais<br /> <hr className="tiret"/>
          </li>
          <li className='work'>
          <strong>Barman</strong>
            <br /> 2010, The Riverside
            <br /> Londres
            <hr className="tiret"/>
          </li>
        </ul>
        <div className='reader' data-aos='fade-left'>
          <img src={Reader} alt='reader' />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Experiences;
