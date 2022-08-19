import './App.css'
import Products from './components/Products'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Addfood from './components/Addfood';



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/addfood' element={<Addfood />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
