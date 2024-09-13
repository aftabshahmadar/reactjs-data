import React from 'react';
import Header from "./components/user/header"; // Capitalize the 'H' in header
import Navbar from './components/user/Navbar';
import Slider from './components/user/Slider'; // Fix the typo: from 'Sliedr' to 'Slider'
import Content from './components/user/Content';
import Footer from "./components/user/Footer";

export default function Layout() {
    return (
        <>
            {/* Landing page header panel components reused */}
            <Header />
            {/* Landing page navbar panel components reused */}
            <Navbar />
            {/* Landing page slider panel components reused */}
            <Slider />
            {/* Landing page content panel components reused */}
            <Content />
            {/* Landing page footer panel components reused */}
            <Footer />
        </>
    );
}
