import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="social-wrapper">
        <a href="https://twitter.com/mnccervantes">
          <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
        </a>
        <a href="https://www.facebook.com/monicalouise.cervantes">
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
        </a>
        <a href="https://www.instagram.com/cangcervantes/">
          <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/monicalouisecervantes/">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://github.com/monica-cervantes">
          <FontAwesomeIcon icon={faGithubSquare} size="lg" />
        </a>
      </div>
      <small>Design from <a href="https://scrimba.com/">Scrimba</a></small>
    </footer>
  )
}

