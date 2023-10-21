import React from 'react';
import Logo from '../Logo/Logo';

import {
  Link
} from "react-router-dom";

export default class Header extends React.Component {
    render () {
        return (
            <header className='header'>
              <Logo />
              <nav>
                <ul className='nav'>
                  <li className='nav__itemWrap'>
                    <Link to="/" className='nav__item'>Home</Link>
                  </li>
                  <li className='nav__itemWrap'>
                    <Link to="/cards" className='nav__item'>Cards</Link>
                  </li>
                </ul>
              </nav>
            </header>
        )
    }
}