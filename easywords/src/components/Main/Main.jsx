import React from 'react';
import ThemeList from '../ThemeList/ThemeList';
import Card from '../Card/Card';

class CardList extends React.Component {
    render() {
        const {currentTheme} = this.props;

        return (
            <ul className='cardList'>
                {currentTheme.map(({id, english, transcription, russian}) => {
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
        this.state = {isThemeList: true, currentTheme: undefined};
    }

    render() {
        const { data } = this.props; 
        return(
            <main>
                <ThemeList data={data}/>
            </main>
        )
    }

}