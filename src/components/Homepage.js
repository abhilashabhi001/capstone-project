import React, { memo } from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const Homepage = memo(() => {
    return (
        <>
            <CallToAction />
            <Specials />
            <CustomersSay />
        </>
    );
});

export default Homepage;
