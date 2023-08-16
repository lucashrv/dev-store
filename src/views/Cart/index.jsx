import { useEffect } from 'react';
import {
    MainStyled,
    CardsContainer
} from "./styled"
import Card from '../../components/Card/index';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsTotalPrice } from '../../redux/cart/cart.selectors';

export default function Products() {

    const { products } = useSelector(state => state.cartReducer)
    const totalPrice = useSelector(selectProductsTotalPrice)

    useEffect(() => {
        console.log(products);
    }, [products])
    return <>
        <MainStyled>
            <h1>Carrinho</h1>
            {products.length > 0 && <h2>Total: {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>}
            <CardsContainer>
                {products && products.map(product => {
                    return (
                        <Card
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            quantity={product.quantity}
                            category={product.category}
                            img={product.img ? product.img : ''}
                            amount={product.amount}
                            price={product.price}
                            isCart={true}
                        />)
                })}
                {products.length === 0 && <p>Não há produtos no carrinho</p>}
            </CardsContainer>

        </MainStyled>
    </>
}