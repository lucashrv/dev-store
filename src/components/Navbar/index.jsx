import { useState } from "react"
import DropdownNav from "../DropdownNav/index.jsx"
import {
    DivNavStyled,
    HeaderStyled,
    DivStyled,
    CartStyled,
    MenuMobile,
    MenuIcon
} from "./styled.jsx"
import './style.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectProductsCount } from './../../redux/cart/cart.selectors';

export default function Navbar() {
    const productsCount = useSelector(selectProductsCount)

    const [toggleMenu, settoggleMenu] = useState(true)

    if (!toggleMenu) {
        document.querySelector('body').style.overflow = 'hidden'
    } else {
        document.querySelector('body').style.overflow = 'auto'
    }

    return <>
        <MenuMobile
            className={toggleMenu ? 'menu_mobile_up' : 'menu_mobile_down'}
        >
            <Link onClick={() => settoggleMenu(true)} to="/" >Listar produtos</Link>
            <Link onClick={() => settoggleMenu(true)} to="/products/register" >Cadastrar produtos</Link>
            <Link onClick={() => settoggleMenu(true)} to="/categories" >Listar categorias</Link>
            <Link onClick={() => settoggleMenu(true)} to="/categories/register" >Cadastrar categorias</Link>
        </MenuMobile>

        <HeaderStyled>
            <DivNavStyled>
                <MenuIcon
                    onClick={() => settoggleMenu(!toggleMenu)}
                >
                    {toggleMenu &&
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    }
                    {!toggleMenu &&
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    }
                </MenuIcon>

                <Link to="/" className="logo" >Dev Store</Link>

                <DivStyled>
                    <DropdownNav />
                </DivStyled>

                <CartStyled>
                    <Link to="/cart" className="cart" >
                        <span
                            className="material-symbols-outlined"
                            style={{
                                fontSize: '1.5rem',
                            }}
                        >
                            shopping_cart
                        </span>

                        {`Carrinho(${productsCount})`}
                    </Link>
                </CartStyled>

            </DivNavStyled>
        </HeaderStyled>
    </>
}