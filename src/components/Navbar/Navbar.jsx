import React from 'react';
import './Navbar.css';
export default function Navbar({ scrollHeight }) {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrollHeight > 20 ? 'scrolling' : null}`}>
            <div className="navbar-logo" onClick={() => toTheTop()}>
                Luciano Ezequiel Diaz Ocampo
            </div>
        </nav>
    );
}
