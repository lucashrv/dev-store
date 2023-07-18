import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

//Routes
import Categories from './views/Categories'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/categories' element={ <Categories /> } />
      </Routes>
    </>
  )
}

export default App
