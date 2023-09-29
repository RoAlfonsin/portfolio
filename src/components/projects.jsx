//This is a project section
//It includes three projects
//Each project has an image that uses half the row width and a description that uses the other half

import React from 'react'
import { HashLink } from 'react-router-hash-link'
import heroBackground from '../assets/heroBackground.jpg'

export const Projects = () => {
    return (
        <section id='projects' className='bg-image' style={{backgroundImage: `url(${heroBackground})`}}>
            <div className="container-fluid">
                <div className='row my-lg-4 d-none d-lg-block'>
                    <h3 className='display-4 text-lg-center fw-semibold'>Projects</h3>
                </div>
                <div className="row mb-2">
                    <div className="col-12 col-lg-6 d-flex justify-content-center p-2">
                        <img src="https://via.placeholder.com/600x300" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                        <h3 className="text-secondary mt-2">Ecommerce Toolkit</h3>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.</p>
                        <HashLink to='/project1' className='link-secondary text-decoration-none'>
                            <i className='bi bi-arrow-right-circle-fill me-2' style={{fontSize: "2rem"}}>   View Project</i>
                        </HashLink>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12 col-lg-6 d-flex justify-content-center p-2">
                        <img src="https://via.placeholder.com/600x300" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                        <h3 className="text-secondary mt-2">Padel Hub</h3>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.</p>
                        <HashLink to='/project2' className='link-secondary text-decoration-none'>
                            <i className='bi bi-arrow-right-circle-fill me-2' style={{fontSize: "2rem"}}>   View Project</i>
                        </HashLink>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12 col-lg-6 d-flex justify-content-center p-2">
                        <img src="https://via.placeholder.com/600x300" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                        <h3 className="text-secondary mt-2">Bitacora Coworking</h3>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.</p>
                        <HashLink to='/project3' className='link-secondary text-decoration-none'>
                            <i className='bi bi-arrow-right-circle-fill me-2' style={{fontSize: "2rem"}}>   View Project</i>
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    )
};