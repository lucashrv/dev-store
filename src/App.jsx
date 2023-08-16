import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

//Routes
import Categories from './views/Categories'
import CategoriesForm from './views/Categories/form';
import Products from './views/Products/index';
import ProductsForm from './views/Products/form';
import Cart from './views/Cart';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Products /> } />
        <Route path='/categories' element={ <Categories /> } />
        <Route path='/categories/register' element={ <CategoriesForm /> } />
        <Route path='/categories/edit/:id' element={ <CategoriesForm /> } />
        <Route path='/products/register' element={ <ProductsForm /> } />
        <Route path='/products/edit/:id' element={ <ProductsForm /> } />
        <Route path='/products/edit/:id' element={ <ProductsForm /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </>
  )
}

export default App
