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
            to='/now_showing'
            name='Now Showing'
            isCurrentPage={href.includes('now_showing')}
          />
          <NavLink
            to='/popular'
            name='Popular'
            isCurrentPage={href.includes('popular')}
          />
          <NavLink
            to='/top_rated'
            name='Top Rated'
            isCurrentPage={href.includes('top_rated')}
          />
          <NavLink
            to='/upcoming'
            name='UpComing'
            isCurrentPage={href.includes('upcoming')}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
