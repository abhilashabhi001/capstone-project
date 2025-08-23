import restaurantfood from '../assets/restauranfood.jpg'
import Specials from './Specials';

function Main() {
    return (
        <main>
            <section className="main-content">
                <div className="hero-section">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="reserve-btn">Reserve a Table</button>
                    </div>
                    <div className="hero-image">
                        <img src={restaurantfood} alt="Little Lemon Restaurant" />
                    </div>
                </div>
            </section>
            <Specials />
        </main>
    );
}

export default Main;
