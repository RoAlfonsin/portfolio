//This is an about me section that includes
//A description of myself
//A list of my skills

import React from 'react'
import { HashLink } from 'react-router-hash-link'

export const About = () => {
    return (
    <section id='about-me' className='bg-light' style={{maxHeight: "200rem", minHeight: "60rem"}}>
        <div className='container'>
            <div className='row my-lg-4 d-none d-lg-block'>
                <h3 className='display-4 text-lg-center m-lg-4 fw-semibold'>About Me</h3>
            </div>
            <div className='row d-flex flex-row'>
                <div className='col-12 col-lg d-flex flex-column justify-content-center border'>
                    <p className='text-secondary mt-2'><b className='text-black'>Full Stack Developer</b> with a background in Industrial Engineering.</p>
                    <p className='text-secondary'>I am a dynamic <b className='text-black'>team player</b> with a strong interest in tackling complex projects. I'm deeply passionate about <b className='text-black'>computer science</b>, particularly intricate <b className='text-black'>algorithms and problem-solving</b>.</p>
                    <p className='text-secondary'>Backed by experience in commercial settings, I'm also an eager <b className='text-black'>autodidact</b>, constantly seeking to acquire new skills and knowledge.</p>
                    <p className='text-secondary'>Currently <b className='text-black'>looking for new opportunities</b> to grow as a developer.</p>
                </div>
                <div className="col-1 m-1 m-lg-0 p-0"></div>
                <div className='col-12 col-lg border'>
                    <p className='lead text-secondary text-center m-0 m-lg-1 d-none d-lg-block'><b className='text-black'>My Skills</b></p>
                    <div className='container-fluid d-flex flex-wrap p-1 justify-content-center'>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>HTML</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>CSS</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>JavaScript</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>React</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>Bootstrap</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>Python</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>SQL</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>Git</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>Flask</button>
                        <button type='button' className='btn btn-outline-secondary m-2 fw-bold disabled' style={{minWidth: "10rem"}}>SQLAlquemy</button>                     
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center justify-content-md-start my-1'>
                <HashLink to='https://flowcv.com/resume/vq3dgn6hkk' target='blanc' style={{height:"48px"}} className='link-secondary my-1 text-decoration-none'>
                    <i className='bi bi-arrow-right-circle-fill me-2' style={{fontSize: "2rem"}}>   View Full Résumé / CV</i>
                </HashLink>
                <HashLink to='/#projects' style={{height:"48px"}} className='link-secondary my-1 text-decoration-none'>
                    <i className='bi bi-arrow-down-circle-fill me-2' style={{fontSize: "2rem"}}>   Projects</i>
                </HashLink>
                <HashLink to='/#contact' style={{height:"48px"}} className='link-secondary my-1 text-decoration-none'>
                    <i className='bi bi-arrow-down-circle-fill me-2' style={{fontSize: "2rem"}}>   Contact</i>
                </HashLink>
            </div>
        </div>
    </section>
    )
};