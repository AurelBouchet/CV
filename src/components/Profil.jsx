import Avatar from '../pics/cv.jpg';
import Github from '../assets/github.svg';
import Curriculum from '../assets/curriculum.svg';
import Linkedin from '../assets/linkedin.svg';
import Js from '../assets/js.svg';
import Css from '../assets/css3.svg';
import Html from '../assets/html.svg';
import Reactlogo from '../assets/react.svg';
import Nodejs from '../assets/nodejs.svg';
import Sql from '../assets/sql.svg';
import Scrum from '../assets/scrum.svg';
import Vsc from '../assets/vsc.svg';
import Git from '../assets/git.svg';
import Githubb from '../assets/git-hub.svg';
import '../style/profil.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay:100,
  duration:1000,
});

const Profil = () => {
  return (
    <div className="profil" id="profil">
      <div className="header"><h2 className="title1" >Bonjour,   je  suis  Aurélien  !</h2></div>
      <div className='desktop'>
        <img src={Avatar} alt='avatar Aurélien' className='img' />
        <br />
        <div className='presentation'>
          <p className="intro">Développeur web junior de 34 ans livré avec tout ça:</p>
         
          <div className="technos">
          <img src={Html} alt='html' className='tech' />
          <img src={Css} alt='css' className='tech' />
          <img src={Js} alt='js' className='tech' />
          <img src={Reactlogo} alt='react' className='tech' />
          <img src={Sql} alt='sql' className='tech' />
          <img src={Git} alt='git' className='tech' />
          <img src={Githubb} alt='github' className='tech' />
          <img src={Vsc} alt='vsc' className='tech' />
          <img src={Nodejs} alt='nodejs' className='tech' />
          <img src={Scrum} alt='scrum' className='tech' />
          </div><br/>
          <p className="intro">je cherche un stage pour le 2 août!</p>
        </div>
      </div><br />
      <div className='linkLogo' data-aos="fade-left">
        <img src={Curriculum} alt='cv logo' className='cvLogo' />
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
          href='https://github.com/AurelBouchet/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Github} alt='github logo' className='githubLogo' />
        </a>
      </div>
      <p className='about'>
        Après différentes expériences professionnelles, j'ai décidé de me reconvertir dans le métier de développeur web. Actuellement en formation à la <a href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=nantes"  target='_blank'
          rel='noreferrer' className="wild">WILD CODE SCHOOL</a> de Nantes. J'ai une grande soif d'apprendre et tout ce que je découvre chaque jour répond aux attentes du grand curieux que je suis!
      </p>
      <br /><br />
    </div>
  );
};

export default Profil;
