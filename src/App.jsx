import { useEffect, useState } from 'react'
import './App.css'

const textos1 = [
  {
    titulo: "Avanza Rápido",
    descripcion: "Avanza 3 casillas y selecciona a otro jugador para que avance 1 casilla."
  },
  {
    titulo: "Intercambio Útil",
    descripcion: "Intercambia posición con cualquier jugador."
  },
  {
    titulo: "Movimiento Estratégico",
    descripcion: "Avanza hasta la próxima casilla de Ayuda."
  },
  {
    titulo: "Solidaridad Veloz",
    descripcion: "Avanza 2 casillas y permite que un jugador de tu elección avance 1 casilla."
  },
  {
    titulo: "Generosidad Compartida",
    descripcion: "Avanza 1 casilla y selecciona a dos jugadores para que avancen 1 casilla cada uno."
  },
  {
    titulo: "Impulso Colectivo",
    descripcion: "Todos los jugadores avanzan 1 casilla."
  },
  {
    titulo: "Sorteo de Suerte",
    descripcion: "Avanza 5 casillas."
  },
  {
    titulo: "Salto Brillante",
    descripcion: "Avanza hasta la próxima casilla vacía."
  },
  {
    titulo: "Doble Fuerza",
    descripcion: "Lanza el dado dos veces y avanza según la suma."
  },
  {
    titulo: "Suma de Avances",
    descripcion: "Todos lanzan el dado, avanza según el mayor resultado."
  }
];

const textos2 = [
  {
    titulo: "Viento en Contra",
    descripcion: "Retrocede 2 casillas y selecciona a otro jugador para que retroceda 1."
  },
  {
    titulo: "Intercambio Inesperado",
    descripcion: "Cambia posición con cualquier jugador."
  },
  {
    titulo: "Vuelta Obligada",
    descripcion: "Retrocede hasta la última casilla de Perjudicar."
  },
  {
    titulo: "Retraso Colectivo",
    descripcion: "Todos los jugadores retroceden 1 casilla."
  },
  {
    titulo: "Caída en Picada",
    descripcion: "Retrocede 3 casillas."
  },
  {
    titulo: "Destino Desfavorable",
    descripcion: "Retrocede hasta la próxima casilla ocupada."
  },
  {
    titulo: "Retroceso Seguido",
    descripcion: "Todos lanzan el dado, retrocede según el mayor resultado."
  },
  {
    titulo: "Cambios de Marea",
    descripcion: "Cambia posiciones con el líder."
  },
  {
    titulo: "Desafío Inesperado",
    descripcion: "Elige un jugador para lanzar el dado, retrocedes según el resultado."
  },
  {
    titulo: "Revés Implacable",
    descripcion: "Retrocede 4 casillas pero avanza la mitad en el siguiente turno."
  }
];

const generarNumeroAleatorio = () => {
  const indice = Math.floor(Math.random() * textos1.length);
  return indice;
};


function App() {
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setTitle('Listo para jugar!')
    setText('Presiona el botón correspondiente a tu casilla')
  }, []);

  const handleGoodButtonClick = () => {
    let rand = generarNumeroAleatorio()
    setTitle(textos1[rand].titulo)
    setText(textos1[rand].descripcion)
    setBackgroundColor('green')
  };

  const handleBadButtonClick = () => {
    let rand = generarNumeroAleatorio()
    setTitle(textos2[rand].titulo)
    setText(textos2[rand].descripcion)
    setBackgroundColor('red')
  };

  return (
    <>
      <div style={{ backgroundColor }}>
        <h1>{title}</h1>
        <h2>{text}</h2>
        <button onClick={handleGoodButtonClick}><h2>hello</h2></button>
        <button onClick={handleBadButtonClick}><h2>Fuck u</h2></button>
      </div>

    </>
  )
}

export default App
