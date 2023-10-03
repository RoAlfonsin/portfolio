//This section is the ecommerce-toolkit view, it is the view that shows the project named bitacora

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import ecomVideo from "../assets/ecom/ecomVideo.webm";
import ecomImage1 from "../assets/ecom/ecomImage01.png";
import ecomImage2 from "../assets/ecom/ecomImage02.png";
import ecomImage3 from "../assets/ecom/ecomImage03.png";
import ecomImage4 from "../assets/ecom/ecomImage04.png";
import ecomImage5 from "../assets/ecom/ecomImage05.png";
import ecomImage6 from "../assets/ecom/ecomImage06.png";
import ecomImage7 from "../assets/ecom/ecomImage07.png";
import ecomImage8 from "../assets/ecom/ecomImage08.png";
import ecomImage9 from "../assets/ecom/ecomImage09.png";
import ecomImage10 from "../assets/ecom/ecomImage10.png";
import ecomImage11 from "../assets/ecom/ecomImage11.png";
import ecomImage12 from "../assets/ecom/ecomImage12.png";
import ecomImage13 from "../assets/ecom/ecomImage13.png";
import ecomImage14 from "../assets/ecom/ecomImage14.png";
import ecomImage15 from "../assets/ecom/ecomImage15.png";
import ecomImage16 from "../assets/ecom/ecomImage16.png";
import ecomImage17 from "../assets/ecom/ecomImage17.png";
import ecomImage18 from "../assets/ecom/ecomImage18.png";

export const EcommerceToolkit = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])  
    return (
        <div className="container-fluid bg-light text-center">
        <div className="container-fluid bg-light text-center">
            <h1>E-commerce Toolkit</h1>
            <Link to='https://github.com/4GeeksAcademy/ecommerce-toolkit' target='_blank' className='link-secondary mx-2'>
                <i className='bi bi-github me-2' style={{fontSize: "2rem"}}></i>
            </Link>
            <div className="row p-2">
                <div className="col-12 col-lg-6 text-start d-flex flex-column justify-content-evenly">
                    <p className="lead ms-1">Web-based application designed to streamline the process of creating and managing ecommerce platforms.</p>
                    <p className="lead ms-1">Project Role: Full-stack developer / Team leader.</p>
                    <p className="lead ms-1">Frontend: User interface created using Javascript, React, HTML and Bootstrap.</p>
                    <p className="lead ms-1">Backend: REST API created using Python and Flask allowing users to add items to cart and wishlist, view item details, modify items, search items, manage users, view sales details, manage to-dos.</p>
                    <p className="lead ms-1">Database: PostgreSQL and SQLAlquemy used to manage users, sales, wishlists, shopping carts, items and to-dos information.</p>
                </div>
                <div className="col-12 col-lg-6 text-center">
                    <video controls className="w-100">
                        <source src={ecomVideo} type="video/webm" />
                    </video>
                </div>    

            </div>
            <div className="row">
                
                <div className="col">
                    <h4>Screenshots</h4>
                    <div className="col">
                        <img src={ecomImage1} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage2} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage3} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage4} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage5} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage6} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage7} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage8} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage9} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage10} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage11} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage12} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage13} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage14} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage15} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage16} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage17} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                        <img src={ecomImage18} className="img-thumbnail m-2" style={{maxHeight: "450px"}}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};