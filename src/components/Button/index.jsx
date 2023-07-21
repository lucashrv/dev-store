import { ButtonStyled } from "./styled"

export default function Button({ children, onClick, color, variant, type }) {
    return (
        <>
            <ButtonStyled
                onClick={onClick}
                color={color}
                variant={variant}
                type={type}
            >
                {children}
            </ButtonStyled>
        </>
    )
}