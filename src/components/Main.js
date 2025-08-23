import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Chicago from './Chicago';

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Chicago />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage />
                    }
                />
                <Route path="/menu" element={<div>Menu Page - Coming Soon</div>} />
                <Route path="/order" element={<div>Order Online - Coming Soon</div>} />
                <Route path="/login" element={<div>Login Page - Coming Soon</div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
}

export default Main;
