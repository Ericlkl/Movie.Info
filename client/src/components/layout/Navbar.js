import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ name, to, isCurrentPage }) => {
  return (
    <li className={isCurrentPage ? 'nav-item active' : 'nav-item'}>
      <Link className='nav-link' to={to}>
        {name} <span className='sr-only'>(current)</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <h3 className='navbar-brand' href='#'>
        Movie.Info
      </h3>

      <div className='navbar-nav'>
        <NavLink to='/' name='Home' isCurrentPage={true} />
        <NavLink to='/now_playing' name='Now Playing' isCurrentPage={false} />
        <NavLink to='/popular' name='Popular' isCurrentPage={false} />
        <NavLink to='/top_rated' name='Top Rated' isCurrentPage={false} />
        <NavLink to='/upcoming' name='UpComing' isCurrentPage={false} />
      </div>
    </nav>
  );
};

export default Navbar;
