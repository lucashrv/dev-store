import styled from 'styled-components'

export const MainStyled = styled.main`
    width: 90%;
    margin: 30px auto;
    /* min-height: 80vh; */
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CategoriesBox = styled.div`
    border: 2px solid;
    border-radius: 15px 3px 15px 3px;
    min-width: 500px;
    max-width: 500px;
    height: 50px;
    margin: 10px 10px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h3 {
        max-width: 350px;
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
export const CardsContainer = styled.div`
    border: 1px solid green;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;

    & p {
        margin: 0 auto;
    }
`