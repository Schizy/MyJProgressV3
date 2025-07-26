import { NavLink } from 'react-router-dom';
import './Header.css'
import torii from '../../assets/torii.svg'

function Header() {
    return <header>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <img src={torii} alt="" /> MyJProgress
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><a href="#cours">Cours</a></li>
                        <li><a href="#progres">Progrès</a></li>
                        <li><NavLink to="/communaute">Communauté</NavLink></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><NavLink to="/profile">Mon profil</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}

export default Header
