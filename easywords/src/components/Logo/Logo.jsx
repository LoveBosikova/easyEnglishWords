import React from 'react';
import logo from './logo.png';
import './logo.scss';
import {
    Link
  } from "react-router-dom";

export default class Logo extends React.Component {
    render () {
        return (
            <Link to="/" className='logo__wrap'>
                <div className='logo__img'>
                    <img src={ logo } alt="Logo" />
                </div>
                <div className='logo__easyWords'>EasyWords</div>
            </Link>
        )
    }
}