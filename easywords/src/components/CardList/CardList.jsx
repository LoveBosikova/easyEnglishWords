import React from 'react';
import Card from '../Card/Card';

export default class CardList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {checkedWordsIds: []};
    }

    // Метод для изменения родительского стейта: если айди слова нет с списке слов на изучение, то добавляем его. 
    // Если айди слова уже есть в нашем списке, то удаляем его. Эту функцию передадим в отдельное слово в списке слов на изучение
    addOrRemoveWordFromStydingList = (id) => {
        debugger;
        console.log(this.state.checkedWordsIds);
        debugger;
        if (this.state.checkedWordsIds.includes(id)) {
            debugger;
            const newWords = this.state.checkedWordsIds.filter((checkedId) => checkedId !== id);
            console.log(newWords);
            this.setState({checkedWordsIds: newWords});
            debugger;
        } else {
            debugger;
            const newWords = this.state.checkedWordsIds.push(id);
            console.log(newWords);
            this.setState({checkedWordsIds: newWords})
            debugger;
        }
    }

    createCards = (id, english, transcription, russian) => {
        return <Card 
                    key={id} 
                    word={english} 
                    transcription={transcription} 
                    translate={russian} 
                    chosenWords={this.state.checkedWordsIds} 
                    onChange={this.addOrRemoveWordFromStydingList}
                    />
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