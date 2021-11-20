import { useItems } from "../../contexts/ItemsContext"
import { Container } from "./styles"

function UserData() {

  const { items } = useItems();

  const itemsValue = items.map(item => Number(item.value));

  const balance = itemsValue.reduce((accum, total) => accum + total, 0);

  console.log(balance);

  return (
    <Container>
      <p>Hello, <strong>Pedro Leal</strong></p>
      <p>My Balance: <strong style={{ color: balance > 0 ? '#41EAD4' : '#F71735'}}>R$ {balance},00</strong></p>
    </Container>
  )
}

export default UserData