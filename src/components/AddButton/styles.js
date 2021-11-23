import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  left: 48.9%;
  top: 90%;
  border: none;
  outline: none;
  cursor: pointer;
  width: 60px;
  height: 60px;
  font-size: 52px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--yellow);
  color: #fff;
  border-radius: 50px;

  @media (max-width: 420px) {
    width: 50px;
    height: 50px;
    font-size: 28px;

    top: 90%;
    left: 45%;
  }
`