import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map((movie) => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <Nav>
        <NavItem className="home-button">
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem className="home-button">
          <Link to="/add-movie">Add Movie</Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default SavedList;
