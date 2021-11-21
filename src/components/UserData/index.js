import { useItems } from "../../contexts/ItemsContext"
import { Container } from "./styles"

function UserData() {

  const { items } = useItems();

  const itemsValue = items.map(item => Number(item.value));

  const balance = itemsValue.reduce((accum, total) => accum + total, 0);

  const userName = JSON.parse(localStorage.getItem('username'));
  
  return (
    <Container>
      <p>Bem-vindo, <strong>{userName}</strong></p>
      <p>Meu Saldo: <strong style={{ color: balance > 0 ? '#41EAD4' : '#F71735'}}>R$ {balance},00</strong></p>
    </Container>
  )
}

export default UserData