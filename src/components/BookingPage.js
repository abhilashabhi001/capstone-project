import './BookingPage.css';
import BookingForm from "./BookingForm";
import { useReducer, useEffect, useCallback, useState } from 'react';


function getAvailableTimes(date) {
    if (window.fetchAPI) {
        return window.fetchAPI(date);
    }

    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function initializeTimes() {
    return [];
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'SET_TIMES':
            return action.times;
        default:
            return state;
    }
}

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [selectedDate, setSelectedDate] = useState(null);

    // Memoized function to fetch times on component mount
    const fetchTimesForDate = useCallback((dateString) => {
        const date = new Date(dateString);
        const times = getAvailableTimes(date);
        dispatch({ type: 'SET_TIMES', times });
    }, []);

    // Effect for initializing times on component mount
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        fetchTimesForDate(today);
    }, [fetchTimesForDate]);

    // Effect for updating times when selected date changes
    useEffect(() => {
        if (selectedDate) {
            fetchTimesForDate(selectedDate);
        }
    }, [selectedDate, fetchTimesForDate]);

    const handleDispatch = useCallback((action) => {
        if (action.type === 'UPDATE_TIMES') {
            setSelectedDate(action.date);
        } else {
            dispatch(action);
        }
    }, []);

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={handleDispatch}
        />
    );
}

export default BookingPage;
