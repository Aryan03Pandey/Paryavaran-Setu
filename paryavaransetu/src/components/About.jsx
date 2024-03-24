import React from 'react'
import NavBar from './navbar'

const About = () => {
  return (
    <div className='router-components' >
       <div className="inner-nav-bar"><NavBar/></div> 
       <div className="router-component-content">
       <h1>About Us</h1>
      <p>
        Welcome to our website dedicated to the development of a system for monitoring and improving air and water quality.
      </p>
      <p>
        At  Paryavaran Setu , we are passionate about creating innovative solutions to tackle environmental challenges. Our mission is to provide cutting-edge technology and expertise to enhance the quality of the air we breathe and the water we use.
      </p>
      <p>
        Our team of experts is committed to developing systems that collect real-time data, analyze it, and offer actionable insights to make our environment cleaner and safer. We collaborate with researchers, government agencies, and industries to make a significant impact on environmental quality.
      </p>
      <p>
        Please explore our website to learn more about our projects, technologies, and the people behind our mission. If you have any questions or want to get involved, feel free to <a href="/contact">contact us</a>.
      </p>
       </div>
        
    </div>
  )
}

export default About