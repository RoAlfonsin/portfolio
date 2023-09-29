//This is the home view:
// It is a functional component that returns a JSX element
// It contains four sections: Hero, About Me, Projects and Contact

import React from 'react'
import { Hero } from '../components/hero.jsx'
import { About } from '../components/about.jsx'
import { Projects } from '../components/projects.jsx'
import { Contact } from '../components/contact.jsx'
import heroBackground from '../assets/heroBackground.jpg'

export const Home = () => {
    return (
        <div className='container-fluid p-0 bg-image' style={{backgroundImage: `url(${heroBackground})`}}>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}