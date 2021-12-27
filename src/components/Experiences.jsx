import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/experiences.css';
import Reader from '../logo/reader.svg';
import Teacher from '../logo/teacher.svg';
import Barman from '../logo/barman.svg';
import Developer from '../logo/developer.svg';
AOS.init({
  delay: 200,
  duration: 1100,
});

const Experiences = () => {
  return (
    <div className='experiences' id='experiences'>
      <hr />
      <h1 className='title'>Expériences</h1>
      <div className='contento'>
        <div className='left'>
          <div className='teach' data-aos='zoom-in'>
            <img src={Teacher} alt='teach' />
          </div>
          <div className='barman' data-aos='zoom-in'>
            <img src={Barman} alt='barman' />
          </div>
        </div>
        <ul className='expe'>
          <li className='work'>
            <hr className='tiret' />
            <strong>Stagiaire Angular NgRX</strong>
            <br /> sept. 2021 - janv. 2022, Ageval Solutions
            <br /> Angers <br />-<br />
            &#8227;Création d'un store avec effect pour redirection page 404
            <br />
            &#8227; Refactor d'éléments selon nouvelle charte <br />
            &#8227;Refactor de masse du repo (dossiers, fichiers, imports...)
            <br />
            #angularmodule #ngrx #lazyloading #scss
            <br /> <hr className='tiret' />
          </li>
          <li className='work'>
            <hr className='tiret' />
            <strong>Professeur des écoles</strong>
            <br /> 2019-2020, École Pierre de Ronsard
            <br /> Le Mans
            <br /> <hr className='tiret' />
          </li>
          <li className='work'>
            <strong> Aide-documentaliste</strong>
            <br /> 2014-2019, Explore
            <br /> Carquefou
            <br /> <hr className='tiret' />
          </li>
          <li className='work'>
            <strong>Aide-documentaliste</strong>
            <br /> 2010-2012, Vecteur Plus
            <br /> Bouguenais
            <br /> <hr className='tiret' />
          </li>
          <li className='work'>
            <strong>Barman</strong>
            <br /> 2010, The Riverside
            <br /> Londres
            <hr className='tiret' />
          </li>
        </ul>
        <div className='developer' data-aos='zoom-in'>
          <img src={Developer} alt='developer' />
        </div>
        <div className='reader' data-aos='zoom-in'>
          <img src={Reader} alt='reader' />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Experiences;
