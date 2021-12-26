import Avatar from '../pics/cv.jpg';
import Github from '../assets/github.svg';
import Curriculum from '../assets/curriculum.svg';
import Linkedin from '../assets/linkedin.svg';
import Js from '../assets/js.svg';
import Html from '../assets/html.svg';
import Reactlogo from '../assets/react.svg';
import Nodejs from '../assets/nodejs.svg';
import Sql from '../assets/sql.svg';
import Scrum from '../assets/scrum.svg';
import Vsc from '../assets/vsc.svg';
import Githubb from '../assets/git-hub.svg';
import Gitlab from '../assets/gitlab.svg';
import Rxjs from '../assets/rxjs.svg';
import Angular from '../assets/angular.svg';
import Figma from '../assets/figma.svg';
import Sass from '../assets/sass.svg';
import Tailwind from '../assets/tailwind.svg';
import Ngrx from '../assets/ngrx.svg';
import MyCv from '../assets/AurélienBouchetCV.pdf';
import '../style/profil.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: 100,
  duration: 1000,
});

const Profil = () => {
  return (
    <div className='profil' id='profil'>
      <div className='header'>
        <h2 className='title1'>Bonjour, je suis Aurélien !</h2>
      </div>
      <div className='desktop'>
        <img src={Avatar} alt='avatar Aurélien' className='img' />
        <div className='presentation'>
          <p className='intro'>Développeur web junior livré avec :</p>

          <div className='technos'>
            <img src={Angular} alt='angular' className='tech' />
            <img src={Js} alt='js' className='tech' />
            <img src={Rxjs} alt='rxjs' className='tech' />
            <img src={Ngrx} alt='ngrx' className='tech' />
            <img src={Reactlogo} alt='react' className='tech' />
            <img src={Html} alt='html' className='tech' />
            <img src={Sass} alt='sass' className='tech' />
            <img src={Tailwind} alt='tailwind' className='tech' />
            <img src={Nodejs} alt='nodejs' className='tech' />
            <img src={Sql} alt='sql' className='tech' />
            <img src={Gitlab} alt='gitlab' className='tech' />
            <img src={Githubb} alt='github' className='tech' />
            <img src={Vsc} alt='vsc' className='tech' />
            <img src={Scrum} alt='scrum' className='tech' />
            <img src={Figma} alt='figma' className='tech' />
          </div>
          <p className='intro'>et à la recherche d'un employeur!</p>
          <br />
          <br />
        </div>
      </div>

      <div className='linkLogo'>
        <a
          className='linkTo'
          href={MyCv}
          download='AurelienBouchet.pdf'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Curriculum} alt='cv logo' className='cvLogo' />
        </a>
        <a
          className='linkTo'
          href='https://www.linkedin.com/in/aur%C3%A9lien-bouchet/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Linkedin} alt='linkedin logo' className='linkedinLogo' />
        </a>
        <a
          className='linkTo'
          href='https://github.com/AurelBouchet?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Github} alt='github logo' className='githubLogo' />
        </a>
      </div>
      <p className='about'>
        Après différentes expériences professionnelles, j'ai décidé en 2020 de
        me reconvertir dans le métier de développeur web. Après une formation de
        5 mois à la{' '}
        <a
          href='https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=nantes'
          target='_blank'
          rel='noreferrer'
          className='wild'
        >
          WILD CODE SCHOOL
        </a>{' '}
        de Nantes, et un stage de 4 mois chez
        <a
          href='https://www.ageval.fr/'
          target='_blank'
          rel='noreferrer'
          className='wild'
        >
          {' '}
          AGEVAL SOLUTIONS
        </a>{' '}
        en tant que développeur front-end, je suis à la recherche d'un job en ce
        début d'année :) !
      </p>
      <br />
      <br />
    </div>
  );
};

export default Profil;
