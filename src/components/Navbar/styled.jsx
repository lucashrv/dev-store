import { styled } from "styled-components"

export const DivNavStyled = styled.nav`
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
`

export const HeaderStyled = styled.header`
    width: 100%;
`

export const CartStyled = styled.div`
    & a {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const DivStyled = styled.div`
    width: 400px;

    @media (max-width: 700px) {
        display: none;
        width: 0;
    }
`

export const MenuIcon = styled.div`
    cursor: pointer;
    display: none;

    @media (max-width: 700px) {
        display: block;
    }
`

export const MenuMobile = styled.div`
    background-color: #232323f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
    position: absolute;
    z-index: 999;
    width: 100%;
    transition: all .5s;

    & a {
        font-size: 1.7rem;
        margin: 10px;
        color: #fff;
    }

    & a:hover {
        font-size: 1.7rem;
        margin: 10px;
        color: #b9b9b9;
    }
`