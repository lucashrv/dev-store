import {
    MainStyled,
    DivSearch
} from "./styled"
import Input from "../../components/Input"
import Select from "../../components/Select"

export default function Products () {
    return <>
        <MainStyled>
            <h1>Categorias</h1>
            <DivSearch>
                <Input title='Pesquisar categoria' />
                <Select title='Filtrar' />
                <Select />
            </DivSearch>
        </MainStyled>
    </>
}