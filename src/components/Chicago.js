import React, { memo } from 'react';
import restaurant from '../assets/images/restaurant.jpg';
import MarioAndAdrian from '../assets/images/MarioAndAdrian.jpg'
import MarioAndAdrian1 from '../assets/images/MarioAndAdrian1.jpg'
import restaurantChef from '../assets/images/restaurantChef.jpg';

const Chicago = memo(() => {
    return (
        <section id="about" className="chicago-section">
            <div className="chicago-container">
                <div className="chicago-content">
                    <div className="chicago-text">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>
                            Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                            Despite the city's diversity, the two brothers recognized the lack of 
                            authentic Mediterranean cuisine in Chicago, and were inspired to bring 
                            the flavors of their hometown in Italy to the people of Chicago.
                        </p>
                        <p>
                            The two brothers continue to oversee the Little Lemon restaurant, nearly 
                            thirty years later, making sure that it continues to provide a taste of 
                            the Mediterranean for the local Chicago community.
                        </p>
                    </div>
                    <div className="chicago-images">
                        <img 
                            src={restaurant} 
                            alt="Chef Mario preparing food" 
                            className="chef-image"
                            loading="lazy"
                            decoding="async"
                        />
                        <img 
                            src={MarioAndAdrian} 
                            alt="Mario and Adrian brothers" 
                            className="chef-image"
                            loading="lazy"
                            decoding="async"
                        />
                        <img 
                            src={MarioAndAdrian1} 
                            alt="Restaurant dining area" 
                            className="chef-image"
                            loading="lazy"
                            decoding="async"
                        />
                        <img 
                            src={restaurantChef} 
                            alt="Restaurant chef" 
                            className="chef-image"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Chicago;
