import React from 'react';
import './About.css';
import perfil from '../../images/face.jpg';
export default function About() {
    // const perfil = 'https://avatars.githubusercontent.com/u/92535121?v=4';
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
            <div className="skill">
                <h3>Habilidades</h3>
                <p>HTML</p>
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>Javascript</p>
                <img
                    align="center"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/javascript.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>CSS</p>
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>React</p>
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>Redux</p>
                <img
                    align="center"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/redux.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>Node.JS</p>
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>Express</p>
                <img
                    align="center"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/express.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>PostgreSQL</p>
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>Sequelize</p>
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>Git</p>
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
            </div>
            <div className="about-img">
                <img src={perfil} alt="img not foundt" />
            </div>
        </div>
    );
}
