import React, { useState } from 'react';
import cn from 'classnames';
export default class Card extends React.Component {
    constructor (props) {
        super(props);
        this.state = {showed: false};
    }

    handleChange = () => {
        this.setState({showed: true})
    };

    render() {
        const {key, word, transcription, translate} = this.props; 
        const {showed} = this.state;
        // console.log(key, word, transcription, translate);

        const innerText = showed ? 'Показать перевод' : translate;

        const classNames = cn('card__text', {
            'card__text--hidden': showed,
            'card__text--showen': !showed,
        });

        return (
            <div className="card" key={key}>
                <div className="card__wordWrap">
                    <h2 className="card__title">{word}</h2>
                    <p className="card__transcription">{transcription}</p>
                </div>
                <p className={classNames} onClick={this.handleChange}>{innerText}</p>
            </div>
        )
    }
}