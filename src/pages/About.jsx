import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className='mb-4 text-1xl font-light'>
      Welcome to our website! We are proud to present a user-friendly platform developed by Divesh Watwani, student from VESIT Mumbai, India. Powered by React, Tailwind, and Daisy UI, our website simplifies the process of finding GitHub repositories. 
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-white'>1.2.2</span>
      </p>
      <p className='text-lg text-gray-400'>Developed by: <span className='text-white'>Divesh Watwani</span></p>
    </div>
  )
}

export default About
