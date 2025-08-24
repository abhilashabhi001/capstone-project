import './ConfirmedBooking.css';

function ConfirmedBooking() {
    return (
        <main className="confirmed-booking" role="main">
            <div className="confirmed-container">
                <div className="confirmation-card">
                    <div className="success-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#495E57"/>
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h1 className="confirmation-title">Booking Confirmed!</h1>
                    <p className="confirmation-message">
                        Thank you for choosing Little Lemon. We look forward to providing you with an unforgettable Mediterranean dining experience!
                    </p>
                    <div className="confirmation-details">
                        <p>You will receive a confirmation email shortly with all the details.</p>
                        <p>If you need to make any changes, please contact us at least 24 hours in advance.</p>
                    </div>
                    <div className="confirmation-actions">
                        <button className="btn-primary" onClick={() => window.location.href = '/'}>
                            Back to Home
                        </button>
                        <button className="btn-secondary" onClick={() => window.location.href = '/booking'}>
                            Make Another Reservation
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ConfirmedBooking;