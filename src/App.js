// import logo from './logo.svg';
import profilePic from './images/profile-pic.JPG';
import './stylesheets/main.css';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="card-wrapper">
        <div className="image-wrapper">
          <img src={profilePic} alt="" width="300px"/>
        </div>

        <div className="details-wrapper">
          <div className="primary-details">
            <h1>Monica Cervantes</h1>
            <h3>Frontend Developer</h3>
            <a href="https://monicacervantes.com/" className="website">monicacervantes.com</a>
            <div className="button-wrapper">
              <a href="mailto:cervantesmonicalouise@yahoo.com">
                <FontAwesomeIcon icon={faEnvelope} />
                Email
              </a>
              <a href="tel:09270772480">
                <FontAwesomeIcon icon={faPhone} />
                Phone
              </a>
            </div>
          </div>

          <div className="about-interest">
            <div className="paragraph-wrapper">
              <h2>About</h2>
              <p>I possess a degree in Information Technology and have almost 3 years experience in being a Front-end Web Developer. I am currently working at Shell Guagua as an Office Staff.</p>
            </div>
            <div className="paragraph-wrapper">
              <h2>Interests</h2>
              <p>I love cooking, watching on Netflix, and reading books. Detective Conan Fan.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
