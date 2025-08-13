import './App.css'
import Card from './Components/Card'

const alt = "dog-image"

function App() {

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
    </>
  )
}

export default App
