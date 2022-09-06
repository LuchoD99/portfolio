import React from 'react';
import './Footer.css';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Luciano Ezequiel Diaz Ocampo</h1>
            </div>
            <div className="footer-contact">
                <h3>Contactame</h3>
                <p>Contasctos</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">By Luciano Diaz</div>
                <div className="sns-link">
                    <a
                        href="https://www.linkedin.com/in/luciano-diaz/"
                        target="blank"
                    >
                        <img
                            align="center"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                            alt="https://www.linkedin.com/in/luciano-diaz/"
                            height="30"
                            width="40"
                        />
                    </a>
                    <a href="https://github.com/LuchoD99" target="blank">
                        <img
                            align="center"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/github.svg"
                            alt="https://github.com/LuchoD99"
                            height="30"
                            width="40"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
