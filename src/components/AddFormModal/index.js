import { useState } from "react";
import ReactDom from "react-dom";
import Input from "../Input";
import { Container, Overlay } from "./styles";

const initialValues = {
  title: '',
  value: ''
}

function AddFormModal({ isOpen, onCloseModal }) {

  const [ inputValues, setInputValues ] = useState(initialValues);

  function handleFormSubmit(e) {
    e.preventDefault()
    onCloseModal();
  }

  function handleInputChange(e) {
    const { name ,value } = e.target;
    setInputValues(prevState => (
      {
        ...prevState,
        [name]: value
      }
    ));
  }

  if (!isOpen) {
    return null
  }

  return ReactDom.createPortal(
    <Overlay>
      <Container>
        <h2>Add new income/outcome</h2>
        <form onSubmit={handleFormSubmit}>
          <Input name="title" onChange={handleInputChange} label="Title"/>
          <Input name="value" onChange={handleInputChange} label="Value"/>
          <button>Adicionar</button>
        </form>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  )
}

export default AddFormModal