
import Logo from '../assets/images/Logo.svg';
import Nav from './Nav';

function Header() {
    return(
        <header className="header-row">
            <img src={Logo} alt="My First React Project" className="header-logo" />
            <Nav />
        </header>
    );
}

export default Header;
