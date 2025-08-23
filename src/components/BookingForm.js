import { useState, useCallback, useEffect } from "react";

function BookingForm({ availableTimes, dispatch }) {
    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Birthday"
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Memoized change handler to prevent unnecessary re-renders
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    }, []);

    // Effect to handle date changes - proper side effect management
    useEffect(() => {
        if (form.date && dispatch) {
            dispatch({
                type: 'UPDATE_TIMES',
                date: form.date
            });
        }
    }, [form.date, dispatch]);

    // Effect to reset time when available times change
    useEffect(() => {
        if (form.time && !availableTimes.includes(form.time)) {
            setForm(prevForm => ({
                ...prevForm,
                time: ""
            }));
        }
    }, [availableTimes, form.time]);

    // Memoized submit handler
    const submitForm = useCallback(async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        // Validation
        if (!form.date || !form.time) {
            alert('Please select both date and time');
            return;
        }

        setIsSubmitting(true);

        const formData = {
            date: form.date,
            time: form.time,
            guests: parseInt(form.guests),
            occasion: form.occasion
        };

        try {
            let success = false;

            // Use submitAPI if available, otherwise simulate success
            if (window.submitAPI) {
                success = window.submitAPI(formData);
            }

            if (success) {
                setForm({
                    date: "",
                    time: "",
                    guests: 1,
                    occasion: "Birthday"
                });
                alert('Reservation successful!');
            } else {
                alert('Failed to submit reservation. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }, [form, isSubmitting]);
    return (
        <main className="booking-page" role="main" aria-labelledby="booking-title">
            <section className="booking-hero" role="banner">
                <div className="booking-container">
                    <h1 id="booking-title">Reserve a Table</h1>
                    <p>Book your table at Little Lemon for an unforgettable Mediterranean dining experience.</p>
                </div>
            </section>
            <section className="booking-form-section" role="region" aria-labelledby="form-heading">
                <div className="booking-container">
                    <h2 id="form-heading" className="sr-only">Reservation Form</h2>
                    <form
                        className="booking-form"
                        onSubmit={submitForm}
                        role="form"
                        aria-label="Restaurant table reservation form"
                        noValidate
                    >
                        <div className="form-group" role="group" aria-labelledby="date-label">
                            <label id="date-label" htmlFor="date">Choose date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                required
                                aria-required="true"
                                aria-describedby="date-help"
                            />
                            <span id="date-help" className="sr-only">
                                Select your preferred reservation date
                            </span>
                        </div>

                        <div className="form-group" role="group" aria-labelledby="time-label">
                            <label id="time-label" htmlFor="time">Choose time:</label>
                            <select
                                id="time"
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                required
                                aria-required="true"
                                aria-describedby="time-help"
                            >
                                <option value="">Select a time</option>
                                {availableTimes?.map((time) => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <span id="time-help" className="sr-only">
                                Available times based on selected date
                            </span>
                        </div>

                        <div className="form-group" role="group" aria-labelledby="guests-label">
                            <label id="guests-label" htmlFor="guests">Number of guests:</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                max="10"
                                value={form.guests}
                                onChange={handleChange}
                                required
                                aria-required="true"
                                aria-describedby="guests-help"
                            />
                            <span id="guests-help" className="sr-only">
                                Enter number of guests between 1 and 10
                            </span>
                        </div>

                        <div className="form-group" role="group" aria-labelledby="occasion-label">
                            <label id="occasion-label" htmlFor="occasion">Occasion:</label>
                            <select
                                id="occasion"
                                name="occasion"
                                value={form.occasion}
                                onChange={handleChange}
                                aria-describedby="occasion-help"
                            >
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                            <span id="occasion-help" className="sr-only">
                                Optional: Select the occasion for your visit
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            role="button"
                            aria-describedby="submit-help"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Make Your Reservation'}
                        </button>
                        <span id="submit-help" className="sr-only">
                            Submit your reservation request
                        </span>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default BookingForm;
