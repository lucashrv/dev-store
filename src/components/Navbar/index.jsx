import DropdownNav from "../DropdownNav/index.jsx"
import {
    DivNavStyled,
    HeaderStyled,
    DivStyled,
    CartStyled
} from "./styled.jsx"
import './style.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useMemo } from "react";
import { selectProductsCount } from './../../redux/cart/cart.selectors';

export default function Navbar() {
    const productsCount = useSelector(selectProductsCount)

    return <>
        <HeaderStyled>
            <DivNavStyled>
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