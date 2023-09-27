import React from 'react';
import ThemeList from '../ThemeList/ThemeList';
import Card from '../Card/Card';

class CardList extends React.Component {
    render() {
        const {currentTheme, data} = this.props;

        
        const words = data
                        .filter((i) => currentTheme == i.theme)
                        .map((theme) => theme.words);
        
        console.log(words);
        return (
            <ul className='cardList'>
                {words.map(({id, english, transcription, russian}) => {
                    // console.log(english);
                    return (
                        <Card key={id}>
                            <Card.Title word={english} transcription={transcription}></Card.Title>
                            <Card.Translate translate={russian}></Card.Translate>
                        </Card>
                    )
                })}

            </ul>
        )
    }
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isThemeList: true, currentTheme: null};
    }

    handleClick = (e) => {
        // const {data} = this.props;
        // const currentTheme = data.filter((theme) => theme === e.target.textContent)
        // console.log(currentTheme);
        this.setState({currentTheme: e.target.textContent})
    }
    
    render() {
        const {data} = this.props; 
        const {currentTheme} = this.state;

        // тут определяем, что же будет отображаться в мейне - или список тем или список слов в конкретной теме
        const innerMain = currentTheme?  <CardList currentTheme={currentTheme} data={data}/> : <ThemeList data={data} clickHandle={this.handleClick}/>;

        return(
            <main>
                {innerMain}
            </main>
        )
    }

}