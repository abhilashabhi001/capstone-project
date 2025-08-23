import BookingForm from "./BookingForm";
import { useReducer } from 'react';

function initializeTimes() {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00"
    ];
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initializeTimes();
        default:
            return state;
    }
}

function BookingPage() {
        const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
        />
    );
}

export default BookingPage;
