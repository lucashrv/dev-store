import './style.css'
import { Link } from 'react-router-dom'

export default function DropdownNav() {
    return <>
        <nav role="navigation" className="primary-navigation">
            <ul>
                {/* <li><a href="/">Home</a></li> */}
                <li><Link to="/"  className='color_links' >Home</Link></li>
                <li><p className='color_links'>Produtos &darr;</p>
                    <ul className="dropdown">
                        <li><Link to="/" className='dropdowns' >Listar produtos</Link></li>
                        <li><Link to="/products/register" className='dropdowns' >Cadastrar produtos</Link></li>
                    </ul>
                </li>
                <li><p className='color_links' >Categorias &darr;</p>
                    <ul className="dropdown">
                        <li><Link to="/categories" className='dropdowns' >Listar categorias</Link></li>
                        <li><Link to="/categories/register" className='dropdowns' >Cadastrar categorias</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
}