import React from 'react';
import './About.css';
import perfil from '../../images/face.jpg';
export default function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>
                    Soy un Full Stack Developer.Soy una persona trabajadora
                    enfocado en el proyecto, soy joven y con mucha energía para
                    aprender y enseñar durante el proyecto. Haciendo proyectos
                    personales para mejorar
                </h3>
            </div>
            <div className="about-img">
                <img src={perfil} alt="img not foundt" />
            </div>
        </div>
    );
}
