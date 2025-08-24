import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {
    return (
        <main role="main" aria-label="Main content">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Chicago />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage />
                    }
                />
                <Route path="/menu" element={<div role="region" aria-label="Menu page placeholder">Menu Page - Coming Soon</div>} />
                <Route path="/order" element={<div role="region" aria-label="Order online page placeholder">Order Online - Coming Soon</div>} />
                <Route path="/login" element={<div role="region" aria-label="Login page placeholder">Login Page - Coming Soon</div>} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="*" element={<ConfirmedBooking to="/" replace />} />
            </Routes>
        </main>
    );
}

export default Main;
