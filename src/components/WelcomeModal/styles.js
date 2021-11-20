import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.46);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const Container = styled.div`
  position: relative;
  width: 700px;
  height: 500px;

  background: var(--secondary);
  padding: 30px;
  border-radius: 20px;

  strong {
    color: var(--yellow);
  }

  h2 {
    margin-top: 80px;
  }

  @media (max-width: 720px) {
    margin: 20px;
  }
`

export const InputContainer = styled.div`
  form {
    margin: auto;
    margin-top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  button {
    height: 40px;
    width: 100px;
    margin: 30px 0;

    border: none;
    outline: none;
    cursor: pointer;

    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    color: #000;
    background: var(--green);
  }

`