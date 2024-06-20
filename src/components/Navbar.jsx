import logo from "../assets/ob.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
          y: [10, -10],
          transition: {
                  duration: duration,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
          }
  }
})

const Navbar = () => {
  return  <nav className="mb-20 flex items-center justify-between py-6">
    <motion.div   
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"
    className="flex flex-shrink-0 items-center">
        <img width={300} height={150} src={logo} alt="logo"  />
    </motion.div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/om-baviskar-/"><FaLinkedin /></a>
      <a href="https://github.com/ombaviskar18"><FaGithub /></a>
      <a href="https://www.instagram.com/om_baviskar18/"><FaInstagram /></a>
    </div>
  </nav>
};

export default Navbar