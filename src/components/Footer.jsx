import '../style/footer.css';
import UpButton from '../assets/up-arrow.svg';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact'>
        <hr />
        <span>
          Aurélien Bouchet
          <br />
          06 33 93 32 96
        </span>
        <br />
        aurelien-bouchet@hotmail.fr <hr />
      </div>
      <a href='#profil' className='up'>
        <img src={UpButton} alt='arrow-up' className='upButton' />
      </a>
    </div>
  );
};
export default Footer;
