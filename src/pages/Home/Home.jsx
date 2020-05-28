import React from 'react';

import About from '../../sections/About';
import Features from "../../sections/Features";
import Tours from '../../sections/Tours';
import Stories from '../../sections/Stories';
import Book from '../../sections/Book';

const Home = () => {
    return (
        <>
            <About />
            <Features />
            <Tours />
            <Stories />
            <Book />
        </>
    )
}

export default Home;