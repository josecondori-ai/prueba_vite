import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Convertidor} from './components/convertidor'
import { BuscarLista } from './components/BuscarLista'


function App() {

  return (
    <div className="App">
       <Header/>
     <Convertidor/>
     <BuscarLista/>
    </div>
  )
}

export default App
