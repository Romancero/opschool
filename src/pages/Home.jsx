import '../style-pages/Home.css';
import Img from '../components/Img';

const Home = () => {
  return (
    <main className='Home'>
      <div className="Home-primerParte">
        <p>Our<br/>
        Perfect<br/>
        School</p>
      </div>

      <Img classAditional='Home-logo' url='logo_opschool_ig' />

      <div className="Home-down">
        <i className="fas fa-arrow-down"></i>
        <p>Scroll down</p>
      </div>
    </main>
  );
};

export default Home;