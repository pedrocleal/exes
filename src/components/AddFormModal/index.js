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
        id: Math.round(Math.random() * 100),
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
        <button className="closeBtn" onClick={() => onCloseModal()}>X</button>
        <h2>Adicione uma nova receita/despesa</h2>
        <p>*para despesas, adicione o sinal de negativo no ínicio do campo "Valor"</p>
        <form onSubmit={handleFormSubmit}>
          <Input 
            name="title" 
            onChange={handleInputChange} 
            label="Título" 
            placeholder="Ex: Salário"/>
          <Input 
            type="number" 
            name="value" 
            onChange={handleInputChange} 
            label="Valor" 
            placeholder="Ex: 1000"/>
          <button>Adicionar</button>
        </form>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  )
}

export default AddFormModal