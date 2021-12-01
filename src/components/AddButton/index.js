import { useState } from 'react'
import AddFormModal from '../AddFormModal'
import { Button } from './styles'

function AddButton() {

  const [ isModalOpen, setIsModalOpen ] = useState(false); 

  return (
    <>
      <AddFormModal 
        isOpen={isModalOpen} 
        onCloseModal={() => setIsModalOpen(false)}
      />
      <Button onClick={() => setIsModalOpen(prevState => !prevState)}>+</Button>
    </>
  )
}

export default AddButton