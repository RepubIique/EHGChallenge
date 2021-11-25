import logo from './logo.svg'
import './App.css'
import { ColorGen } from './components/ColorGen/normalColorGen'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ColorGen />
    </div>
  )
}

export default App
