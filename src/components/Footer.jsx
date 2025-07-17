
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
import profile_picture from "../assets/profile_picture.jpg"

const Footer = () => {
  return (
    
    <footer id='footer'>
        <div>
            <img src={profile_picture} alt="Founder" />
        <h2>
            Ayush Jaiswal
        </h2>
        <p>Keep Growing</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href=""><AiFillInstagram/></a>
            </article>
            <article>
                <a href="https://www.linkedin.com/in/ayush-jaiswal-a5b71a2ab/"><AiFillLinkedin/></a>
            </article>
            <article>
                <a href="https://github.com/ayushjaiswal220112096-creator"><AiFillGithub/></a>
            </article>
        </aside>
        <a href='#home'><AiOutlineArrowUp/></a>
    </footer> 
  )
}

export default Footer