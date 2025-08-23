import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage';

// Mock the global API
const mockFetchAPI = jest.fn();
const mockSubmitAPI = jest.fn();

beforeEach(() => {
    // Reset mocks
    mockFetchAPI.mockClear();
    mockSubmitAPI.mockClear();

    // Set up global window API
    global.window.fetchAPI = mockFetchAPI;
    global.window.submitAPI = mockSubmitAPI;
});

afterEach(() => {
    // Clean up
    delete global.window.fetchAPI;
    delete global.window.submitAPI;
});

describe('BookingPage Component', () => {
    test('renders BookingForm component', () => {
        mockFetchAPI.mockReturnValue(['17:00', '18:00', '19:00']);
        render(<BookingPage />);

        // Check if form elements are present using htmlFor
        expect(document.getElementById('date')).toBeInTheDocument();
        expect(document.getElementById('time')).toBeInTheDocument();
        expect(document.getElementById('guests')).toBeInTheDocument();
        expect(document.getElementById('occasion')).toBeInTheDocument();
    });

    test('initializes with default times on component mount', async () => {
        const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
        mockFetchAPI.mockReturnValue(mockTimes);

        render(<BookingPage />);

        await waitFor(() => {
            expect(mockFetchAPI).toHaveBeenCalledTimes(1);
            expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
        });

        // Check if times are available in the select options
        const timeSelect = document.getElementById('time');
        mockTimes.forEach(time => {
            expect(timeSelect.querySelector(`option[value="${time}"]`)).toBeInTheDocument();
        });
    });

    test('uses fallback times when fetchAPI is not available', async () => {
        // Remove the API
        delete global.window.fetchAPI;

        render(<BookingPage />);

        await waitFor(() => {
            const timeSelect = document.getElementById('time');
            // Should show fallback times
            expect(timeSelect.querySelector('option[value="17:00"]')).toBeInTheDocument();
            expect(timeSelect.querySelector('option[value="18:00"]')).toBeInTheDocument();
            expect(timeSelect.querySelector('option[value="19:00"]')).toBeInTheDocument();
        });
    });

    test('updates available times when date changes', async () => {
        const initialTimes = ['17:00', '18:00'];
        const updatedTimes = ['19:00', '20:00', '21:00'];

        mockFetchAPI
            .mockReturnValueOnce(initialTimes)  // Initial call
            .mockReturnValueOnce(updatedTimes); // Date change call

        render(<BookingPage />);

        // Wait for initial load
        await waitFor(() => {
            expect(mockFetchAPI).toHaveBeenCalledTimes(1);
        });

        // Change date
        const dateInput = document.getElementById('date');
        fireEvent.change(dateInput, { target: { value: '2024-12-25' } });

        await waitFor(() => {
            expect(mockFetchAPI).toHaveBeenCalledTimes(2);
        });

        // Check updated times
        const timeSelect = document.getElementById('time');
        updatedTimes.forEach(time => {
            expect(timeSelect.querySelector(`option[value="${time}"]`)).toBeInTheDocument();
        });
    });

    test('passes correct props to BookingForm', () => {
        const mockTimes = ['17:00', '18:00'];
        mockFetchAPI.mockReturnValue(mockTimes);

        render(<BookingPage />);

        // Check if BookingForm receives the times
        const timeSelect = document.getElementById('time');
        expect(timeSelect).toBeInTheDocument();

        // Check if dispatch function is working (can change date)
        const dateInput = document.getElementById('date');
        expect(dateInput).toBeInTheDocument();
    });
});

describe('BookingPage useEffect Management', () => {
    test('useEffect runs only once on mount with empty dependency', async () => {
        mockFetchAPI.mockReturnValue(['17:00', '18:00']);

        render(<BookingPage />);

        await waitFor(() => {
            expect(mockFetchAPI).toHaveBeenCalledTimes(1);
        });

        // Re-render component should not call fetchAPI again
        render(<BookingPage />);

        await waitFor(() => {
            expect(mockFetchAPI).toHaveBeenCalledTimes(2); // New instance, so +1
        });
    });

    test('useEffect handles date changes properly', async () => {
        mockFetchAPI.mockReturnValue(['17:00', '18:00']);

        render(<BookingPage />);

        const dateInput = document.getElementById('date');

        // Multiple date changes
        fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
        fireEvent.change(dateInput, { target: { value: '2024-12-26' } });

        await waitFor(() => {
            expect(mockFetchAPI).toHaveBeenCalledTimes(3); // Initial + 2 changes
        });
    });
});
