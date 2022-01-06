import React from 'react'
import './About.css'
import skills from './skills.png'
import Profile from './Profile'

function About() {
    return (

        <div className='About'>

            <div className='about__title'>
                <h1>David  Archer</h1>
            </div>

            <div className='about__descr'>
                <h3>I create responsive websites that are fast, easy to use, and built with best practices.</h3>
             
            </div>
           
            <div>
                <Profile />
            </div>

            <div className='about__skills'>
                <img src={skills} alt='' />
            </div>

  
         
            </div>
    )
}

export default About

