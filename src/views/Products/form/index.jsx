import { useState, useEffect, useCallback, useRef } from "react"
import Input from "../../../components/Input"
import {
    MainStyled,
    NewCatContainer,
    ButtonBox
} from "../styled"
import './style.css'
import Button from "../../../components/Button"
import Separator from "../../../components/Separator"
import axios from "axios"
import { ToastContainer } from "react-toastify"
import { notifyError, notifySuccess } from "../../../components/notify"
import { useNavigate, useParams } from "react-router-dom"
import { useApi } from "../../../hooks/useApi"
import Select from "../../../components/Select"

export default function ProductsForm() {

    const { id } = useParams()

    const [localState, setLocalState] = useState({})
    const urlProducts = import.meta.env.VITE_URL + '/products'
    const urlCategories = import.meta.env.VITE_URL + '/categories'

    const { data: product, loading, error } = useApi(`${urlProducts}/getOne/${id ?? 0}`)
    const { data: categories } = useApi(`${urlCategories}/getAll`)

    const imgRef = useRef()

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            setLocalState({ ...product })
        }
    }, [id, product])

    const updateLocalState = useCallback(
        (key, value) => {
            setLocalState(prev => ({ ...prev, [key]: value }))
        },
        [])

    const handleSave = async (e) => {
        e.preventDefault()

        if (!localState.name) {
            notifyError('Nome é obrigatório')
            return
        }

        if (!localState.description) {
            notifyError('Descrição é obrigatório')
            return
        }

        if (!localState.categoryId) {
            notifyError('Categoria é obrigatório')
            return
        }

        if (!localState.amount) {
            notifyError('Estoque é obrigatório')
            return
        }

        if (!localState.price) {
            notifyError('Preço é obrigatório')
            return
        }

        if (!id && !localState.img) {
            notifyError('Imagem é obrigatória')
            return
        }

        try {

            const formData = new FormData()

            formData.append('name', localState.name)
            formData.append('description', localState.description)
            formData.append('categoryId', localState.categoryId)
            formData.append('amount', localState.amount)
            formData.append('price', localState.price)
            formData.append('image', localState.img)

            if (!id) {

                await axios.post(`${urlProducts}/create`, formData, {
                    headers: {
                        "Content-type": `multipart/form-data`
                    }
                })

            }
            else {
                await axios.patch(`${urlProducts}/update/${localState.id}`, {
                    name: localState.name,
                    description: localState.description,
                    categoryId: localState.categoryId,
                    amount: localState.amount,
                    price: localState.price
                })
            }

            notifySuccess(`Produto ${id ? 'atualizado' : 'criado'} com sucesso`)
        } catch (error) {
            console.log(error)
            notifyError(error.response.data.msg)
        }
    }

    const handleImage = (e) => {
        if (e.target.files[0]) {

            imgRef.current.src = URL.createObjectURL(e.target.files[0])
            imgRef.current.style.display = 'block'

        } else {
            imgRef.current.src = ''
            imgRef.current.style.display = 'none'
        }

        updateLocalState('img', e.target.files[0])
    }

    return <>
        <MainStyled>
            <h1>{id ? 'Edição de produto' : 'Cadastro de produto'}</h1>

            <NewCatContainer>
                <form action="" onSubmit={handleSave}>
                    <Input
                        title='Nome'
                        value={localState?.name}
                        onChange={e => updateLocalState('name', e.target.value)}
                    />

                    <Separator height='15px' />

                    <p>Descrição</p>

                    <Separator height='5px' />

                    <textarea
                        placeholder="Digite a descrição do produto"
                        rows="6"
                        cols="39"
                        value={localState?.description}
                        onChange={e => updateLocalState('description', e.target.value)}
                    >
                    </textarea>

                    <Separator height='15px' />

                    <Select
                        title='Categoria'
                        value={localState?.categoryId}
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
                        onChange={e => updateLocalState('categoryId', e.target.value)}
                    />

                    <Separator height='15px' />

                    <Input
                        title='Estoque'
                        type='number'
                        value={localState?.amount}
                        onChange={e => updateLocalState('amount', e.target.value)}
                    />

                    <Separator height='15px' />

                    <Input
                        title='Preço'
                        type='number'
                        value={localState?.price}
                        onChange={(e) => updateLocalState('price', e.target.value)}
                    />

                    <Separator height='15px' />

                    {!id && <>
                        <p>Foto do produto (200 x 170).png/jpg</p>

                        <Separator height='5px' />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                        ></input>

                    </>}

                    <Separator width='100%' />

                    <img
                        alt="preview"
                        ref={imgRef}
                        className='image'
                    />

                    <Separator height='30px' />

                    <ButtonBox>
                        <Button
                            color='#fff'
                            variant='#5cb85c'
                            type='submit'
                        >
                            {id ? 'Atualizar' : 'Cadastrar'}
                        </Button>

                        <Separator width='20px' />

                        <Button
                            onClick={() => navigate('/')}
                            color='#fff'
                            variant='#434343'
                            type='button'
                        >
                            Voltar
                        </Button>
                    </ButtonBox>
                </form>
            </NewCatContainer>
        </MainStyled>
        <ToastContainer />
    </>
}