import { useEffect, useState } from 'react'
import './App.css'

const textos1 = ['Gud 1', 'Gud 2', 'Gud 3', 'Gud 4'];

const textos2 = ['Bad 1', 'Bad 2', 'Bad 3', 'Bad 4'];

const generarNumeroAleatorio = () => {
  const indice = Math.floor(Math.random() * textos1.length);
  return indice;
};


function App() {
  const [text, setText] = useState()  
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setText('Listo para jugar!')
  }, []);

  const handleGoodButtonClick = () => {
    setText(textos1[generarNumeroAleatorio()]);
    setBackgroundColor('green')
  };

  const handleBadButtonClick = () => {
    setText(textos2[generarNumeroAleatorio()]);
    setBackgroundColor('red')
  };

  return (
    <>
      <div style={{ backgroundColor }}>
        <h1>{text}</h1>
        <button onClick={handleGoodButtonClick}><h2>hello</h2></button>
        <button onClick={handleBadButtonClick}><h2>Fuck u</h2></button>
      </div>
      
    </>
  )
}

export default App
