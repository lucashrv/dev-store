import DropdownNav from "../DropdownNav/index.jsx"
import {
    DivNavStyled,
    HeaderStyled,
    DivStyled,
    CartStyled
} from "./styled.jsx"
import './style.css'
import { Link } from "react-router-dom"

export default function Navbar() {
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

                        Carrinho
                    </Link>
                </CartStyled>

            </DivNavStyled>
        </HeaderStyled>
    </>
}