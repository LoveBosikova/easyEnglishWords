import React from 'react';
import logo from './logo.png';
import './logo.scss';

export default class Logo extends React.Component {
    render () {
        return (
            <div className='logo__wrap'>
                <div className='logo__img'>
                    <img src={ logo } alt="Logo" />
                </div>
                <div className='logo__easyWords'>EasyWords</div>
            </div>
        )
    }
}