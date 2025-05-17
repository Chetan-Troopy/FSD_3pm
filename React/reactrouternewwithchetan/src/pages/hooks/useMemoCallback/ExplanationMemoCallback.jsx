import React from "react";
import FactorialCalculator from "./FactorialCalculator";
import UseCallbackExample from "./UseCallbackExample";

function ExplanationMemoCallback() {
  return (
    <>
      <div className="container text-bg-dark py-3 mb-5">
        <h1>Understanding of useCallback and useMemo Hook in React</h1>
        <h2>useMemo Hook</h2>
        <p>
          The useMemo hook in React is used for performance optimization by
          memoizing the result of a calculation. It takes two arguments: a
          function that performs the calculation, and an array of dependencies.
          The hook returns the memoized value, which is the result of the
          function call.
        </p>
        <p>
          On initial render, useMemo executes the function and stores the
          result. On subsequent renders, it checks if any of the dependencies
          have changed. If they have, it re-executes the function and updates
          the stored result. If the dependencies have not changed, it returns
          the previously stored result, skipping the calculation. This prevents
          unnecessary re-renders and can significantly improve performance,
          especially when dealing with expensive calculations.
        </p>
        {/* <pre>
                 const expensiveValue = useMemo(() => {
                     return computeExpensiveValue(a, b);
                    }, [a, b])
                
        </pre> */}
        <h2>useCallback</h2>
        <p>
          useCallback is a React Hook that memoizes a callback function. It
          returns a memoized version of the callback that only changes if one of
          its dependencies has changed. This is useful when passing callbacks to
          optimized child components that rely on reference equality to prevent
          unnecessary renders.
        </p>

        <div className="border border-3 border-secondary-subtle m-3 p-3">
          <h2>Examples of useMemo</h2>
          <FactorialCalculator />
        </div>
        <div className="border border-3 border-secondary-subtle m-3 p-3">
          <h2>Examples of useCallback</h2>
          <UseCallbackExample />
        </div>
      </div>
    </>
  );
}

export default ExplanationMemoCallback;
