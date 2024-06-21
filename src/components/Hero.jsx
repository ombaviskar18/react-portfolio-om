import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/hero.jpg"
import { motion} from "framer-motion"
import './ContactForm.css'; 

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1, 
        transition: { duration: 0.5, delay: delay ,}
    }
})

const Hero = () => {
  return ( 
  <div className="border border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center  lg:items-start">
                <motion.h1 
                 variants={container(0)}
                 initial="hidden"
                 animate="visible"
                 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Om Baviskar</motion.h1>
                <motion.span
                 whileInView={{opacity: 1,x: 0}}
                 initial={{opacity:0, x: -100}}
                 transition={{duration: 1,delay: 0.5}}
                // variants={container(0.5)}
                // initial="hidden"
                // animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Web and Android Developer</motion.span>
                <motion.p 
                //  whileInView={{opacity: 1,x: 0}}
                //  initial={{opacity:0, x: -100}}
                //  transition={{duration: 0.5}}
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                className="btn btn-primary"
                ><a href="https://drive.google.com/file/d/1z1_99S-GXXGGnJLoDZUFKBRRuoFH7i2U/view?usp=drive_link" target="_blank">Get Resume</a>
                </motion.button>
            </div>
        </div>
        <div className="my-4 w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                 whileInView={{opacity: 1,x: 0}}
                 initial={{opacity:0, x: 100}}
                 transition={{duration: 1,delay: 0.5}}
                // initial={{x:100, opacity: 0}}
                // animate={{x:0, opacity: 1}}
                // transition={{duration:1 , delay: 1.1}}
                className="rounded-2xl" src={profilepic} alt="Profilepic" />
            </div>
        </div>
    </div>
  </div>
  );
};

export default Hero
