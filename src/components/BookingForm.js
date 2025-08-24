import './BookingForm.css';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function BookingForm({ availableTimes, dispatch }) {
    const navigate = useNavigate();

    // Formik validation schema using Yup
    const validationSchema = Yup.object({
        date: Yup.date()
            .required('Date is required')
            .min(new Date().toISOString().split('T')[0], 'Date cannot be in the past')
            .typeError('Please enter a valid date'),

        time: Yup.string()
            .required('Time is required')
            .oneOf(availableTimes, 'Selected time is not available'),

        guests: Yup.number()
            .required('Number of guests is required')
            .min(1, 'At least 1 guest is required')
            .max(10, 'Maximum 10 guests allowed')
            .integer('Number of guests must be a whole number')
            .typeError('Please enter a valid number'),

        occasion: Yup.string()
            .required('Occasion is required')
            .oneOf(['Birthday', 'Anniversary', 'Date Night', 'Business Dinner', 'Family Celebration', 'Other'], 'Please select a valid occasion')
    });

    // Initial form values
    const initialValues = {
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday'
    };

    // Handle date change to update available times
    const handleDateChange = (date, setFieldValue) => {
        setFieldValue('date', date);
        setFieldValue('time', ''); // Reset time when date changes

        if (date && dispatch) {
            dispatch({
                type: 'UPDATE_TIMES',
                date: date
            });
        }
    };

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const formData = {
                date: values.date,
                time: values.time,
                guests: parseInt(values.guests),
                occasion: values.occasion
            };

            let success = false;

            // Use submitAPI if available, otherwise simulate success
            if (window.submitAPI) {
                success = window.submitAPI(formData);
            } else {
                // Fallback - simulate successful submission
                success = true;
            }

            if (success) {
                resetForm();
                setStatus({ type: 'success', message: 'Reservation submitted successfully!' });
                navigate("/confirmed");
            } else {
                setStatus({ type: 'error', message: 'Failed to submit reservation. Please try again.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="booking-page" role="main" aria-labelledby="booking-title">
            <section className="booking-hero" role="banner">
                <div className="booking-container">
                    <h1 id="booking-title">Reserve a Table</h1>
                    <p>Book your table at Little Lemon for an unforgettable Mediterranean dining experience.</p>
                </div>
            </section>
            <section className="booking-form-section" aria-labelledby="form-heading">
                <div className="booking-container">
                    <h2 id="form-heading" className="sr-only">Reservation Form</h2>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        validateOnChange={true}
                        validateOnBlur={true}
                    >
                        {({ values, errors, touched, isSubmitting, isValid, status, setFieldValue }) => (
                            <Form
                                className="booking-form"
                                role="form"
                                aria-label="Restaurant table reservation form"
                                noValidate
                            >
                                {/* Date Field */}
                                <div className="form-group" role="group" aria-labelledby="date-label">
                                    <label id="date-label" htmlFor="date">Choose date: *</label>
                                    <Field name="date">
                                        {({ field, form }) => (
                                            <input
                                                type="date"
                                                id="date"
                                                {...field}
                                                min={new Date().toISOString().split('T')[0]}
                                                aria-required="true"
                                                aria-describedby="date-help date-error"
                                                aria-invalid={form.errors.date && form.touched.date ? 'true' : 'false'}
                                                className={form.errors.date && form.touched.date ? 'invalid' : ''}
                                                onChange={(e) => handleDateChange(e.target.value, form.setFieldValue)}
                                            />
                                        )}
                                    </Field>
                                    <span id="date-help" className="sr-only">
                                        Select your preferred reservation date (today or later)
                                    </span>
                                    <ErrorMessage name="date" component="span" className="error-message" id="date-error" role="alert" />
                                </div>

                                {/* Time Field */}
                                <div className="form-group" role="group" aria-labelledby="time-label">
                                    <label id="time-label" htmlFor="time">Choose time: *</label>
                                    <Field
                                        as="select"
                                        id="time"
                                        name="time"
                                        aria-required="true"
                                        aria-describedby="time-help time-error"
                                        aria-invalid={errors.time && touched.time ? 'true' : 'false'}
                                        className={errors.time && touched.time ? 'invalid' : ''}
                                    >
                                        <option value="">Select a time</option>
                                        {availableTimes?.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </Field>
                                    <span id="time-help" className="sr-only">
                                        Available times based on selected date
                                    </span>
                                    <ErrorMessage name="time" component="span" className="error-message" id="time-error" role="alert" />
                                </div>

                                {/* Guests Field */}
                                <div className="form-group" role="group" aria-labelledby="guests-label">
                                    <label id="guests-label" htmlFor="guests">Number of guests: *</label>
                                    <Field
                                        type="number"
                                        id="guests"
                                        name="guests"
                                        min="1"
                                        max="10"
                                        step="1"
                                        placeholder="Enter number between 1-10"
                                        aria-required="true"
                                        aria-describedby="guests-help guests-error"
                                        aria-invalid={errors.guests && touched.guests ? 'true' : 'false'}
                                        className={errors.guests && touched.guests ? 'invalid' : ''}
                                    />
                                    <span id="guests-help" className="sr-only">
                                        Enter number of guests between 1 and 10
                                    </span>
                                    <ErrorMessage name="guests" component="span" className="error-message" id="guests-error" role="alert" />
                                </div>

                                {/* Occasion Field */}
                                <div className="form-group" role="group" aria-labelledby="occasion-label">
                                    <label id="occasion-label" htmlFor="occasion">Occasion: *</label>
                                    <Field
                                        as="select"
                                        id="occasion"
                                        name="occasion"
                                        aria-required="true"
                                        aria-describedby="occasion-help occasion-error"
                                        aria-invalid={errors.occasion && touched.occasion ? 'true' : 'false'}
                                        className={errors.occasion && touched.occasion ? 'invalid' : ''}
                                    >
                                        <option value="Birthday">Birthday</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Date Night">Date Night</option>
                                        <option value="Business Dinner">Business Dinner</option>
                                        <option value="Family Celebration">Family Celebration</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <span id="occasion-help" className="sr-only">
                                        Select the occasion for your visit
                                    </span>
                                    <ErrorMessage name="occasion" component="span" className="error-message" id="occasion-error" role="alert" />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className={`submit-btn ${(!isValid || isSubmitting || Object.keys(errors).length > 0) ? 'disabled' : ''}`}
                                    disabled={!isValid || isSubmitting || Object.keys(errors).length > 0}
                                    aria-label={isSubmitting ? 'Submitting reservation...' : 'Submit reservation form'}
                                    aria-describedby="submit-help"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Make Your Reservation'}
                                </button>
                                <span id="submit-help" className="sr-only">
                                    {(!isValid || Object.keys(errors).length > 0) ? 'Please fill in all required fields correctly' : 'Submit your reservation request'}
                                </span>

                                {/* Status Messages */}
                                {status && (
                                    <div className={`form-status ${status.type}`} role="alert" aria-live="polite">
                                        {status.message}
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </main>
    );
}

export default BookingForm;
