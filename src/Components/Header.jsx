import React from "react";
import Logo from '../Assets/img-1.png';

const Header = () => {
  return (
    <div>
      <div className="container xxl">
        <div className="text-center p-2 pt-4">
          <img src={Logo} alt="" />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom border-1 border-dark">
        <div className="container-fluid">
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#home"
                >
                  Nav1
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active  fw-bold" href="/#">
                  Nav2
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fw-bold active " href="/#">
                  Nav3
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fw-bold active " href="/#">
                  Nav4
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fw-bold active " href="/#">
                  Nav5
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fw-bold active " href="/#">
                  Nav6
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fw-bold active " href="/#">
                  Nav7
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link fw-bold active " href="/#">
                  Nav8
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
