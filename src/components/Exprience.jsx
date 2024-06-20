import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Exprience = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <motion.h1 
    whileInView={{opacity: 1,y: 0}}
    initial={{opacity: 0,y: -100}}
    transition={{duration: 0.5}}
    className="my-20 text-center text-4xl">Exprience</motion.h1>
    <div>
        {EXPERIENCES.map((exprience, index)=>(
            <div key={index}  className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity: 1,x: 0}}
                initial={{opacity: 0,x: -100}}
                transition={{duration: 1}}
                className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">
                        {exprience.year}
                    </p>
                </motion.div>
                <motion.div 
                whileInView={{opacity: 1,x: 0}}
                initial={{opacity: 0,x: -100}}
                transition={{duration: 1}}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                {exprience.role} - <span className=" text-purple-200">
                    {exprience.company}
                </span>
                </h6>
                <p className="mb-2 text-neutral-400">
                    {exprience.description} </p>
                    {exprience.technologies.map((tech,index) => (
                        <span 
                        key={index} 
                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 text-sm font-medium text-purple-400"
                        >
                        {tech}        
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
    </div>
    </div>
};

export default Exprience