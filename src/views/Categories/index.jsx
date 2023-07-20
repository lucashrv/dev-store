import { useApi } from "../../hooks/useApi"
import {
    MainStyled,
    DivSearch,
    CategoriesSection,
    CategoriesBox,
    IconBox
} from "./styled"
import Input from "../../components/Input"
import { useEffect, useState } from 'react';

export default function Categories() {

    const URL = "http://localhost:8080/api/categories/getAll"
    const { data: categoriesList, loading, error } = useApi(URL)

    const [searchedData, setSearchedData] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        if (!loading) {
            setSearchedData(categoriesList)
        }
    }, [loading])

    const searchCategories = () => {
        !loading &&
            setSearchedData(categoriesList.filter(category => {
                let valid = false

                if (category.name.toLowerCase().includes(searchValue)) {
                    valid = true
                }
                return valid
            }))
        console.log(searchValue);
        console.log(searchedData);
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
                                        onClick={() => console.log(category.id)}
                                    >
                                        edit
                                    </span>

                                    <span
                                        className="material-symbols-outlined"
                                        style={{ color: '#e10000', }}
                                        onClick={() => console.log(category.id)}
                                    >
                                        delete
                                    </span>
                                </IconBox>
                            </CategoriesBox>)
                    })
                }

                {!loading && searchedData.length === 0 && <h4>Nenhuma categoria encontrada</h4>}

            </CategoriesSection>
        </MainStyled>
    </>
}