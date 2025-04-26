import React from 'react'
import { Link, Outlet } from 'react-router'

function ProjectMenu() {
  return (
    <>
         <div className="container">
            <ul>
                <li><Link to="todolist" className='text-dark text-decoration-none'>To-Do List</Link></li>
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

export default ProjectMenu