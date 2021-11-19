import { useState } from 'react'
import AddFormModal from '../AddFormModal'
import { ButtonContainer, Button } from './styles'

function AddButton() {

  const [ isModalOpen, setIsModalOpen ] = useState(false); 

  return (
    <>
      <AddFormModal isOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)}/>
      <ButtonContainer>
        <Button onClick={() => setIsModalOpen(prevState => !prevState)}>+</Button>
      </ButtonContainer>
    </>
  )
}

export default AddButton