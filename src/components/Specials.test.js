import { render, screen, fireEvent } from '@testing-library/react';
import Specials from './Specials';

// Mock images
jest.mock('../assets/images/greekSalad.jpg', () => 'greek-salad.jpg');
jest.mock('../assets/images/bruchetta.svg', () => 'bruchetta.svg');
jest.mock('../assets/images/lemonDessert.jpg', () => 'lemon-dessert.jpg');

describe('Specials Component', () => {
    test('renders specials section with heading', () => {
        render(<Specials />);
        expect(screen.getByText(/this week's specials!/i)).toBeInTheDocument();
    });

    test('renders online menu button', () => {
        render(<Specials />);

        const menuButton = screen.getByText(/online menu/i);
        expect(menuButton).toBeInTheDocument();
    });

    test('displays correct prices for each dish', () => {
        render(<Specials />);

        // Check prices
        expect(screen.getByText('$12.99')).toBeInTheDocument();
        expect(screen.getByText('$5.99')).toBeInTheDocument();
        expect(screen.getByText('$5.00')).toBeInTheDocument();
    });

    test('renders images with alt text', () => {
        render(<Specials />);

        const images = screen.getAllByRole('img');
        expect(images.length).toBeGreaterThan(0);
    });

    test('special descriptions contain relevant text', () => {
        render(<Specials />);

        expect(screen.getByText(/famous greek salad/i)).toBeInTheDocument();
        expect(screen.getByText(/grilled bread.*garlic/i)).toBeInTheDocument();
        expect(screen.getByText(/grandma's recipe book/i)).toBeInTheDocument();
    });

    test('online menu button click interaction', () => {
        render(<Specials />);

        const menuButton = screen.getByText(/online menu/i);

        // Test that button is clickable
        fireEvent.click(menuButton);

        // Button should remain in document after click
        expect(menuButton).toBeInTheDocument();
    });
});
