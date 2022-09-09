import React from 'react';
import './info.css';
import '../footer/Footer.css';
// const {TELEFONO} = process.en
export default function Info() {
    return (
        // <div className="info-container">
        //     <div className="info">
        //         <h1>Informacion</h1>
        //         <div class="arrow"></div>
        //     </div>
        // </div>
        <div className="footer-sns">
            <div className="design-by">Luciano Ezequiel Diaz Ocampo</div>
            <div className="sns-links">
                <a
                    href="https://www.linkedin.com/in/luciano-diaz/"
                    target="blank"
                >
                    <img
                        className="linkedin"
                        align="center"
                        src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
                        alt="https://www.linkedin.com/in/luciano-diaz/"
                        // height="30px"
                        // width="40px"
                    />
                </a>
                <a href="https://github.com/LuchoD99" target="blank">
                    <img
                        className="github"
                        align="center"
                        src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/github.svg"
                        alt="https://github.com/LuchoD99"
                        // height="30px"
                        // width="40px"
                    />
                </a>
            </div>
        </div>
    );
}
