import React from 'react';
import './theme.scss'

export default class Theme extends React.Component {
    render () {
        const { themeName, wordsNumber, clickHandle } = this.props;
        return (
            <li className='theme__wrap' key={ themeName } id={themeName}>
                <h2 className='theme__name' onClick={clickHandle}>{ themeName }</h2>
                <p className='theme__wordsNumber'>Слов в наборе: { wordsNumber }.</p>
            </li>
        )
    }
}