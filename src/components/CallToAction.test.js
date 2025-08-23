import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CallToAction from './CallToAction';

// Mock the image import
jest.mock('../assets/images/restauranFood.jpg', () => 'restaurant-food.jpg');

const CallToActionWithRouter = () => (
  <BrowserRouter>
    <CallToAction />
  </BrowserRouter>
);

describe('CallToAction Component', () => {
  test('renders hero section', () => {
    render(<CallToActionWithRouter />);

    // Check for main section
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  test('displays restaurant description', () => {
    render(<CallToActionWithRouter />);

    const description = screen.getByText(/family owned mediterranean restaurant/i);
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(/traditional recipes.*modern twist/i);
  });

  test('renders reserve table button', () => {
    render(<CallToActionWithRouter />);

    const reserveButton = screen.getByText(/reserve a table/i);
    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton.closest('a')).toHaveAttribute('href', '/booking');
  });

  test('renders hero image with alt text', () => {
    render(<CallToActionWithRouter />);

    const heroImage = screen.getByAltText(/delicious mediterranean food/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'restaurant-food.jpg');
  });

  test('hero image has loading attribute', () => {
    render(<CallToActionWithRouter />);

    const heroImage = screen.getByAltText(/delicious mediterranean food/i);
    expect(heroImage).toHaveAttribute('loading', 'eager');
  });
});
