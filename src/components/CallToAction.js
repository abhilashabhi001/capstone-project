import './CallToAction.css';
import React, { memo } from 'react';
import restaurantfood from '../assets/images/restauranFood.jpg';
import { Link } from 'react-router-dom';

const CallToAction = memo(() => {
    return (
        <section className="main-content" role="region" aria-labelledby="hero-heading">
            <div className="hero-section">
                <div className="hero-text">
                    <h1 id="hero-heading">Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link
                        to="/booking"
                        className="reserve-btn"
                        role="button"
                        aria-describedby="reserve-description"
                    >
                        Reserve a Table
                    </Link>
                    <span id="reserve-description" className="sr-only">
                        Navigate to booking page to make a reservation
                    </span>
                </div>
                <div className="hero-image" role="img" aria-labelledby="hero-img-desc">
                    <img
                        src={restaurantfood}
                        alt="Delicious Mediterranean food served at Little Lemon restaurant"
                        loading="eager"
                        style={{
                            willChange: 'transform',
                            backfaceVisibility: 'hidden'
                        }}
                    />
                    <span id="hero-img-desc" className="sr-only">
                        Featured Mediterranean dish from Little Lemon restaurant
                    </span>
                </div>
            </div>
        </section>
    );
});

export default CallToAction;
