import React from 'react'
import { Link, Outlet } from 'react-router'

function ExampleCompo() {
  return (
    <>
        <div className="container bg-warning border border-3">
            <div className="row">
                <div className="col">
                    <h2><Link to="fundamentals">Fundamentals</Link></h2>
                </div>
                <div className="col">
                    <h2>Hooks</h2>
                </div>
            </div>


        <div className="col">
            <Outlet/>
        </div>
            
        </div>
    </>
  )
}

export default ExampleCompo
