import {
    MainStyled,
    DivSearch
} from "./styled"
import Input from "../../components/Input"

export default function Categories () {
    return <>
        <MainStyled>
            <h1>Categorias</h1>
            <DivSearch>
                <Input title='Pesquisar categoria' />
            </DivSearch>
        </MainStyled>
    </>
}