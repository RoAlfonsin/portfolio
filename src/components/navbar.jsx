//This is the navbar component:
// It is a functional component that returns a JSX element

import React from 'react'
import { HashLink } from 'react-router-hash-link';
import profileImage from '../assets/profileImage.png'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light p-3">
                <div className="container-fluid">
                    <HashLink to={'/#hero'} className='navbar-brand'>
                        <img src={profileImage} alt='logo' height='50px' className='mx-2 my-auto'/>
                        <span className='text-dark fw-bold mx-2 my-auto'>Rodrigo Alfonsin</span>
                    </HashLink>
                    
                    <div className="justify-content-end">
                        <div className="navbar-nav">
                            <HashLink smooth to={'/#about-me'} className='link-underline link-dark link-underline-opacity-0 link-underline-opacity-100-hover mx-5'>
                                <span className='text-dark fw-bold'>ABOUT ME</span>
                            </HashLink>
                            <HashLink smooth to={'/#projects'} className='link-underline link-dark link-underline-opacity-0 link-underline-opacity-100-hover mx-5'>
                                <span className='text-dark fw-bold'>PROJECTS</span>
                            </HashLink>
                            <HashLink smooth to={'/#contact'} className='link-underline link-dark link-underline-opacity-0 link-underline-opacity-100-hover mx-5'>
                                <span className='text-dark fw-bold'>CONTACT</span>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};