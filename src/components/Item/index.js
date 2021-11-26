import { Container, ItemBox, RemoveButton } from './styles';


function Item({ title, value}) {
  return (
    <Container>
      <ItemBox>
        <span>{title}</span>
        <strong style={{ color: value > 0 ? '#41EAD4' : '#F71735'}}>R${value},00</strong>
      </ItemBox>
      <RemoveButton className="button">X</RemoveButton>
    </Container>
  )
}

export default Item