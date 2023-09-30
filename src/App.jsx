import './App.css'
import { FlashCards } from './components/FlashCards';
import  { useState } from 'react';
import {data,colors}  from './data.js';

function App() {
  const [currentCard, setCurrentCard] = useState(-1);
  const [currentDeck, setCurrentDeck] = useState("Europe");
  const keys = Object.keys(data);
  const changeDeck = () => {
    setCurrentDeck(keys[Math.floor(Math.random()*keys.length)]);
    setCurrentCard(Math.floor(Math.random()*data[currentDeck].length));
  }
  return (
    <>
     <h1>FlashCards - Learning Geography </h1>
     <p>Learn countries and their capitals through these flash cards</p>
     <p>Number of Contients: {keys.length} | Current Continent: {currentDeck} | Number of Cards for each Contient: {data[currentDeck].length}</p>
     <FlashCards  data={data[currentDeck][currentCard]} background={colors[currentDeck]} currentDeck={currentDeck} currentCard={currentCard} />
     <button onClick={changeDeck}>Next</button>
    </>
  )
}
export default App;