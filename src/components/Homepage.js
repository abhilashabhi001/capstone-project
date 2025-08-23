import React, { memo } from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const Homepage = memo(() => {
    return (
        <div role="main" aria-label="Little Lemon Restaurant Homepage">
            <CallToAction />
            <Specials />
            <CustomersSay />
        </div>
    );
});

export default Homepage;
