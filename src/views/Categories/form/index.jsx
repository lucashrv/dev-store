import { useState, useEffect } from "react"
import Input from "../../../components/Input"
import {
    MainStyled,
    NewCatContainer,
    ButtonBox
} from "../styled"
import Button from "../../../components/Button"
import Separator from "../../../components/Separator"
import axios from "axios"
import { ToastContainer } from "react-toastify"
import { notifyError, notifySuccess } from "../../../components/notify"
import { useNavigate, useParams } from "react-router-dom"
import { useApi } from "../../../hooks/useApi"

export default function CategoriesForm() {

    const { id } = useParams()

    const [name, setName] = useState("")
    const urlPost = `${import.meta.env.VITE_URL}/categories/create`
    const urlPut = `${import.meta.env.VITE_URL}/categories/update/${id}`

    const { data: category } = useApi(`${import.meta.env.VITE_URL}/categories/${id ?? 0}`)

    useEffect(() => {
        if(id) {
            setName(category.name)
        }
    }, [id, category])

    const navigate = useNavigate()

    const handleSave = async () => {
        if (!name) {
            notifyError('Nome é obrigatório')
            return
        }

        try {
            if (!id) {
                await axios.post(urlPost, {
                    name
                })

                setName('')
            } else {
                await axios.put(urlPut, {
                    name
                })
            }

            notifySuccess(`Categoria ${id ? 'atualizada' : 'criada'} com sucesso`)
        } catch (error) {
            console.log(error)
            notifyError(error.response.data.msg)
        }
    }

    return <>
        <MainStyled>
            <h1>{id ? 'Edição de categoria' : 'Cadastro de categoria'}</h1>

            <NewCatContainer>
                <Input
                    title='Nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Separator height='30px' />

                <ButtonBox>
                    <Button
                        onClick={handleSave}
                        color='#fff'
                        variant='#5cb85c'
                        type='submit'
                    >
                        {id ? 'Atualizar' : 'Cadastrar'}
                    </Button>

                    <Separator width='20px' />

                    <Button
                        onClick={() => navigate('/categories')}
                        color='#fff'
                        variant='#434343'
                    >
                        Voltar
                    </Button>
                </ButtonBox>
            </NewCatContainer>
        </MainStyled>
        <ToastContainer />
    </>
}