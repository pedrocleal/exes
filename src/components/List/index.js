import { ListContainer, Container } from './styles';
import Item from "../Item"

import { useItems } from '../../contexts/ItemsContext';

function List() {
  const { items } = useItems();

  return (
    <Container>
      <h2>Visão Geral</h2>
      <ListContainer>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            value={item.value}
          />
        ))}
      </ListContainer>
    </Container>
  )
}

export default List