import { ListContainer } from './styles';
import Item from "../Item"

import { useItems } from '../../contexts/ItemsContext';

function List() {
  const { items } = useItems();

  return (
    <ListContainer>
      <h2>Overview</h2>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          value={item.value}
        />
      ))}
    </ListContainer>
  )
}

export default List