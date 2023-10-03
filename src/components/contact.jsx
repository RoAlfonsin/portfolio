//This is the contact section that includes a button group
//The button group has 4 buttons that are: WhatsApp, LinkedIn, GitHub, and Email

import React from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <section id='contact'>
            <div className='container-fluid border border-0 m-0'>
                <div className='row d-flex flex-row'>
                    <div className='col-12 col-lg-3 p-0'>
                        <Link to='https://wa.me/525549504240' target='blank' className='btn btn-secondary w-100 m-0 rounded-0 p-2 bg-success border border-0'>
                            <i className='bi bi-whatsapp me-2' style={{fontSize: "2rem"}}> WhatsApp</i>
                        </Link>
                    </div>
                    <div className='col-12 col-lg-3 p-0'>
                        <Link to='https://github.com/RoAlfonsin' target='blank' className='btn btn-secondary w-100 m-0 rounded-0 p-2 bg-dark border border-0'>
                            <i className='bi bi-github me-2' style={{fontSize: "2rem"}}> GitHub</i>
                        </Link>
                    </div>
                    <div className='col-12 col-lg-3 p-0'>
                        <Link to='https://www.linkedin.com/in/rodrigo-alfonsin-de-la-vega' target='blank' className='btn btn-secondary w-100 m-0 rounded-0 p-2 bg-primary border border-0'>
                            <i className='bi bi-linkedin me-2' style={{fontSize: "2rem"}}> LinkedIn</i>
                        </Link>
                    </div>
                    <div className='col-12 col-lg-3 p-0'>
                        <Link to='mailto: ro@roalfonsin.com' target='blank' className='btn btn-secondary w-100 m-0 rounded-0 p-2 bg-secondary border border-0'>
                            <i className='bi bi-envelope me-2' style={{fontSize: "2rem"}}> Email</i>
                        </Link>
                    </div>        
                </div>
            </div>
        </section>
    );
};