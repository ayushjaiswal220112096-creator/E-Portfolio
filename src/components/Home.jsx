import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.png";
import resume from "../assets/resume.pdf"; // <-- Add your resume file here

const Home = () => {

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am ,<br />Ayush Jaiswal
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:ayushjaiswal220112096@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* Download Resume Section */}
          <aside>
            <article data-special>
              <p>Resume</p>
              <a
                href={resume}
                download="Ayush_Jaiswal_Resume.pdf"
                className="resume-download"
              >
                Download Resume
              </a>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>ayushjaiswal220112096@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Ayush" />
      </section>

      <BsChevronDown />
    </div>
  );
};

export default Home;
