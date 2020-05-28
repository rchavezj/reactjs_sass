import React from 'react';

import About from './sections/About';
import Features from "./sections/Features";
import Tours from './sections/Tours';
import Stories from './sections/Stories';
import Book from './sections/Book';

import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Navigation from '../../layout/Navigation/Navigation';
const Home = () => {
    return (
        <>
            <Navigation />
            <Header />
            <About />
            <Features />
            <Tours />
            <Stories />
            <Book />
            <Footer />
        </>
    )
}

export default Home;