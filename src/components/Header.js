
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header className="header-row" role="banner" aria-label="Little Lemon Restaurant">
            <Link to="/">
                <img
                    src={Logo}
                    alt="Little Lemon Restaurant Logo"
                    className="header-logo"
                    role="img"
                />
            </Link>
            <Nav />
        </header>
    );
}

export default Header;
