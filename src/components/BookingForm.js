function BookingForm() {
    return (
        <main className="booking-page">
            <section className="booking-hero">
                <div className="booking-container">
                    <h1>Reserve a Table</h1>
                    <p>Book your table at Little Lemon for an unforgettable Mediterranean dining experience.</p>
                </div>
            </section>
            
            <section className="booking-form-section">
                <div className="booking-container">
                    <form className="booking-form">
                        <div className="form-group">
                            <label htmlFor="date">Choose date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Choose time:</label>
                            <select id="time" name="time" required>
                                <option value="">Select a time</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="guests">Number of guests:</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                max="10"
                                defaultValue="1"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="occasion">Occasion:</label>
                            <select id="occasion" name="occasion">
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Date">Date</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <button type="submit" className="submit-btn">Make Your Reservation</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default BookingForm;
