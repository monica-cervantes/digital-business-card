import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/mnccervantes">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <a href="https://www.facebook.com/monicalouise.cervantes">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="https://www.instagram.com/cangcervantes/">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
      <a href="https://www.linkedin.com/in/monicalouisecervantes/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/monica-cervantes">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
    </footer>
  )
}

