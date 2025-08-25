import './App.css'
import Card from './Components/Card'
import Counter from './Components/Counter'
import FilterableList from './Components/FilterableList'
import Timer from './Components/Timer'
import ConditionalSquare from './Components/ConditionalSquare'
import SquareContainer from './Components/SquareContainer'
import { useState } from 'react'

const alt = "dog-image"

function App() {

  const [counter, setCounter] = useState(0);
  const [squareCounter, setSquareCounter] = useState(0);

  return (
    <>
      <h1>Este es mi primer componente:</h1>
      <Card 
        src={"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
        alt={alt} 
        text={"Perro 1"}
      />
      <Card 
        src={"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
        alt={alt}
        text={"Perro 4"}
      />
      <Card 
        src={"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
        alt={alt}
        text={"Perro 3"}
      />
      <Counter counter={counter} setCounter={setCounter}/>
      <FilterableList />
      <Timer />
      <h1>Contador de los cuadrados</h1>
      <Counter counter={squareCounter} setCounter={setSquareCounter}/>
      <SquareContainer>
        {
          Array.from(
          {
            length: squareCounter }, (_, index) => 
            (
              <ConditionalSquare key={index} />
            )
          )
        }
      </SquareContainer>
    </>
  )
}

export default App
