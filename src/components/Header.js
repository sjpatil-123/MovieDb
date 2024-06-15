
import React, { useRef} from 'react';
import {useNavigate } from 'react-router-dom';

export default function Header() {
  const x1 = useRef();
  const navigate=useNavigate();
  function getMovie(e) {
    e.preventDefault();
    const val = x1.current.value;
    
    navigate(`/searchmovies/${val}`)
  }
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/"><h1>Movie DB</h1></a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link hover" href="/"><h4>Popular</h4></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/topmoviepage" tabIndex="-1" aria-disabled="true"><h4>Top Rated</h4></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/upcommingmoviepage" tabIndex="-1" aria-disabled="true"><h4>Upcoming</h4></a>
                  </li>
                </ul>
                <form className="d-flex" onSubmit={getMovie}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={x1} />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
    </div>
  );
}
