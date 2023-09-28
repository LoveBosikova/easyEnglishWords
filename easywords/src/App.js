import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import wordsData from './data';

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
