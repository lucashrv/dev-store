import styled from 'styled-components'

export const MainStyled = styled.main`
    width: 90%;
    margin: 30px auto;
    padding: 20px 30px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 5px;
`

export const DivSearch = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
`

export const CategoriesSection = styled.section`
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, auto));
    justify-items: center;
    align-items: center;

    @media only screen and (max-width: 415px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, auto));
    }
`

export const CategoriesBox = styled.div`
    border: 1px solid;
    border-radius: 15px 3px 15px 3px;
    width: 300px;
    height: 50px;
    margin: 10px 10px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h3 {
        font-size: .8rem;
    }

    @media only screen and (max-width: 415px) {
        width: 250px;
    }
`

export const IconBox = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & span {
        cursor: pointer;
        font-size: 2rem;
    }
`

export const NewCatContainer = styled.div`
    margin-top: 50px;
`

export const ButtonBox = styled.div`
    display: flex;
    align-items:center;
`
