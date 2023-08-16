import { ButtonStyled } from "./styled"

export default function Button(props) {

    const {
        children,
        onClick,
        color,
        variant,
        type,
        padding
    } = props

    return (
        <>
            <ButtonStyled
                onClick={onClick}
                color={color ?? '#fff'}
                variant={variant ?? 'blue'}
                type={type ?? 'submit'}
                padding={padding}
            >
                {children}
            </ButtonStyled>
        </>
    )
}