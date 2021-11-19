import { BoxContainer, BoxesSection } from "./styles"

function Box() {  
  return (
    <BoxesSection>
      <BoxContainer color={'green'}>
        <h3>Incomes</h3>
        <h2>R$ 1500,00</h2>
      </BoxContainer>

      <BoxContainer>
        <h3>Outcomes</h3>
        <h2>R$ 1500,00</h2>
      </BoxContainer>
    </BoxesSection>
  )
}

export default Box