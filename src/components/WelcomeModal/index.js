import ReactDom from "react-dom";
import { Overlay, Container, InputContainer } from "./styles";
import Input from '../Input';

function WelcomeModal({ name, setName, isOpen, onClose}) {

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('username', JSON.stringify(name));
    onClose();
  }

  if (!isOpen) {
    return null
  }

  return ReactDom.createPortal(
  <Overlay>
    <Container>
      <h1>Bem-vindo ao <strong>EXES</strong></h1>
      <h2><strong>EXES</strong> é um aplicativo onde você consegue ter o controle de suas despesas
        pessoais de forma rápida e segura.
      </h2>
      <InputContainer>
        <form onSubmit={handleSubmit}>
          <Input label="Seu nome" value={name} onChange={handleInputChange} placeholder="Digite seu nome" required/>
          <button type="submit">Iniciar</button>
        </form>
      </InputContainer>
    </Container>
  </Overlay>,
  document.getElementById('welcome-root')
  );
}

export default WelcomeModal