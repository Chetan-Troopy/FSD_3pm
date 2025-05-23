// import { decrement, increment } from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/example">
                  Example
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          {/* <button
            className="btn btn-success"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button> */}
          <span className="fs-3 mx-3 text-white">{count}</span>
          {/* <button
                      className="btn btn-danger"
                      onClick={() => dispatch(decrement())}
                    >
                      Decrement
                    </button> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
