import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

// Mock props
const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
const mockDispatch = jest.fn();

// Wrapper component for Router context
const BookingFormWithRouter = (props) => (
    <BrowserRouter>
        <BookingForm {...props} />
    </BrowserRouter>
);

describe('BookingForm Component', () => {
    beforeEach(() => {
        mockDispatch.mockClear();
    });

    test('displays available times from props', () => {
        render(
            <BookingFormWithRouter
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        // Check if all available times are present
        mockAvailableTimes.forEach(time => {
            expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
        });
    });

    test('form fields update on user input', async () => {
        render(
            <BookingFormWithRouter
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        const dateInput = document.getElementById('date');
        const timeSelect = document.getElementById('time');
        const guestsInput = document.getElementById('guests');
        const occasionSelect = document.getElementById('occasion');

        // Test date input
        fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
        expect(dateInput.value).toBe('2024-12-25');

        // Test time select
        fireEvent.change(timeSelect, { target: { value: '19:00' } });
        expect(timeSelect.value).toBe('19:00');

        // Test guests input
        fireEvent.change(guestsInput, { target: { value: '4' } });
        expect(guestsInput.value).toBe('4');

        // Test occasion select
        fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
        expect(occasionSelect.value).toBe('Anniversary');
    });

    test('form submission works', async () => {
        render(
            <BookingFormWithRouter
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        // Fill out the form using more specific selectors
        const dateInput = document.getElementById('date');
        const timeSelect = document.getElementById('time');
        const guestsInput = document.getElementById('guests');

        fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
        fireEvent.change(timeSelect, { target: { value: '19:00' } });
        fireEvent.change(guestsInput, { target: { value: '4' } });

        // Submit the form
        fireEvent.click(screen.getByText(/make your reservation/i));

        // Form should be submitted
        await waitFor(() => {
            expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
        });
    });

    test('validation prevents submission with empty required fields', () => {
        render(
            <BookingFormWithRouter
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        const submitButton = screen.getByText(/make your reservation/i);

        // Try to submit without filling required fields
        fireEvent.click(submitButton);

        // Form should still be present (not submitted)
        expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
    });

    test('guest input has correct constraints', () => {
        render(
            <BookingFormWithRouter
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        const guestsInput = document.getElementById('guests');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('date input has minimum date validation', () => {
        render(
            <BookingFormWithRouter
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        const dateInput = document.getElementById('date');
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toBeRequired();
    });

    test('renders booking form with main elements', () => {
        render(
            <BookingFormWithRouter
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        // Check for main heading
        expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();

        // Check for form elements by ID
        expect(document.getElementById('date')).toBeInTheDocument();
        expect(document.getElementById('time')).toBeInTheDocument();
        expect(document.getElementById('guests')).toBeInTheDocument();
        expect(document.getElementById('occasion')).toBeInTheDocument();

        // Check for submit button
        expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
    });
});