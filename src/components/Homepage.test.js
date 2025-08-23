import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage';

// Mock child components
jest.mock('./CallToAction', () => {
  return function MockCallToAction() {
    return <div data-testid="call-to-action">CallToAction Component</div>;
  };
});

jest.mock('./Specials', () => {
  return function MockSpecials() {
    return <div data-testid="specials">Specials Component</div>;
  };
});

jest.mock('./CustomersSay', () => {
  return function MockCustomersSay() {
    return <div data-testid="customers-say">CustomersSay Component</div>;
  };
});

jest.mock('./Chicago', () => {
  return function MockChicago() {
    return <div data-testid="chicago">Chicago Component</div>;
  };
});

const HomepageWithRouter = () => (
  <BrowserRouter>
    <Homepage />
  </BrowserRouter>
);

describe('Homepage Component', () => {
  test('renders CallToAction component', () => {
    render(<HomepageWithRouter />);

    const callToAction = screen.getByTestId('call-to-action');
    expect(callToAction).toBeInTheDocument();
    expect(callToAction).toHaveTextContent('CallToAction Component');
  });

  test('renders Specials component', () => {
    render(<HomepageWithRouter />);

    const specials = screen.getByTestId('specials');
    expect(specials).toBeInTheDocument();
    expect(specials).toHaveTextContent('Specials Component');
  });

  test('renders CustomersSay component', () => {
    render(<HomepageWithRouter />);

    const customersSay = screen.getByTestId('customers-say');
    expect(customersSay).toBeInTheDocument();
    expect(customersSay).toHaveTextContent('CustomersSay Component');
  });

  test('homepage renders without errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<HomepageWithRouter />);
    
    expect(consoleSpy).not.toHaveBeenCalled();
    
    consoleSpy.mockRestore();
  });
});