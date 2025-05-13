import React from 'react'
import { Link, Outlet } from 'react-router'
import { motion } from 'framer-motion'


function HooksMenu() {
  return (
    <>
         <motion.div layoutId="underline" className="container">
            <ul>
                <li><Link to="explainUseState" className='text-dark text-decoration-none'>useState Hook</Link></li>
                <li><Link to="explainUseEffectHook" className='text-dark text-decoration-none'>useEffect Hook</Link></li>
                <li><Link to="explainUseReducerHook" className='text-dark text-decoration-none'>useReducer Hook</Link></li>
                <li><Link to="explainUseRef" className='text-dark text-decoration-none'>useRef Hook</Link></li>
                <li><Link to="explainUseContext" className='text-dark text-decoration-none'>useContext Hook</Link></li>
            </ul>



            <div className="row">
                <div className="col">
                    <Outlet/>
                </div>
            </div>
        </motion.div>
    
    </>
  )
}

export default HooksMenu