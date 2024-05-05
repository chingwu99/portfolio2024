import styled from "styled-components";

export const S = {
  Container: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #dedad7;
    height: 68px;
  `,
  Logo: styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
  `,
  MenuWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Menu: styled.div`
    .IoIosMenu {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  `,
  Language: styled.div`
    display: flex;
  `,
  DarkModeButton: styled.button`
    border: 0;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
