import { useItems } from "../../contexts/ItemsContext"
import { BoxContainer, BoxesSection } from "./styles"

function Box() {
  
  const { items } = useItems();

  const incomesItems = items.filter(item => item.value > 0);
  const incomesValues = incomesItems.map(item => Number(item.value));
  const totalIncomes = incomesValues.reduce((accum, curr) => accum + curr,0);

  const outcomeItems = items.filter(item => item.value < 0);
  const outcomeValues = outcomeItems.map(item => Number(item.value));
  const totalOutcomes = outcomeValues.reduce((accum, curr) => accum + curr, 0);
  
  return (
    <BoxesSection>
      <BoxContainer color={'green'}>
        <h3>Receitas</h3>
        <h2>R$ {totalIncomes}</h2>
      </BoxContainer>

      <BoxContainer>
        <h3>Despesas</h3>
        <h2>R$ {totalOutcomes}</h2>
      </BoxContainer>
    </BoxesSection>
  )
}

export default Box