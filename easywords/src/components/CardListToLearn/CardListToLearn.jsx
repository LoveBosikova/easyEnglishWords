import React, { useState } from 'react';
import cn from 'classnames';

class CardToLearn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {showed: false};
    }

    handleChange = () => {
        this.setState({showed: true})
    };

    render() {
        const {id, word, transcription, translate} = this.props; 
        const {showed} = this.state;

        const innerText = !showed ? 'Показать перевод' : translate;

        const classNames = cn('card__text', {
            'card__text--hidden': showed,
            'card__text--showen': !showed,
        });

        return (
            <div className="card" key={id}>
                <div className="card__wordWrap">
                    <h2 className="card__title">{word}</h2>
                    <p className="card__transcription">{transcription}</p>
                </div>
                <p className={classNames} onClick={this.handleChange}>{innerText}</p>
            </div>
        )
    }
}

// сюда в пропсы нужен массив слов для показа и вариативно - стартовый индекс карточки 
export default class CardListToLearn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {showenCard: undefined};
    }

    componentDidMount() {
        const {showenCard} = this.state;
        const {startPropsIndex} = this.props;
        this.setState({showenCard: startPropsIndex || 1})
    }

    render () {
        return (
            <div className='cardListToLearn__wrap'>
                <div className='cardListToLearn'>
                    <div className='cardListToLearn__arrowWrap'>
                        <svg className='cardListToLearn__arrow cardListToLearn__arrow--prev' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/>
                        </svg>
                    </div>
                    <div className="cardListToLearn__mainCardWrap">
                        
                    </div>
                    <div className='cardListToLearn__arrowWrap'>
                        <svg className='cardListToLearn__arrow cardListToLearn__arrow--next' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                        </svg>
                    </div>
                </div>
                <div className='btnStudy__wrap'>
                    <button className='btnStudy'>Закончить</button>
                </div>
            </div>
        )
    }
}