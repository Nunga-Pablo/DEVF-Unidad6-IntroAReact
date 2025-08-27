import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './Components/Card'
import Counter from './Components/Counter'
import FilterableList from './Components/FilterableList'
import Timer from './Components/Timer'
import ConditionalSquare from './Components/ConditionalSquare'
import SquareContainer from './Components/SquareContainer'
import FocusInput from './Components/FocusInpunt'
import Parent from './Components/UseCallbackExample'
import ContadorReducer from './Components/ContadorReducer'
import Nav from './Components/Nav'
import User from './Components/User'

const alt = "dog-image"

function App() {

  const [counter, setCounter] = useState(0);
  
  return (
    <>
      <BrowserRouter> 
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

        <Nav />

        <Routes>
          <Route path='/' element= {() => <h1>Hola</h1>}/>
          <Route path='/Counter' element= {<Counter counter={counter} setCounter={setCounter}/>}/>
          <Route path='/FilterableList' element= {<FilterableList />}/>
          <Route path='/Timer' element= {<Timer />}/>
          <Route path='/User/:userId' element= {<User />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
