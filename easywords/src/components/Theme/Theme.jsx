import React from 'react';
import './theme.scss'

export default class Footer extends React.Component {
    render () {
        const { themeName, wordsNumber } = this.props;
        return (
            <li className='theme__wrap' key={ themeName }>
                <h2 className='theme__name'>{ themeName }</h2>
                <p className='theme__wordsNumber'>Слов в наборе: { wordsNumber }.</p>
            </li>
        )
    }
}