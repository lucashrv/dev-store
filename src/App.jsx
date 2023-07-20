import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

//Routes
import Categories from './views/Categories'
import Products from './views/Products/index';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Products /> } />
        <Route path='/categories' element={ <Categories /> } />
      </Routes>
    </>
  )
}

export default App
