import styled from 'styled-components'

export const ButtonStyled = styled.button`
    color: ${props => props.color ? props.color : '#000'};
    background-color: ${props => props.variant ? props.variant : "#fff"};
    border: none;
    padding: ${props => props.padding ? props.padding : "10px 15px"};;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`