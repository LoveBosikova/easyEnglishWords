import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ThemeList from './components/ThemeList/ThemeList'
import wordsData from './data';
import Main from './components/Main/Main';

class App extends React.Component{
  render() {
    return (
      <>
        <Header />
        <Main data={wordsData}/>
        <Footer />
      </>
    );
  }
}

export default App;
