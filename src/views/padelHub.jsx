//This section is the Padel hub view, it is the view that shows the project named padel hub

import React from "react";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";

import padelHubImage1 from '../assets/padelHub/padelHub01.png';
import padelHubImage2 from '../assets/padelHub/padelHub02.png';
import padelHubImage3 from '../assets/padelHub/padelHub03.png';
import padelHubImage4 from '../assets/padelHub/padelHub04.png';
import padelHubImage5 from '../assets/padelHub/padelHub05.png';

export const PadelHub = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])  
    return (
        <div className="container-fluid bg-light text-center">
            <Navbar />
            <div className="container bg-light text-center">
                <h1>Padel Hub</h1>
                <div className="row p-2">
                    <div className="col-12 text-start d-flex flex-column justify-content-evenly">
                        <p className="lead ms-1">Web-based application designed to streamline the organization of games and events within padel, pickleball and tennis clubs.</p>
                        <p className="lead ms-1">Project Role: Frontend developer / Designed and developed interface components, views, and interactive elements.</p>
                        <p className="lead ms-1">Technologies used: Laravel, PHP, JavaScript, Vue.js, MySQL.</p>
                    </div>  
                </div>
            </div>
            <div className="row">               
                <div className="col">
                    <h4>Screenshots</h4>
                    <div className="col">
                        <img src={padelHubImage1} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={padelHubImage2} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={padelHubImage3} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={padelHubImage4} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={padelHubImage5} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};