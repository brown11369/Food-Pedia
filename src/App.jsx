import './App.css'
import Products from './components/Products'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Addfood from './components/Addfood';
import Home from './pages/Home';




function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/wp-admin' element={<Products />} />
        <Route path='/add-food' element={<Addfood />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
