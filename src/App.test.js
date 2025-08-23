import { render, screen } from '@testing-library/react';
import App from './App';

// Mock child components
jest.mock('./components/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

jest.mock('./components/Main', () => {
  return function MockMain() {
    return <div data-testid="main">Main Component</div>;
  };
});

jest.mock('./components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer Component</div>;
  };
});

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders all main components', () => {
    render(<App />);

    const header = screen.getByTestId('header');
    const main = screen.getByTestId('main');
    const footer = screen.getByTestId('footer');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('contains Header component', () => {
    render(<App />);
    
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Header Component');
  });

  test('contains Main component', () => {
    render(<App />);
    
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent('Main Component');
  });

  test('contains Footer component', () => {
    render(<App />);
    
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('Footer Component');
  });
});
