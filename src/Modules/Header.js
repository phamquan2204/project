import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import NavItem from '../Modules/NavItem';

function Header() {

  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSearchValue('')
  }, []);

  const showResults = (e) => {
    const queryValue = e.target.value
    setSearchValue(queryValue)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light card-header bg-dark" role="navigation">
      <NavLink to="/" className="navbar-brand text-capitalize h3">The new movie</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto text-capitalize">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <NavItem
            name='movie'
            mediaType='movie'
          />
          <NavItem
            name='tv'
            mediaType='tv'
          />
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
            <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 bg-dark text-light"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={(e) => { showResults(e) }}
            onSubmit={(e) => { showResults(e) }} />
          <Link to={`/search&query=${searchValue}&page=${page}`}>
            <button className="btn btn-dark my-2 my-sm-0" type="submit" onClick={(e) => { showResults(e) }}>
              <i className="fa-solid fa-magnifying-glass text-light"></i>
            </button>
          </Link>
        </form>
      </div>
    </nav >
  )
}

export default Header