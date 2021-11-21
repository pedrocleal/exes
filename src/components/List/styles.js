import styled from "styled-components";

export const Container = styled.section`
  background: var(--secondary);
  border-radius: 20px 20px 0 0;
  text-align: center;
  height: 100vh;
  scroll-behavior: unset; 
  
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

  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow-y: auto;
  scroll-behavior: smooth;
`