//This section is the bitacora view, it is the view that shows the project named bitacora

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bitacoraVideo from "../assets/bitacora/bitacoraVideo.webm";
import bitacoraHome from "../assets/bitacora/bitacoraHome.jpg";
import bitacoraLogin from "../assets/bitacora/bitacoraLogin.jpg";
import bitacoraLoginAlert from "../assets/bitacora/bitacoraLoginAlert.png";
import bitacoraNavbar from "../assets/bitacora/bitacoraNavbar.jpg";
import bitacoraPackageDetails from "../assets/bitacora/bitacoraPackageDetails.jpg";
import bitacoraPayments from "../assets/bitacora/bitacoraPayments.jpg";
import bitacoraReservation from "../assets/bitacora/bitacoraReservation.jpg";
import bitacoraReservation2 from "../assets/bitacora/bitacoraReservation2.png";
import bitacoraReservationAlert from "../assets/bitacora/bitacoraReservationAlert.jpg";

export const Bitacora = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])  
    return (
        <div className="container-fluid bg-light text-center">
        <div className="container bg-light text-center" id="">
            <h1>Bitacora</h1>
            <Link to='https://github.com/RoAlfonsin/bitacora-web' target='_blank' className='link-secondary mx-2'>
                <i className='bi bi-github me-2' style={{fontSize: "2rem"}}></i>
            </Link>
            <div className="row p-2">
                <div className="col-12 col-lg-6 text-start d-flex flex-column justify-content-evenly">
                    <p className="lead ms-1">Web-based application designed to facilitate reservations for coworking spaces on mobile devices.</p>
                    <p className="lead ms-1">Project Role: Full-stack developer.</p>
                    <p className="lead ms-1">Frontend: User interface optimized for mobile devices created using Javascript, React, HTML and Bootstrap.</p>
                    <p className="lead ms-1">Backend: REST API created using Python and Flask allowing users to manage reservations, buy packages, check appointments, login and register.</p>
                    <p className="lead ms-1">Database: PostgreSQL and SQLAlquemy used to manage users information, packages and appointments.</p>
                </div>
                <div className="col-12 col-lg-6 text-center">
                    <video controls height="640">
                        <source src={bitacoraVideo} type="video/webm" />
                    </video>
                </div>    

            </div>
            <div className="row">
                
                <div className="col">
                    <h4>Screenshots</h4>
                    <div className="col">
                        <img src={bitacoraHome} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraLogin} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraLoginAlert} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraNavbar} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraPackageDetails} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraPayments} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraReservation} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraReservation2} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                        <img src={bitacoraReservationAlert} className="img-thumbnail m-2" style={{maxHeight: "640px"}}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};