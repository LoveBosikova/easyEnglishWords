import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ThemeList from './components/ThemeList/ThemeList'
import wordsData from './data';

function App() {
  return (
    <>
      <Header />
      <main>
        {console.log(wordsData.length)}
        <ThemeList themes={ wordsData }/>

      </main>
      <Footer />
    </>
  );
}

export default App;
