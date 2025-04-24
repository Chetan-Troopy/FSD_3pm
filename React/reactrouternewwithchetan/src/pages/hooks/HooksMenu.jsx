import React from 'react'
import { Link, Outlet } from 'react-router'

function HooksMenu() {
  return (
    <>
         <div className="container">
            <ul>
                <li><Link to="explainUseState" className='text-dark text-decoration-none'>UseState Hook</Link></li>
                <li><Link to="explainUseEffectHook" className='text-dark text-decoration-none'>UseEffect Hook</Link></li>
                <li><Link to="explainUseReducerHook" className='text-dark text-decoration-none'>UseReducer Hook</Link></li>
            </ul>



            <div className="row">
                <div className="col">
                    <Outlet/>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default HooksMenu