import { motion, animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import{useRef} from "react";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/me.png"
const Home = ({ratio}) => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const animationClientsCount =  () => {
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
        })
    }
    const animationProjectsCount =  () => {
        animate(0,500,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent = v.toFixed()),
        })
    }

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        }
    }
    const button = {
        h1: {
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am ,<br />Ayush Jaiswal
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",
                    }} />

                    <div>
                        <a href="mailto:ayushjaiswal220112096@gmail.com">Hire Me</a>
                        <a href="#work">Projects <BsArrowUpRight /></a>
                    </div>

                    <article>
                        <p>
                            + {
                                ratio < 2 && <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                            }
                        </p>
                        <span>Clients Worldwide</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                + {
                                    ratio < 2 && <motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                                }
                            </p>
                            <span>Projects Done</span>
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
    )
}

export default Home