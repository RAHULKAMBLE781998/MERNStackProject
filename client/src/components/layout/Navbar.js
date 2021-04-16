import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link className="header__option"  to="/profiles">Developers</Link>
      </li>
      <li>
        <Link className="header__option"  to="/posts">Posts</Link>
      </li>
      <li>
        <Link className="header__option" to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a className="header__option" onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt " />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className="header__option" to="/profiles">Developers</Link>
      </li>
      <li>
        <Link className="header__option" to="/register">Register</Link>
      </li>
      <li>
        <Link className="header__option" to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-light">
      <h1>
        <Link className="header__option" to="/">
          <i className="fas fa-code" /> DevLink
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
