import styled from 'styled-components'

export const CardContainer = styled.div`
    box-shadow: 0px 0px 5px 3px #d4d4d4;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    color: #000;
    margin: 15px auto;
    transition: all .5s;

    &:hover {
        scale: 1.05;
    }
`

export const ImgContainer = styled.div`
    width: 200px;
    border-radius: 10px 10px 0 0;
    height: 170px;

    & img {
        border-radius: 10px 10px 0 0;
        width: 200px;;
        height: 170px;
    }
`
export const IconsContainer = styled.div`
    width: 60px;
    border-radius: 10px;
    margin-left: 140px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;

    &:hover {
        background-color: rgba(0, 0, 0, 0.046);
    }

    & span:hover {
        cursor: pointer;
    }
`

export const InfoContainer = styled.div`
    width: 200px;
    color: #000;
    height: 130px;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & p {
        font-size: .8rem;
        margin: 5px 0;
    }

    & h4 {
        margin-top: 5px;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`