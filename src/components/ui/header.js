import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <header className="header d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              
            <Link to="/">
            <img src="/logo.png" alt="" />
            </Link>
              
              
            </div>
            <div className="col-lg-10 d-flex align-items-center justify-content-end">
              <div className="header__item header__item--1">
                <ul>
                  <li>
                    <Link to="/peliculas">
                    Peliculas
                    </Link>
                  </li>
                  <li>
                    <Link to="/cines">
                    cines
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header__item header__item--2">
                <ul>

                
                  {/* <li>
                    <a href=".">
                      <img src="/assets/lupa.png" alt="" />
                    </a>
                  </li>*/}
                  <li>
                    <a href=".">
                    <Link to="/auth/login">
                       <img src="/assets/user.png" alt="" />
                    </Link>    
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
