import React, { Fragment } from 'react'
import '../assets/About.css'

function About() {
  return (
    <Fragment>
      <div className='container__about' id='home'>
        <header>
          <img src='assets/logo.png' alt='My Logo' />
        </header>
        <div className='img-container'>
          <img src='assets/mounten.png' alt='' className='mount' />
          <img src='assets/cloud-1.png' className='cloud-1' />
          <img src='assets/cloud-1.png' className='cloud-2' />
        </div>
        <div className='name'>
          <h1>I'm Shivesh</h1>
        </div>
      </div>
      <div className='info'>
        <div className='info-content'>
          <img src='assets/info-img.png' alt='' />
          <h1>Hi</h1>
          <p>
            My name is Shivesh Mishra .I stay in Kanpur Uttar Pradesh, I have
            done my schooling from Puranchandra Vidyaniketan till 10th standard
            and The Jain International school till 12th std and post that i am
            currently pursuing my graduation in bachelor of science and
            technology from Pranveer Singh Institute of technology. Along with
            this ongoing degree i have done some technical certification in
            Python and Frontend .My strengths are I am a quick learner and have
            the ability to grasp new technologies, self-motivated I believe that
            no one can motivate us rather than our situations and I do my work
            with determination. My short-term goal is to get a good job in a
            reputed company and my long-term goal is to achieve a good position
            where I can build my career and the organisation too.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default About
