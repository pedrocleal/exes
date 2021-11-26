import styled from "styled-components";

export const Container = styled.section`
  background: var(--secondary);
  min-height: 60vh;
  height: 100%;
  border-radius: 20px 20px 0 0;
  text-align: center;
  
  h2 {
    padding-top: 20px;
  }

  @media (min-width: 720px) {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

    ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #FFB652;
  }
`