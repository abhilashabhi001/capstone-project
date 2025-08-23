import React, { memo } from 'react';
import lemonDesert from '../assets/images/lemonDessert.jpg';
import greekSalad from '../assets/images/greekSalad.jpg';
import bruchetta from '../assets/images/bruchetta.svg';

const Specials = memo(() => {
    return (
        <section className="specials-section" role="region" aria-labelledby="specials-heading">
            <div className="specials-container">
                <header className="specials-header">
                    <h2 id="specials-heading">This week's specials!</h2>
                    <button
                        className="online-menu-btn"
                        role="button"
                        aria-describedby="menu-description"
                    >
                        Online Menu
                    </button>
                    <span id="menu-description" className="sr-only">
                        View full menu online
                    </span>
                </header>

                <div className="specials-grid" role="list" aria-label="Weekly special dishes">
                    <article className="special-card" role="listitem">
                        <img
                            src={greekSalad}
                            alt="Fresh Greek salad with feta cheese, olives, and vegetables"
                            className="special-image"
                            loading="lazy"
                            role="img"
                            style={{ willChange: 'transform' }}
                        />
                        <div className="special-content">
                            <header className="special-header">
                                <h4>Greek Salad</h4>
                                <span className="price" aria-label="Price">$12.99</span>
                            </header>
                            <p className="special-description">
                                The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <footer className="special-footer">
                                <button
                                    className="order-delivery-info"
                                    role="button"
                                    aria-label="Order Greek salad for delivery"
                                >
                                    Order a delivery <span className="delivery-icon" role="img" aria-label="delivery icon">🛵</span>
                                </button>
                            </footer>
                        </div>
                    </article>

                    <article className="special-card" role="listitem">
                        <img
                            src={bruchetta}
                            alt="Traditional bruschetta with tomatoes and basil on toasted bread"
                            className="special-image"
                            loading="lazy"
                            role="img"
                            style={{ willChange: 'transform' }}
                        />
                        <div className="special-content">
                            <header className="special-header">
                                <h4>Bruschetta</h4>
                                <span className="price" aria-label="Price">$5.99</span>
                            </header>
                            <p className="special-description">
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <footer className="special-footer">
                                <button
                                    className="order-delivery-info"
                                    role="button"
                                    aria-label="Order Bruschetta for delivery"
                                >
                                    Order a delivery <span className="delivery-icon" role="img" aria-label="delivery icon">🛵</span>
                                </button>
                            </footer>
                        </div>
                    </article>

                    <article className="special-card" role="listitem">
                        <img
                            src={lemonDesert}
                            alt="Delicious lemon dessert cake with cream and garnish"
                            className="special-image"
                            loading="lazy"
                            role="img"
                            style={{ willChange: 'transform' }}
                        />
                        <div className="special-content">
                            <header className="special-header">
                                <h4>Lemon Dessert</h4>
                                <span className="price" aria-label="Price">$5.00</span>
                            </header>
                            <p className="special-description">
                                This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <footer className="special-footer">
                                <button
                                    className="order-delivery-info"
                                    role="button"
                                    aria-label="Order Lemon dessert for delivery"
                                >
                                    Order a delivery <span className="delivery-icon" role="img" aria-label="delivery icon">🛵</span>
                                </button>
                            </footer>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
});

export default Specials;
