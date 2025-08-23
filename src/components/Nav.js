import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    return (
        <nav role="navigation" aria-label="Main navigation">
            <ul role="menubar" aria-label="Main menu">
                <li>
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}
                        role="menuitem"
                        aria-current={location.pathname === '/' ? 'page' : undefined}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={location.pathname === '/about' ? 'active' : ''}
                        role="menuitem"
                        aria-current={location.pathname === '/about' ? 'page' : undefined}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/menu"
                        className={location.pathname === '/menu' ? 'active' : ''}
                        role="menuitem"
                        aria-current={location.pathname === '/menu' ? 'page' : undefined}
                    >
                        Menu
                    </Link>
                </li>
                <li>
                    <Link
                        to="/booking"
                        className={location.pathname === '/booking' ? 'active' : ''}
                        role="menuitem"
                        aria-current={location.pathname === '/booking' ? 'page' : undefined}
                    >
                        Reservations
                    </Link>
                </li>
                <li>
                    <Link
                        to="/order"
                        className={location.pathname === '/order' ? 'active' : ''}
                        role="menuitem"
                        aria-current={location.pathname === '/order' ? 'page' : undefined}
                    >
                        Order Online
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className={location.pathname === '/login' ? 'active' : ''}
                        role="menuitem"
                        aria-current={location.pathname === '/login' ? 'page' : undefined}
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
