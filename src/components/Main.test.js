import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Main from './Main';

// Mock child components
jest.mock('./Homepage', () => {
  return function MockHomepage() {
    return <div data-testid="homepage">Homepage Component</div>;
  };
});

jest.mock('./BookingPage', () => {
  return function MockBookingPage() {
    return <div data-testid="booking-page">Booking Page Component</div>;
  };
});

jest.mock('./Chicago', () => {
  return function MockChicago() {
    return <div data-testid="chicago">Chicago Component</div>;
  };
});

jest.mock('./ConfirmedBooking', () => {
  return function MockConfirmedBooking() {
    return <div data-testid="confirmed-booking">Confirmed Booking Component</div>;
  };
});

const MainWithRouter = ({ initialEntries = ['/'] }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Main />
  </MemoryRouter>
);

describe('Main Component', () => {
  test('renders main component', () => {
    render(<MainWithRouter />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  test('renders Homepage component on root route', () => {
    render(<MainWithRouter initialEntries={['/']} />);

    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });

  test('renders Chicago component on about route', () => {
    render(<MainWithRouter initialEntries={['/about']} />);

    expect(screen.getByTestId('chicago')).toBeInTheDocument();
  });

  test('renders BookingPage component on booking route', () => {
    render(<MainWithRouter initialEntries={['/booking']} />);

    expect(screen.getByTestId('booking-page')).toBeInTheDocument();
  });

  test('renders placeholder content for menu route', () => {
    render(<MainWithRouter initialEntries={['/menu']} />);

    expect(screen.getByText('Menu Page - Coming Soon')).toBeInTheDocument();
  });

  test('renders placeholder content for order route', () => {
    render(<MainWithRouter initialEntries={['/order']} />);

    expect(screen.getByText('Order Online - Coming Soon')).toBeInTheDocument();
  });

  test('renders placeholder content for login route', () => {
    render(<MainWithRouter initialEntries={['/login']} />);

    expect(screen.getByText('Login Page - Coming Soon')).toBeInTheDocument();
  });

  test('renders ConfirmedBooking component on confirmed route', () => {
    render(<MainWithRouter initialEntries={['/confirmed']} />);

    expect(screen.getByTestId('confirmed-booking')).toBeInTheDocument();
  });

  test('redirects to home page for invalid routes', () => {
    render(<MainWithRouter initialEntries={['/invalid-route']} />);

    // Should redirect to homepage
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
  });
});
