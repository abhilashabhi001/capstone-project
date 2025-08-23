import React, { memo } from 'react';
import lemonDesert from '../assets/images/lemonDessert.jpg';
import greekSalad from '../assets/images/greekSalad.jpg';
import bruchetta from '../assets/images/bruchetta.svg';

const Specials = memo(() => {
    return (
        <section className="specials-section">
            <div className="specials-container">
                <header className="specials-header">
                    <h2>This week's specials!</h2>
                    <button className="online-menu-btn">Online Menu</button>
                </header>
                
                <div className="specials-grid">
                    <article className="special-card">
                        <img 
                            src={greekSalad} 
                            alt="Greek Salad" 
                            className="special-image"
                            loading="lazy"
                            style={{ willChange: 'transform' }}
                        />
                        <div className="special-content">
                            <header className="special-header">
                                <h4>Greek Salad</h4>
                                <span className="price">$12.99</span>
                            </header>
                            <p className="special-description">
                                The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <footer className="special-footer">
                                 <button className="order-delivery-info">Order a delivery <span className="delivery-icon">🛵</span></button>
                            </footer>
                        </div>
                    </article>

                    <article className="special-card">
                        <img 
                            src={bruchetta} 
                            alt="Bruschetta" 
                            className="special-image"
                            loading="lazy"
                            style={{ willChange: 'transform' }}
                        />
                        <div className="special-content">
                            <header className="special-header">
                                <h4>Bruschetta</h4>
                                <span className="price">$5.99</span>
                            </header>
                            <p className="special-description">
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <footer className="special-footer">
                                 <button className="order-delivery-info">Order a delivery <span className="delivery-icon">🛵</span></button>
                            </footer>
                        </div>
                    </article>

                    <article className="special-card">
                        <img 
                            src={lemonDesert} 
                            alt="Lemon Dessert" 
                            className="special-image"
                            loading="lazy"
                            style={{ willChange: 'transform' }}
                        />
                        <div className="special-content">
                            <header className="special-header">
                                <h4>Lemon Dessert</h4>
                                <span className="price">$5.00</span>
                            </header>
                            <p className="special-description">
                                This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <footer className="special-footer">
                                 <button className="order-delivery-info">Order a delivery <span className="delivery-icon">🛵</span></button>
                            </footer>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
});

export default Specials;
