import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {

    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Birthday"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'date') {
            dispatch({
                type: 'UPDATE_TIMES',
                date: value
            });
        }

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        setForm({
            date: "",
            time: "",
            guests: 1,
            occasion: "Birthday"
        });
    }
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
                    <form className="booking-form" onSubmit={submitForm}>
                        <div className="form-group">
                            <label htmlFor="date">Choose date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Choose time:</label>
                            <select
                                id="time"
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a time</option>
                                {availableTimes.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
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
                                value={form.guests}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="occasion">Occasion:</label>
                            <select
                                id="occasion"
                                name="occasion"
                                value={form.occasion}
                                onChange={handleChange}
                            >
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
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
