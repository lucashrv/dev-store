import { useState, useEffect } from 'react'
import {
    CardContainer,
    ImgContainer,
    InfoContainer,
    PriceContainer,
    IconsContainer,
} from './styled'
import Button from '../Button/index'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    AddProduct,
    RemoveProduct,
    AddQuantity,
    RemoveQuantity
} from '../../redux/cart/actions';

export default function Card(props) {

    const {
        id,
        quantity = 0,
        img,
        title,
        amount,
        price,
        category,
        onClickEdit,
        onClickDelete,
        isCart = false
    } = props

    const dispatch = useDispatch()

    const [titleFormat, setTitleFormat] = useState(title)
    const [categoryFormat, setCategoryFormat] = useState(category)

    useEffect(() => {
        // Format large words to ( word... )
        const textFormat = (str = '', size) => {
            let text = str.toString().split(' ').map(item => {

                if (size === 'big' && item.length > 11) {

                    return item.substr(0, 12) + '...'

                } else if (size === 'small' && item.length > 17) {

                    return item.substr(0, 16) + '...'

                }

                return item
            })

            let textFull = ''

            text.forEach(item => {
                return textFull += item + ' '
            })

            return textFull
        }

        setTitleFormat(textFormat(title, 'big'))
        setCategoryFormat(textFormat(category, 'small'))
    }, [title, category])

    const onClickAddCart = () => {
        dispatch(AddProduct({
            img,
            title,
            amount,
            price,
            category,
            id
        }))
    }

    const removeCart = () => {
        dispatch(RemoveProduct(id))
    }

    const addQuantityToProduct = () => {
        dispatch(AddQuantity(id))
    }
    const removeQuantityToProduct = () => {
        dispatch(RemoveQuantity(id))
    }

    return (
        <>
            <CardContainer>
                <ImgContainer>
                    {!isCart &&
                        <IconsContainer>
                            <span
                                className="material-symbols-outlined"
                                style={{ color: '#3ca0e7', }}
                                onClick={onClickEdit}
                            >
                                edit
                            </span>

                            <span
                                className="material-symbols-outlined"
                                style={{ color: '#e10000', }}
                                onClick={onClickDelete}
                            >
                                delete
                            </span>
                        </IconsContainer>
                    }
                    {isCart &&
                        <IconsContainer>
                            <span
                                className="material-symbols-outlined"
                                style={{ color: '#000', }}
                                onClick={removeCart}
                            >
                                close
                            </span>
                        </IconsContainer>
                    }
                    <img src={img} alt={title} />
                </ImgContainer>
                <InfoContainer>
                    <h4>{titleFormat ?? 'Produto'}</h4>

                    <h5>{categoryFormat ?? 'Sem categoria'}</h5>

                    <h5>Estoque: {amount ?? '0'}</h5>
                    <PriceContainer>
                        <h4>{price ?? 'R$ 0'}</h4>

                        {!isCart && <Button
                            onClick={onClickAddCart}
                            color='#fff'
                            variant='#3ca0e7'
                            padding='5px 5px'
                        >
                            Carrinho
                        </Button>}

                        {isCart && <>
                            <Button
                                onClick={removeQuantityToProduct}
                                color='#000'
                                variant='#fff'
                                padding='0 5px 5px 5px'
                            >
                                -
                            </Button>

                            { quantity }

                            <Button
                                onClick={addQuantityToProduct}
                                color='#000'
                                variant='#fff'
                                padding='0 5px 5px 5px'
                            >
                                +
                            </Button>
                        </>}
                    </PriceContainer>
                </InfoContainer>

            </CardContainer>
        </>
    );
}