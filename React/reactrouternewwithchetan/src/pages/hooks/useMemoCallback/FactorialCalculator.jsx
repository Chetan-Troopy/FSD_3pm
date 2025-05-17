import React, { useMemo, useState } from 'react'

function FactorialCalculator() {

    const [number, setNumber] = useState(1)
    const [counter, setCounter] = useState(0)



    const factorial = useMemo(() => {
        console.log("Calculating factorial...");
        const computeFactorial = (n) =>{
            if (typeof n !== 'number' || isNaN(n)  || n < 0) return 1;   
            // if (n<=0) return 1;               // no base case    = infinite recursion 
            if (n<=1) return 1;               // base case to stop recursion
            return n * computeFactorial(n-1)
        }
        return computeFactorial(number)

    }, [number])
  return (
    <>
        <h2>Factorial Calculator</h2>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
        <p>Factorial of {Number} is {factorial}</p>

        <button className='btn btn-primary' onClick={() => setCounter(counter + 1)}>Re-Render Counter : {counter}</button>
    </>
  )
}

export default FactorialCalculator