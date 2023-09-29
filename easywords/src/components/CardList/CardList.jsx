import React from 'react';
import Card from '../Card/Card';
import CardListToLearn from '../CardListToLearn/CardListToLearn';


// ! Добавить состояние у класса: показывает или список слов или учит карточки.
export default class CardList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {checkedWordsIds: []};
    }

    // Метод для изменения родительского стейта: если айди слова нет с списке слов на изучение, то добавляем его. 
    // Если айди слова уже есть в нашем списке, то удаляем его. Эту функцию передадим в отдельное слово в списке слов на изучение
    addOrRemoveWordFromStydingList = (id) => {
        if (this.state.checkedWordsIds.includes(id)) {
            this.setState({checkedWordsIds: this.state.checkedWordsIds.filter((checkedId) => checkedId !== id)});
        } else {
            this.setState({checkedWordsIds: [...this.state.checkedWordsIds, id]})
        }
    }
    
    learnWord = (data, chosenIds) => {
        // сначала отбираем выбранные словаб а затем 
        <CardListToLearn cardsToLearn={wordsToLearn} />
    }

    render() {
        const {currentTheme, data} = this.props;

        const words = data
                        .filter((i) => currentTheme == i.theme)
                        .map((theme) => theme.words)
                        .map((wordsObj) => wordsObj)

        const cardsList = words.map((firstLvl)=> firstLvl.map((word)=> <Card 
                                                                        id={word.id} 
                                                                        word={word.english} 
                                                                        transcription={word.transcription} 
                                                                        translate={word.russian}
                                                                        chosenWords={this.state.checkedWordsIds} 
                                                                        onChange={this.addOrRemoveWordFromStydingList} 
                                                                        />))

        return (
            <div className='cardList__wrap'>
                <ul className='cardList'>
                    {cardsList}
                </ul>
                <div className='btnStudy__wrap'>
                    <button className='btnStudy'>Учить!</button>
                </div>
            </div>
        )
    }
}