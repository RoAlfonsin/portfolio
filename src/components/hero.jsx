//This is a hero section that includes
//My name: Rodrigo Alfonsin
//My title: Full Stack Developer
//Links to my social media profiles using bootstrap icons
//A button to navigate to my about me section

import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import heroBackground from '../assets/heroBackground.jpg'

export const Hero = () => {
    return (
        <section  id='hero' className='vh-100 d-flex flex-column justify-content-center align-items-center bg-image' style={{maxHeight: "100rem", minHeight: "60rem", backgroundImage: `url(${heroBackground})`}}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 d-flex flex-column justify-content-center'>
                        <h5 className='ms-4 text-secondary'>Hi, my name is</h5>
                        <h1 className='display-2 ms-3 fw-bold'>Rodrigo Alfonsin</h1>
                        <h2 className='ms-3 fst-italic text-secondary'>Full Stack Developer</h2>
                        <div className='d-flex justify-content-center justify-content-md-start m-3'>
                            <Link to='https://github.com/RoAlfonsin/' target='_blank' className='link-secondary mx-2'>
                                <i className='bi bi-github me-2' style={{fontSize: "2rem"}}></i>
                            </Link>
                            <Link to='https://www.linkedin.com/in/rodrigo-alfonsin-de-la-vega/' target='_blank' className='link-secondary mx-2'>
                                <i className='bi bi-linkedin me-2' style={{fontSize: "2rem"}}></i>
                            </Link> 
                        </div>
                        <div className='d-flex justify-content-center justify-content-md-start m-3' style={{height:"20rem"}}>
                            <HashLink to='/#about-me' style={{height:"72px"}} className='link-secondary'>
                                <i className='bi bi-arrow-down-circle-fill me-2' style={{fontSize: "4rem"}}></i>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

