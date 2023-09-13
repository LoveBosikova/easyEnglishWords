import React from 'react';
import Logo from '../Logo/Logo';

export default class Header extends React.Component {
    render () {
        return (
            <header className='header'>
              <Logo />
              <ul className='nav'>
                <li className='nav__itemWrap'><a href="#" className='nav__item'></a></li>
              </ul>
            </header>
        )
    }
}