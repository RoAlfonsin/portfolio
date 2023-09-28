//This is the home view:
// It is a functional component that returns a JSX element
// It contains four sections: Hero, About Me, Projects and Contact

import React from 'react'

export const Home = () => {
    return (
        <div className='container-fluid'>
            <div className='row bg-secondary-subtle' id='hero'>
                <div className="col">This is hero</div>
            </div>
            <div className='row' id='about-me'>
                <div className='col'>This is about me</div>
            </div>
            <div className='row' id='projects'>
                <div className='col'>This is projects</div>
            </div>
            <div className='row' id='contact'>
                <div className='col'>This is contact</div>
            </div>
        </div>
    )
}