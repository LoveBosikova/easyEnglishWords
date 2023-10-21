import React, { useState } from 'react';
import cn from 'classnames';

class CardToLearn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {showed: false};
    }

    handleChange = () => {
        const showed = this.state.showed;
        this.setState({showed: !showed})
    };

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.id !== prevProps.id) {
            this.setState({showed: false});
        }
    }

    render() {
        const {id, word, transcription, translate} = this.props; 
        const {showed} = this.state;

        const innerText = showed ? translate : 'Показать перевод';

        const classNames = cn('card__text', {
            'card__text--hidden': showed,
            'card__text--showen': !showed,
        });

        return (
            <div className="cardToLearn" key={id}>
                <div className="cardToLearn__wordWrap">
                    <h2 className="cardToLearn__title">{word}</h2>
                    <p className="cardToLearn__transcription">{transcription}</p>
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
        this.state = { showenCardIndex: 0 };
    }

    componentDidMount() {
    // устанавливаем стартовый индекс карточки для показа - по дефолту нулевой индекс
        const { startPropsIndex } = this.props;
        this.setState({showenCardIndex: startPropsIndex || 0})
    }

    showNextCard = () => {
        const { chosenCardsIds } = this.props;
        const { showenCardIndex } = this.state;
        if ( showenCardIndex === chosenCardsIds.length - 1 ) {
            this.setState({showenCardIndex: 0})
        } else {
            this.setState({showenCardIndex: showenCardIndex + 1})
        }
    }

    showPrevCard = () => {
        const { chosenCardsIds } = this.props;
        const { showenCardIndex } = this.state;
        if (showenCardIndex === 0) {
            this.setState({showenCardIndex: chosenCardsIds.length - 1})
        } else {
            this.setState({showenCardIndex: showenCardIndex - 1})
        }
    }

    render () {
        // через пропсы от родителя приходит массив индексов выбранных слов для заучивания.
        // Индекс слова, который показываем, берем из стейта
        const { chosenCardsIds, dataCards } = this.props;
        const { showenCardIndex } = this.state;

        // Находим слово в наших данных: его айди должен совпасть с айди под индексом, который показываем
        const chosenWord = dataCards
                                    .map((firstLvl)=> firstLvl
                                    .filter((word)=> word.id == chosenCardsIds[ showenCardIndex ]))
                                    .flat()[0];
        
        return (
            <>
                <div className='cardListToLearn'>
                    <div className='cardListToLearn__arrowWrap' onClick={this.showPrevCard}>
                        <svg className='cardListToLearn__arrow cardListToLearn__arrow--prev' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/>
                        </svg>
                    </div>
                    <div className="cardListToLearn__mainCardWrap">
                        <CardToLearn id={chosenWord.id} word={chosenWord.english} transcription={chosenWord.transcription} translate={chosenWord.russian}/>
                    </div>
                    <div className='cardListToLearn__arrowWrap' onClick={this.showNextCard}>
                        <svg className='cardListToLearn__arrow cardListToLearn__arrow--next' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                        </svg>
                    </div>
                </div>
            </>
        )
    }
}
