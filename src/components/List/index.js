import { ListContainer } from './styles';
import Item from "../Item"

function List() {
  return (
    <ListContainer>
      <h2>Overview</h2>
      <Item />
      <Item />
      <Item />
      <Item />
    </ListContainer>
  )
}

export default List