import { article } from 'framer-motion/client'
import React from 'react'

const Testimonial = () => {
  return (
    <div id="testimonial">
        
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Aman"} feedback={"Loved your work!"} />
            <TestimonialCard name={"Nikhil"} feedback={"Getting better each day!"} />
            <TestimonialCard name={"Anu"} feedback={"Looking forward to see more from you"} />
        </section>
    </div>
  )
}

const TestimonialCard = ({name, feedback}) => {
   return (
     <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user"/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
   )
}

export default Testimonial