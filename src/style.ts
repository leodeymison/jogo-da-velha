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
  flex-direction: column;
  height: 100vh;
`;

export const BoxedStyled = styled("span")<BoxType>`
  width: 600px;
  height: 600px;
  border: solid 5px #eee;
  display: flex;
  flex-wrap: wrap;
`;

type BoxType = {
  color?: "x" | "circle";
  positionLine?: "vertical" | "horizontal" | "diagonal";
};

export const BoxStyled = styled("div")<BoxType>`
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
  position: relative;
  &::after {
    content: attr(data-descr);
    position: absolute;
    width: 150%;
    background-color: #ffffcc;
    padding: ${(props) => (props.positionLine === undefined ? "0px" : "10px")};
    transform: ${(props) => {
      if (props.positionLine === "diagonal") {
        return "rotate(45deg)";
      }
      if (props.positionLine === "horizontal") {
        return "rotate(0deg)";
      }
      if (props.positionLine === "vertical") {
        return "rotate(90deg)";
      }
    }};
  }
  &:hover {
    background-color: #272727;
    cursor: pointer;
    transition: 0.3s;
  }

  abbr {
    color: #313131;
    font-size: 14px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;

export const MessageStyled = styled("span")`
  position: absolute;
  padding: 1em;
  background-color: #eee;
  color: black;
  font-size: 18px;
  border-radius: 10px;
  z-index: 1;
`;

export const ScoreboardStyled = styled("div")`
  color: white;
  width: 500px;
  padding: 1em 0;
  p {
    padding: 0.5em 1em 0.5em 0;
    span {
      background-color: blueviolet;
      padding: 0.3em 0.5em;
      border-radius: 5px;
    }
  }
`;

export const FormStyled = styled("form")`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: white;
  color: black;
  position: absolute;
  border-radius: 10px;
  min-width: 20%;
  label {
    display: flex;
    flex-direction: column;
    padding: 1em 0;
    span {
      font-size: 14px;
      color: #6f6f6f;
      padding: 0.2em 0;
    }
    button {
      padding: 10px;
      background-color: #07b2ee;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    input {
      font-size: 18px;
      padding: 10px;
      border-radius: 5px;
      border: solid 1px #aaa;
      &:focus {
        outline: none;
      }
    }
  }
`;
