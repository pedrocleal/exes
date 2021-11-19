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
  
`

export const Container = styled.div`
  position: relative;

  background-color: var(--primary);
  width: 350px;
  padding: 10px 30px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    button {
    height: 40px;
    margin: 40px 0;

    border: none;
    outline: none;
    cursor: pointer;

    border-radius: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    color: #000;
    background: var(--green);
  }
  }
`
