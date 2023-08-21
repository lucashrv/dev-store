import { useState, useEffect } from 'react';
import {
    MainStyled,
    DivSearch,
    CardsContainer
} from "./styled"
import Input from "../../components/Input"
import Select from "../../components/Select"
import { useApi } from '../../hooks/useApi';
import Card from './../../components/Card/index';
import { notifySuccess, notifyError } from '../../components/notify'
import { ToastContainer } from 'react-toastify';
import axios from 'axios'
import Modal from './../../components/Modal/index';
import Separator from '../../components/Separator';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const urlCategories = import.meta.env.VITE_URL + '/categories'
    const urlProducts = import.meta.env.VITE_URL + '/products'

    const navigate = useNavigate()

    const { data: categories } = useApi(`${urlCategories}/getAll`)
    const { data: products, loading, error } = useApi(`${urlProducts}/getAll`)

    const [productsData, setProductsData] = useState(products)
    const [searchValue, setSearchValue] = useState("")
    const [searchCategory, setSearchCategory] = useState("")

    //Modal
    const [openModal, setOpenModal] = useState(false)
    const [modalInfo, setModalInfo] = useState({
        id: "",
        name: ""
    })

    useEffect(() => {
        if (!loading) {
            setProductsData(products)
        }
    }, [loading, products])

    const deleteProduct = async (id) => {
        try {

            await axios.delete(`${urlProducts}/destroy/${id}`)

            setProductsData(productsData.filter(item => item.id !== id))
            setOpenModal(false)
            console.log(products);
            console.log(productsData);
            notifySuccess('Produto deletado com sucesso')

        } catch (error) {

            console.log(error)
            notifyError('Ocorreu um erro ao deletar')

        }
    }

    const filterSearchs = () => {

        !loading &&
            setProductsData(products.filter(item => {
                let valid = false

                const itemName = item.name.toLowerCase()

                if (
                    !searchValue &&
                    !searchCategory
                ) {
                    valid = true
                }

                if (
                    !searchValue &&
                    searchCategory === 'category'
                ) {
                    valid = true
                }

                if (
                    !searchValue &&
                    searchCategory === 'category'
                ) {
                    valid = true
                }

                if (
                    itemName.includes(searchValue) &&
                    searchCategory === 'category'
                ) {
                    valid = true
                }

                if (
                    !searchValue &&
                    +searchCategory === +item.categoryId
                ) {
                    valid = true
                }

                if (
                    !searchCategory &&
                    itemName.includes(searchValue)
                ) {
                    valid = true
                }

                if (
                    +searchCategory === +item.categoryId &&
                    itemName.includes(searchValue)
                ) {
                    valid = true
                }

                return valid
            }))
    }

    return <>
        <MainStyled>
            <h1>Produtos</h1>
            <DivSearch>
                <Input
                    title='Pesquisar produto'
                    value={searchValue}
                    onKeyUp={filterSearchs}
                    onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                />

                <Separator width='30px' height='15px' />

                <Select
                    title='Categorias'
                    options={categories.map(category => {
                        return (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        )
                    })}
                    onClick={filterSearchs}
                    onChange={e => setSearchCategory(e.target.value)}
                />

                <Separator width='30px' height='15px' />

                <Button
                    onClick={() => navigate("/products/register")}
                    color='#fff'
                    variant='#5cb85c'
                >
                    Cadastrar produto
                </Button>

            </DivSearch>
            <CardsContainer>
                {loading && <p>Carregando...</p>}
                {error && <p>Carregando...</p>}
                {!loading && productsData.map(product => {
                    return (
                        <Card
                            key={product.id}
                            id={product.id}
                            img={product.image ? import.meta.env.VITE_IMG_URL + product.image : ''}
                            title={product.name}
                            category={product["category.name"]}
                            amount={product.amount}
                            price={product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            onClickEdit={() => navigate(`/products/edit/${product.id}`)}
                            onClickDelete={() => {
                                setModalInfo({
                                    id: product.id,
                                    name: product.name,
                                })
                                setOpenModal(!openModal)
                            }}
                        />)
                })}
                {!loading && !error && productsData.length === 0 && <p>Nenhum produto encontrado</p>}
            </CardsContainer>

            <Modal
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}
                handleDelete={() => deleteProduct(modalInfo.id)}
            >
                <h4>Deseja deletar o produto: {modalInfo.name}?</h4>
            </Modal>
            <ToastContainer />

        </MainStyled>
    </>
}