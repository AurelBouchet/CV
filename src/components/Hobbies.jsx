import '../style/hobbies.css';
import Trip from '../pics/trip.jpg';
import Sport from '../pics/sport.jpg';
import Music from '../pics/music.jpg';
const Hobbies = () => {
  return (
    <div className='passions' id='passions'>
      <hr />
      <h1 className='title'>And a bit more about me</h1>
      <div className='hobbies'>
        <div className='music' data-aos='fade-top'>
          <img src={Music} alt='music' className='pics' />
          J'écoute beaucoup de musique et en pratique également. J'ai commencé
          par la guitare puis ont suivi la basse, le piano et le chant.
          Recemment, je me suis décidé à concrétiser ce que j'avais en tête.
          <br />
          J'écris et compose mes chansons, réalise le mixage et la production
          sur le logiciel Reaper. J'espère pouvoir publier certaines d'entre
          elles à court terme.{' '}
        </div>
        <div className='trip' data-aos='fade-top'>
          <img src={Trip} alt='mnmt valley' className='pics' />
          Passionné de voyage, je partais avant la pandémie parfois plusieurs
          fois par an. Écosse, Sardaigne, Sicile, Croatie, Hongrie,... <br />
          Mon souvenir le plus marquant : l'Ouest des États-Unis en solo durant
          2 mois.
        </div>
        <div className='sport' data-aos='fade-top'>
          <img src={Sport} alt='pyrenees' className='pics' />
          J'apprécie la randonnée, à la journée ou sur plusieurs jours
          (Pyrénées, Highlands,...).
          <br />
          Je pratique également la course à pied 1 à 2 fois par semaine, pour
          m'entretenir (un peu) et me vider la tête (beaucoup😁). J'ai participé
          à un trail et 2 semi-marathons.
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
