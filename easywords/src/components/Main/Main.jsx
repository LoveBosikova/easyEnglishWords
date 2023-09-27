import React from 'react';
import ThemeList from '../ThemeList/ThemeList';
import Card from '../Card/Card';

class CardList extends React.Component {

    createCards = (id, english, transcription, russian) => {
        return <Card key={id} word={english} transcription={transcription} translate={russian} />
    }
    render() {
        const {currentTheme, data} = this.props;

        const words = data
                        .filter((i) => currentTheme == i.theme)
                        .map((theme) => theme.words)
                        .map((wordsObj) => wordsObj)

        const cardsList = words.map((firstLvl)=> firstLvl.map((word)=> <Card key={word.id} word={word.english} transcription={word.transcription} translate={word.russian} />))

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

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isThemeList: true, currentTheme: null};
    }

    handleClick = (e) => {
        this.setState({
            currentTheme: e.target.textContent, 
            isThemeList: false
        })
    }

    clickBackToMain = () => {
        this.setState({isThemeList: true})
    }
    
    render() {
        const {data} = this.props; 
        const {currentTheme, isThemeList} = this.state;

        const cardListHtml = <div class="cards__wrap">
            <button onClick={this.clickBackToMain}>Назад</button>
            <CardList currentTheme={currentTheme} data={data}/>
            </div>

        // тут определяем, что же будет отображаться в мейне - или список тем или список слов в конкретной теме
        const innerMain = isThemeList ? <ThemeList data={data} clickHandle={this.handleClick}/> : cardListHtml;

        return(
            <main>
                {innerMain}
            </main>
        )
    }

}