import React from 'react';
import ThemeList from '../ThemeList/ThemeList';
import CardList from '../CardList/CardList';
import {
    Link
  } from "react-router-dom";
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

        const cardListHtml = <div className="cards__wrap">
            <button className="btn-back" onClick={this.clickBackToMain}>Назад</button>
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