import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import wordsData from './data';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cards" element={<Main data={wordsData}/>} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
