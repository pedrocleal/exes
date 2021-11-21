import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  left: 50%;
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

  @media (max-width: 720px) {
    width: 50px;
    height: 50px;

    margin: 0 auto;
  }
`