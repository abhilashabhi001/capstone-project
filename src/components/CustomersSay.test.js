import { render, screen } from '@testing-library/react';
import CustomersSay from './CustomersSay';

describe('CustomersSay Component', () => {
  test('renders testimonials section', () => {
    render(<CustomersSay />);

    expect(screen.getByText(/what our customers say/i)).toBeInTheDocument();
  });

  test('displays customer testimonials', () => {
    render(<CustomersSay />);

    // Check for customer names
    expect(screen.getByText('Maria Rodriguez')).toBeInTheDocument();
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
  });

  test('displays star ratings', () => {
    render(<CustomersSay />);

    // Check for star elements
    const starElements = document.querySelectorAll('.stars');
    expect(starElements).toHaveLength(3);
  });

  test('displays customer review text', () => {
    render(<CustomersSay />);

    expect(screen.getByText(/greek salad was absolutely amazing/i)).toBeInTheDocument();
    expect(screen.getByText(/best mediterranean food in chicago/i)).toBeInTheDocument();
    expect(screen.getByText(/great family restaurant/i)).toBeInTheDocument();
  });

  test('renders customer images', () => {
    render(<CustomersSay />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);

    expect(screen.getByAltText('Maria Rodriguez')).toBeInTheDocument();
    expect(screen.getByAltText('John Smith')).toBeInTheDocument();
    expect(screen.getByAltText('Sarah Johnson')).toBeInTheDocument();
  });

  test('renders testimonial cards', () => {
    render(<CustomersSay />);

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    expect(testimonialCards).toHaveLength(3);
  });

  test('section has correct CSS class', () => {
    render(<CustomersSay />);

    const section = document.querySelector('.customers-say');
    expect(section).toBeInTheDocument();
  });

  test('testimonials grid structure', () => {
    render(<CustomersSay />);

    const grid = document.querySelector('.testimonials-grid');
    expect(grid).toBeInTheDocument();
  });

  test('rating section exists for each testimonial', () => {
    render(<CustomersSay />);

    const ratings = document.querySelectorAll('.rating');
    expect(ratings).toHaveLength(3);
  });

  test('customer info section exists for each testimonial', () => {
    render(<CustomersSay />);

    const customerInfos = document.querySelectorAll('.customer-info');
    expect(customerInfos).toHaveLength(3);
  });

  test('review text section exists for each testimonial', () => {
    render(<CustomersSay />);

    const reviewTexts = document.querySelectorAll('.review-text');
    expect(reviewTexts).toHaveLength(3);
  });

  test('customer images have correct alt text', () => {
    render(<CustomersSay />);

    const images = screen.getAllByRole('img');
    
    const expectedAltTexts = ['Maria Rodriguez', 'John Smith', 'Sarah Johnson'];
    expectedAltTexts.forEach(altText => {
      expect(screen.getByAltText(altText)).toBeInTheDocument();
    });
  });
});
