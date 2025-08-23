import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

// Wrapper component for Router context
const NavWithRouter = ({ initialEntries = ['/'] }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Nav />
  </MemoryRouter>
);

describe('Nav Component', () => {
  test('renders navigation with all menu items', () => {
    render(<NavWithRouter />);

    // Check for navigation
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();

    // Check for all navigation links
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText(/reservations/i)).toBeInTheDocument();
    expect(screen.getByText(/order online/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('marks current page as active', () => {
    render(<NavWithRouter initialEntries={['/']} />);

    const homeLink = screen.getByText(/home/i);
    expect(homeLink.closest('a')).toHaveClass('active');
  });

  test('marks booking page as active when on booking route', () => {
    render(<NavWithRouter initialEntries={['/booking']} />);

    const bookingLink = screen.getByText(/reservations/i);
    expect(bookingLink.closest('a')).toHaveClass('active');
  });

  test('marks about page as active when on about route', () => {
    render(<NavWithRouter initialEntries={['/about']} />);

    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink.closest('a')).toHaveClass('active');
  });

  test('navigation links have correct href attributes', () => {
    render(<NavWithRouter />);

    const homeLink = screen.getByText(/home/i).closest('a');
    const aboutLink = screen.getByText(/about/i).closest('a');
    const menuLink = screen.getByText(/menu/i).closest('a');
    const bookingLink = screen.getByText(/reservations/i).closest('a');
    const orderLink = screen.getByText(/order online/i).closest('a');
    const loginLink = screen.getByText(/login/i).closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(menuLink).toHaveAttribute('href', '/menu');
    expect(bookingLink).toHaveAttribute('href', '/booking');
    expect(orderLink).toHaveAttribute('href', '/order');
    expect(loginLink).toHaveAttribute('href', '/login');
  });
});
