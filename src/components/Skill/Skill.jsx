import React from 'react';
import './Skill.css';
import Card from './Card/Card';
import css from '../../images/logo/css-3.png';
import express from '../../images/logo/expressjs.svg';
import html from '../../images/logo/html-5.png';
import javascript from '../../images/logo/js.png';
import nodeJS from '../../images/logo/nodejs.svg';
import postgreSQL from '../../images/logo/postgre.png';
import react from '../../images/logo/react.png';
import redux from '../../images/logo/redux.svg';
import sequelize from '../../images/logo/sequelizejs.svg';
export default function Skill() {
    const logos = [
        [css, 'css'],
        [express, 'express'],
        [html, 'html'],
        [javascript, 'javascript'],
        [nodeJS, 'nodeJS'],
        [postgreSQL, 'postgreSQL'],
        [react, 'react'],
        [redux, 'redux'],
        [sequelize, 'sequelize'],
    ];
    return (
        <div className="container_main">
            <h1 className="title">SKILSS</h1>
            <div className="container_logos">
                {logos.map((k, i) => (
                    <div className="logo" key={i}>
                        <Card img={k[0]} name={k[1]} />
                    </div>
                ))}
            </div>
        </div>
    );
}
/*
{/* <div className="nombre">
                <h3>SKILLS</h3>
            </div>
            <div className="columne-skill">
                <div>

                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                    />
                 <p>HTML</p> 
                    </div>
                    <div>

                    
                <img
                    align="center"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/javascript.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                />
                 <p>Javascript</p>
                </div>
                <div>

                
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>CSS</p> 
                </div>
                <div>

                
                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="img not fount"
                    height="30"
                    width="40"
                />
                <p>React</p>
                </div>
                <div>

                <img
                    align="center"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/redux.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                    />
             <p>Redux</p> 
                    </div>
                    <div>

                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                    />
                <p>Node.JS</p> 
                    </div>
                    <div>

                <img
                    align="center"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@7.9.0/icons/express.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                    />
                <p>Express</p> 
                    </div>
                    <div>

                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                />
                 <p>PostgreSQL</p>
                    </div>
                    <div>

                <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                    />
                 <p>Sequelize</p>
                    </div>
                 <img
                    align="center"
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="img not fount"
                    // height="30"
                    // width="40"
                /> 
                 <p>Git</p> 
            </div>
             <div className="desc">
                <p className="html">HTML</p>
                <p className="JS">Javascript</p>
                <p className="css">CSS</p>
                <p className="react">React</p>
                <p className="redux">Redux</p>
                <p className="node">Node.JS</p>
                <p className="express">Express</p>
                <p className="sql">PostgreSQL</p>
                <p className="sequelize">Sequelize</p>
            </div>  
            */
