function CustomersSay() {
    return (
        <section className="customers-say">
            <div className="customers-container">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    <article className="testimonial-card">
                        <div className="rating">
                            <span className="stars">★★★★★</span>
                        </div>
                        <div className="customer-info">
                            <img src="/images/customer1.jpg" alt="Maria Rodriguez" className="customer-image" />
                            <h3>Maria Rodriguez</h3>
                        </div>
                        <p className="review-text">"The Greek salad was absolutely amazing! Fresh ingredients and authentic flavors. I'll definitely be coming back!"</p>
                    </article>

                    <article className="testimonial-card">
                        <div className="rating">
                            <span className="stars">★★★★★</span>
                        </div>
                        <div className="customer-info">
                            <img src="/images/customer2.jpg" alt="John Smith" className="customer-image" />
                            <h3>John Smith</h3>
                        </div>
                        <p className="review-text">"Best Mediterranean food in Chicago! The atmosphere is cozy and the staff is incredibly friendly."</p>
                    </article>

                    <article className="testimonial-card">
                        <div className="rating">
                            <span className="stars">★★★★☆</span>
                        </div>
                        <div className="customer-info">
                            <img src="/images/customer3.jpg" alt="Sarah Johnson" className="customer-image" />
                            <h3>Sarah Johnson</h3>
                        </div>
                        <p className="review-text">"Great family restaurant with traditional recipes. The lemon dessert was the perfect ending to our meal."</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;
