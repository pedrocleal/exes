import styled from "styled-components";

export const BoxesSection = styled.section`
  display: flex;
  padding: 20px;
`

export const BoxContainer = styled.div`
  width: 160px;
  height: 140px;
  margin-right: 30px;
  padding: 20px;
  border-radius: 20px;

  background: ${props => 
    props.color === 'green' 
    ? 'linear-gradient(142.97deg, #002441 21.92%, rgba(17, 35, 64, 0.929476) 37.37%, rgba(65, 234, 212, 0.42) 155.33%);'
    : ' linear-gradient(142.97deg, #002441 21.92%, rgba(17, 35, 64, 0.929476) 37.37%, rgba(247, 23, 53, 0.42) 72.07%);'
  };

  h3 {
    margin-top: 40px;
  }
`