import './Header.css'

function Header() {
    return <header>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <img src="torii_japonais.svg" alt="Torii" /> MyJProgress
                </div>
                <nav>
                    <ul>
                        <li><a href="#accueil">Accueil</a></li>
                        <li><a href="#cours">Cours</a></li>
                        <li><a href="#progres">Progrès</a></li>
                        <li><a href="#communaute">Communauté</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}

export default Header;
