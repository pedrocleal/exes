import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  left: 50%;
  top: 90%;
  border: none;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 42px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--yellow);
  color: #fff;
  border-radius: 15px;

  @media (max-width: 420px) {
    font-size: 28px;

    top: 90%;
    left: 45%;
  }
`