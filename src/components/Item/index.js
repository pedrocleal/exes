import { ItemBox } from './styles';

function Item({ title, value}) {
  return (
    <ItemBox>
      <span>{title}</span>
      <strong style={{ color: value > 0 ? '#41EAD4' : '#F71735'}}>R${value}</strong>
    </ItemBox>
  )
}

export default Item