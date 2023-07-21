import styled from 'styled-components'

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 1000;
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 25px;
    transform: translate(-50%, -50%);
    height: 250px;
    width: 60%;
    border-radius: 10px;
    color: black;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

export const ButtonBox = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
`
