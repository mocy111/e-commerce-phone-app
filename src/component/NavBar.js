import React, { useRef, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../component/Firebase';

const Navbar = ({ cartLength }) => {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  const logOut = () => {
    firebase.signOutUser();
    window.location.reload();
  };

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user && setUserSession(user);
    });

    return () => {
      listener();
    };
  }, [firebase.auth]);

  const refMenu = useRef(null);

  const navOpen = () => {
    refMenu.current.classList.add('open');
    document.body.classList.add('active');
    refMenu.current.style.left = '0';
    refMenu.current.style.width = '30rem';
  };

  const navClose = () => {
    refMenu.current.classList.remove('open');
    document.body.classList.remove('active');
    refMenu.current.style.left = '-30rem';
    refMenu.current.style.width = '0';
  };

  return (
    //  Header
    <header id='header' className='header'>
      <div className='navigation'>
        <div className='container'>
          <nav className='nav'>
            <div className='nav__hamburger' onClick={navOpen}>
              <i className='fas fa-bars'></i>
            </div>

            <div className='nav__logo'>
              <Link to='/' className='scroll-link'>
                PHONE
              </Link>
            </div>

            <div className='nav__menu' ref={refMenu}>
              <div className='menu__top'>
                <span className='nav__category'>PHONE</span>
                <span  className='close__toggle' onClick={navClose}>
                  <i className='fas fa-times'></i>
                </span>
              </div>
              <ul className='nav__list'>
                <li className='nav__item'>
                  <a href='#header' className='nav__link scroll-link'>
                    Home
                  </a>
                </li>
                <li className='nav__item'>
                  <a href='#category' className='nav__link scroll-link'>
                    Category
                  </a>
                </li>
                <li className='nav__item'>
                  <a href='#news' className='nav__link scroll-link'>
                    Blog
                  </a>
                </li>
                <li className='nav__item'>
                  <a href='#contact' className='nav__link scroll-link'>
                    Contact
                  </a>
                </li>

                {userSession === null ? (
                  <li className='nav__item logedButtons'>
                    <Link to='/conexion' className='log scroll-link'>
                      Conexion
                    </Link>
                  </li>
                ) : (
                  <li className='nav__item logedButtons'>
                    <button onClick={logOut} className='log scroll-link'>
                      LOGOUT
                    </button>
                  </li>
                )}
              </ul>
            </div>

            <div className='nav__icons'>
              <Link to='/' className='icon__item'>
                <i className='fas fa-user'></i>
              </Link>

              <Link to='/' className='icon__item'>
                <i className='fas fa-search'></i>
              </Link>

              <Link to='/cart' className='icon__item'>
                <i className='fas fa-shopping-cart'></i>
                <span id='cart__total'>{cartLength} </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>

    // End Header
  );
};

export default Navbar;
