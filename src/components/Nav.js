import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    return (
        <nav>
            <ul>
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link></li>
                <li><Link to="/booking" className={location.pathname === '/booking' ? 'active' : ''}>Reservations</Link></li>
                <li><Link to="/order" className={location.pathname === '/order' ? 'active' : ''}>Order Online</Link></li>
                <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
