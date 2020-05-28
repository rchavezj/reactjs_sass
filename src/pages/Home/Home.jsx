import React from 'react';

import About from './sections/About';
import Features from "./sections/Features";
import Tours from './sections/Tours';
import Stories from './sections/Stories';
import Book from './sections/Book';

import Header from '../../layout/Header/Header';

const Home = () => {
    return (
        <>
            <Header />
            <About />
            {/* <Features />
            <Tours />
            <Stories />
            <Book /> */}
        </>
    )
}

export default Home;