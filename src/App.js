import React, { useEffect, useState } from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Silder from './components/slider/slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import Skill from './components/Skill/Skill';
function App() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [scrollHeight]);
    return (
        <div className="App">
            <Navbar scrollHeight={scrollHeight} />
            <Cover />
            <About />
            <Skill />
            <Silder />
            <Info />
            <Footer />
        </div>
    );
}

export default App;
