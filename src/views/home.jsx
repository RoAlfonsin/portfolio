//This is the home view:
// It is a functional component that returns a JSX element
// It contains four sections: Hero, About Me, Projects and Contact

import React from 'react'
import { Hero } from '../components/hero.jsx'
import { About } from '../components/about.jsx'

export const Home = () => {
    return (
        <div className='container-fluid p-0 bg-light'>
            <Hero />
            <About />
            <div className='row' id='projects'>
                <div className='col'>This is projects</div>
            </div>
            <div className='row' id='contact'>
                <div className='col'>This is contact</div>
            </div>
        </div>
    )
}