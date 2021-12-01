import { Container, ItemBox, RemoveButton } from './styles';
import { useItems } from '../../contexts/ItemsContext';

function Item({ title, value, id }) {
  const { setItems } = useItems();  
  
  function handleRemoveItem(clickId) {
    setItems(prevState => prevState.filter(item => item.id !== clickId));
  }

  return (
    <Container>
      <ItemBox>
        <span>{title}</span>
        <strong style={{ color: value > 0 ? '#41EAD4' : '#F71735'}}>R${value},00</strong>
      </ItemBox>
      <RemoveButton className="button" onClick={() => handleRemoveItem(id)}>X</RemoveButton>
    </Container>
  )
}

export default Item