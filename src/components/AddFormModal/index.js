import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useItems } from "../../contexts/ItemsContext";
import Input from "../Input";
import { Container, Overlay } from "./styles";

const initialValues = {
  title: '',
  value: ''
}

function AddFormModal({ isOpen, onCloseModal }) {

  const [ inputValues, setInputValues ] = useState(initialValues);
  const { items, setItems } = useItems();

  useEffect(() => { localStorage.setItem('items', JSON.stringify(items))}, [items]);

  function handleAddItem() {
    setItems((prevState) => [
      {
        id: items.length + 1,
        title: inputValues.title,
        value: inputValues.value
      },
      ...prevState
    ])
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    onCloseModal();
    handleAddItem();
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
          <Input type="number" name="value" onChange={handleInputChange} label="Value"/>
          <button>Adicionar</button>
        </form>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  )
}

export default AddFormModal