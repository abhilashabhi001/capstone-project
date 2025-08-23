import React, { memo } from 'react';
import restaurantfood from '../assets/images/restauranFood.jpg';

const CallToAction = memo(() => {
    return (
        <section className="main-content">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="/booking" className="reserve-btn">Reserve a Table</a>
                </div>
                <div className="hero-image">
                    <img 
                        src={restaurantfood} 
                        alt="Little Lemon Restaurant"
                        loading="eager"
                        style={{
                            willChange: 'transform',
                            backfaceVisibility: 'hidden'
                        }}
                    />
                </div>
            </div>
        </section>
    );
});

export default CallToAction;
