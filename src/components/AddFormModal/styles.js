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

  .closeBtn {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 8px;
    border: 2px solid var(--yellow);
    background: var(--yellow);
    color: #fff;
    font-weight: 700;

    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;
  }

  position: relative;

  background-color: var(--primary);
  width: 350px;
  padding: 10px 30px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 720px) {
    margin: 30px;
  }
  
  h2 {
    text-align: center;
  }

  p {
    margin-top: -10px;
    margin-bottom: 30px;
    font-size: 16px;
    text-align: justify;
    color: var(--yellow);
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 10px;
    }

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
