import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar( { setCurrency } ) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            className="icon-btn"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>

          {open && (
            <ul className="dropdown-menu">
              <li onClick={() => setCurrency("inr")}><a href="/">INR</a></li>
              <li onClick={() => setCurrency("usd")}><a href="/">USD</a></li>
            </ul>
          )}
        </div>
      </div>

      <div onClick={goToHome} className="navbar-center">
        <a href="/" className="brand">Crypto Tracker</a>
      </div>

      <div className="navbar-end">
        <button className="icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg"
            className="icon" fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button className="icon-btn">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="icon" fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
