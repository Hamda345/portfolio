import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoH from '../../assets/images/logo-h.png';
import LogoSubtitle from '../../assets/images/h2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={ LogoH } alt="logo" />
                <img className="sub-logo" src={ LogoSubtitle } alt="hamda" />
            </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={ faHome } color="#4d4d4e" />
            </NavLink>
             <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={ faUser } color="#4d4d4e" />
            </NavLink>
             <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={ faEnvelope } color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hamda-dallel-804235203/">
                    <FontAwesomeIcon icon={ faLinkedin } color="#4d4d4e"  />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Hamda345">
                    <FontAwesomeIcon icon={ faGithub } color="#4d4d4e"  />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hamda_dooma/">
                    <FontAwesomeIcon icon={ faInstagram } color="#4d4d4e"  />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Hamdii92007531">
                    <FontAwesomeIcon icon={ faTwitter } color="#4d4d4e"  />
                </a>
            </li>

        </ul>
        </div>
    )
}

export default Sidebar;
