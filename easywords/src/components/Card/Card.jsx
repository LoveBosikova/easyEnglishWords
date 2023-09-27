import React, { useState } from 'react';
import cn from 'classnames';

//! Не забыть распарсить слова

const Title = (props) => {
    const {word, transcription} = props;
    return (
        <div className="card__wordWrap">
            <h2 className="card__title">{word}</h2>
            <p className="card__transcription">{transcription}</p>
        </div>
    )
}

const Translate = (props) => {
    const {translate} = props; 
    const [showed, setShowed] = useState(false);

    const handleChange = () => {
        setShowed(!showed);
    };

    const innerText = showed ? 'Показать перевод' : translate;

    const classNames = cn('card__text', {
        'card__text--hidden': showed,
        'card__text--showen': !showed,
    });

    return (
        <p className={classNames} onClick={handleChange}>{innerText}</p>
    )
}

export default class Card extends React.Component {
    static Title = Title;
    static Translate = Translate;

    render() {
        const {key} = this.props; 
        return (
            <div className="card" key={key}>{this.props.children}</div>
        )
    }
}