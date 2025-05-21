import React from 'react'
import { Counter } from './features/counter/Counter'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <h1 className='text-center py-2'>Learning React Redux Toolkit</h1>
      <Counter/>
    </>
  )
}

export default App