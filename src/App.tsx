/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BoxStyled, ContainerStyled, MessageStyled } from "./style";
const App = () => {
  const [list, setList] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [timePlayer, setTimePlayer] = useState(1);
  const [message, setMessage] = useState("");

  const SequencesCorrect = [
    [0, 1, 2], //  horizontal
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // Vertical
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    VerifyEndGame();
    VerifyWinner();
  }, [list]);

  const clearBoard = () => {
    setList(list.map((item) => 0));
    setMessage("");
    setTimePlayer(1);
  };

  const ClickElement = (index: number) => {
    setList((prev) => {
      const listCurrent = [...prev];
      listCurrent[index] = timePlayer;
      return listCurrent;
    });

    VerifyWinner();
    VerifyEndGame();

    setTimePlayer((current) => (current === 1 ? 2 : 1));
  };

  const VerifyEndGame = () => {
    const end = list.every((item) => item !== 0);
    if (end) {
      setMessage("Empate");
      setTimeout(() => clearBoard(), 2000);
    }
  };
  const VerifyWinner = () => {
    for (let item of SequencesCorrect) {
      if (list[item[0]] === 1 && list[item[1]] === 1 && list[item[2]] === 1) {
        setMessage(`jogador ${timePlayer} vencer`);
        break;
      }
      if (list[item[0]] === 2 && list[item[1]] === 2 && list[item[2]] === 2) {
        setMessage(`jogador ${timePlayer} vencer`);
        break;
      }
    }
  };

  return (
    <ContainerStyled>
      {message && <MessageStyled>{message}</MessageStyled>}

      <div>
        {list.map((item, index) => (
          <BoxStyled
            key={index}
            onClick={() => ClickElement(index)}
            color={item === 1 ? "x" : "circle"}
          >
            {item === 1 && "X"}
            {item === 2 && "O"}
          </BoxStyled>
        ))}
      </div>
    </ContainerStyled>
  );
};

export default App;
