import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  body {
    background-color: #000
  }
`;

export const ContainerStyled = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div {
    width: 500px;
    height: 500px;
    border: solid 2px #eee;
    display: flex;
    flex-wrap: wrap;
  }
`;

type BoxType = {
  color?: "x" | "circle";
};

export const BoxStyled = styled("span")<BoxType>`
  color: ${(props) => props.color === "x" && "red"};
  color: ${(props) => props.color === "circle" && "blue"};
  font-size: 70px;
  font-weight: 600;
  width: 32.9%;
  height: 32.9%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #272727;
  transition: 0.3s;
  &:hover {
    background-color: #272727;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const MessageStyled = styled("span")`
  position: absolute;
  padding: 1em;
  background-color: #eee;
  color: black;
  font-size: 18px;
  border-radius: 10px;
`;
