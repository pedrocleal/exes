import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
    margin: 15px;
    margin-bottom: -20px;
  }
`

export const ItemBox = styled.div` 
  padding: 20px;
  margin: 15px;
  margin-left: 0;

  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--primary);
  border-radius: 15px;
  
  span {
    font-size: 18px;
  }
  
  :hover {
    .button {
      display: block;
    }
  }

  .button {
    display: none;
  }

`

export const RemoveButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--red);
  color: #fff;
  border-radius: 15px;

  @media (max-width: 420px) {
    font-size: 14px;

    top: 90%;
    left: 45%;
  }
`