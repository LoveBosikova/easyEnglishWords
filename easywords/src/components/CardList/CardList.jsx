import React from 'react';
import Card from '../Card/Card';
import CardListToLearn from '../CardListToLearn/CardListToLearn';


// ! Добавить состояние у класса: показывает или список слов или учит карточки.
export default class CardList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {checkedWordsIds: [], isChoosing: true};
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

    startStudy = () => {
        if (this.state.checkedWordsIds.length === 0) {
            alert ('Выберите хотя бы одно слово для заучивания');
            return;
        }
        this.setState({isChoosing: false})
    }

    render() {
        const {currentTheme, data} = this.props;
        const { checkedWordsIds, isChoosing } = this.state;

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

        const cardListPreview = <>
                                    <ul className='cardList'>
                                        {cardsList}
                                    </ul>
                                    <div className='btnStudy__wrap'>
                                    <button className='btnStudy' onClick={this.startStudy}>Учить!</button>
                                    </div>
                                </>

        const cardListToStudy = <CardListToLearn chosenCardsIds={checkedWordsIds} dataCards={words}/>
        
        return (
            <div className='cardList__wrap'>
                {isChoosing ? cardListPreview : cardListToStudy}
            </div>
        )
    }
}