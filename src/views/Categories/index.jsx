import { useApi } from "../../hooks/useApi"
import axios from 'axios'
import {
    MainStyled,
    DivSearch,
    CategoriesSection,
    CategoriesBox,
    IconBox
} from "./styled"
import Input from "../../components/Input"
import { useEffect, useState } from 'react';
import Modal from './../../components/Modal/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Separator from "../../components/Separator";
import Button from "../../components/Button";
import { useNavigate  } from "react-router-dom";

export default function Categories() {

    const URL = `${import.meta.env.VITE_URL}/categories`
    const { data: categoriesList, loading, error } = useApi(`${URL}/getAll`)
    const navigate = useNavigate();

    const [searchedData, setSearchedData] = useState([])
    const [searchValue, setSearchValue] = useState("")

    //Modal
    const [openModal, setOpenModal] = useState(false)
    const [modalInfo, setModalInfo] = useState({
        id: "",
        name: ""
    })

    const notifySuccess = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    const notifyError = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })

    useEffect(() => {
        if (!loading) {
            setSearchedData(categoriesList)
        }
    }, [loading, categoriesList])

    const searchCategories = () => {
        !loading &&
            setSearchedData(categoriesList.filter(category => {
                let valid = false

                if (category.name.toLowerCase().includes(searchValue)) {
                    valid = true
                }
                return valid
            }))
    }

    const deleteCategory = async (id) => {
        try {

            await axios.delete(`${URL}/destroy/${id}`)

            setSearchedData(searchedData.filter(category => category.id !== id))
            setOpenModal(false)

            notifySuccess('Categoria deletada com sucesso')

        } catch (error) {

            console.log(error)
            notifyError('Ocorreu um erro ao deletar')

        }
    }

    return <>
        <MainStyled>
            <h1>Categorias</h1>
            <DivSearch>
                <Input
                    title='Pesquisar categoria'
                    value={searchValue}
                    onKeyUp={searchCategories}
                    onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                />
                <Separator width='20px' />
                <Button
                    onClick={() => navigate("/categories/register")}
                    color='#fff'
                    variant='#5cb85c'
                >
                    Cadastrar categoria
                </Button>
            </DivSearch>

            <CategoriesSection>

                {loading && <h4>Carregando...</h4>}
                {error && <h4>Erro no carregamento</h4>}

                {!loading && searchedData.length > 0 &&
                    searchedData.map(category => {
                        return (
                            <CategoriesBox key={category.id}>
                                <h3>{category.name}</h3>
                                <IconBox>
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ color: '#3ca0e7', }}
                                        onClick={() => navigate(`/categories/edit/${category.id}`)}
                                    >
                                        edit
                                    </span>

                                    <span
                                        className="material-symbols-outlined"
                                        style={{ color: '#e10000', }}
                                        onClick={() => {
                                            setModalInfo({
                                                id: category.id,
                                                name: category.name,
                                            })
                                            setOpenModal(!openModal)
                                        }}
                                    >
                                        delete
                                    </span>
                                </IconBox>
                            </CategoriesBox>)
                    })
                }

                {!loading && !error && searchedData.length === 0 && <h4>Nenhuma categoria encontrada</h4>}

            </CategoriesSection>
        </MainStyled>
        <Modal
            isOpen={openModal}
            setModalOpen={() => setOpenModal(!openModal)}
            handleDelete={() => deleteCategory(modalInfo.id)}
        >
            <h4>Deseja deletar a categoria: {modalInfo.name}?</h4>
        </Modal>
        <ToastContainer />
    </>
}