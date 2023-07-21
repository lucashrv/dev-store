import {
    BackgroundModal,
    ModalContainer,
    ButtonBox
} from './styled'
import Button from '../Button'
import Separator from '../Separator'

export default function Modal ({ isOpen, setModalOpen, children, handleDelete }) {

    if (isOpen) {
        return (
            <BackgroundModal>
                <ModalContainer>
                    <div>{children}</div>
                    <ButtonBox>
                        <Button
                            onClick={handleDelete}
                            color='#fff'
                            variant={'red'}
                        >
                            Sim
                        </Button>

                        <Separator width='15px' />

                        <Button
                            onClick={setModalOpen}
                            color='#fff'
                            variant='#3ca0e7'
                        >
                            Não
                        </Button>
                    </ButtonBox>
                </ModalContainer>
            </BackgroundModal>
        )
    }

    return null
}