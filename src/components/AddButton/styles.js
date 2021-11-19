import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding-bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  background: var(--secondary);
`

export const Button = styled.button`
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
`