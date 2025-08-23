import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Homepage from './Homepage';
import BookingForm from './BookingForm';
import Chicago from './Chicago';
import { useEffect } from 'react';

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Chicago />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/menu" element={<div>Menu Page - Coming Soon</div>} />
                <Route path="/order" element={<div>Order Online - Coming Soon</div>} />
                <Route path="/login" element={<div>Login Page - Coming Soon</div>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
}

export default Main;
