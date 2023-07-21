import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

//Routes
import Categories from './views/Categories'
import Products from './views/Products/index';
import CategoriesForm from './views/Categories/form';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Products /> } />
        <Route path='/categories' element={ <Categories /> } />
        <Route path='/categories/register' element={ <CategoriesForm /> } />
        <Route path='/categories/edit/:id' element={ <CategoriesForm /> } />
      </Routes>
    </>
  )
}

export default App
