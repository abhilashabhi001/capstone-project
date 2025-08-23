import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Wrapper component for Router context
const HeaderWithRouter = () => (
    <BrowserRouter>
        <Header />
    </BrowserRouter>
);

describe('Header Component', () => {
    test('renders header component', () => {
        render(<HeaderWithRouter />);

        // Check if header is rendered
        const header = document.querySelector('header');
        expect(header).toBeInTheDocument();
    });

    test('renders logo image', () => {
        render(<HeaderWithRouter />);

        // Check for logo
        const logo = screen.getByRole('img');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('alt', 'Little Lemon Restaurant Logo');
    });

    test('logo has correct CSS class', () => {
        render(<HeaderWithRouter />);

        const logo = screen.getByRole('img');
        expect(logo).toHaveClass('header-logo');
    });

    test('contains navigation component', () => {
        render(<HeaderWithRouter />);

        // Check that navigation is present
        const navigation = screen.getByRole('navigation');
        expect(navigation).toBeInTheDocument();
    });
});
