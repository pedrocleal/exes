import styled from "styled-components";

export const Container = styled.div`
  padding: 20px; 
  margin: 30px 30px 10px 20px;
  font-size: 16px;
  width: 80%;
  height: 80px;
  border-radius: 20px;

  p {
    margin-top: 0;
  }

  background: var(--secondary);

  @media (min-width: 720px) {
    margin: 0 auto;
    margin-top: 30px;

    width: 280px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  strong {
    font-size: 24px;
    font-weight: 800;
    color: var(--yellow);
  }
`