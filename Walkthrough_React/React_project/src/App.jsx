

import './App.css'
import Button from './Components/Button/Button'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Person from './Components/Person/Person'

function App() {
 
  return (
    <>
    <Header tittle="Welcom to my website friends !" />
    <Person name="Sandip" age="23" />
    <Button text="Click me!" onClick={() => console.log("Button clicked")} />
    <List items ={['book','shirt']} />
    </>
   
  )
}

export default App
