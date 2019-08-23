import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ name, to, isCurrentPage }) => {
  return (
    <li className={isCurrentPage ? 'nav-item active disabled' : 'nav-item'}>
      <Link className='nav-link' to={to}>
        {name} <span className='sr-only'>(current)</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const href = window.location.href;

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Movie.Info
        </Link>

        <div className='navbar-nav ml-auto'>
          <NavLink
            to='/'
            name='Search'
            isCurrentPage={href.includes('search')}
          />
          <NavLink
            to='/ranking'
            name='Ranking'
            isCurrentPage={href.includes('ranking')}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
