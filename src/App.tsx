/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  BoxStyled,
  BoxedStyled,
  ContainerStyled,
  FormStyled,
  MessageStyled,
  ScoreboardStyled,
} from "./style";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  const [addNames, setAddNames] = useState(false);

  const [list, setList] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [timePlayer, setTimePlayer] = useState(1);
  const [message, setMessage] = useState("");
  const [winnerCombo, setWinnerCombo] = useState(0);

  const [players, setPlayers] = useState([
    {
      score: 0,
      name: "Jogador 1",
    },
    {
      score: 0,
      name: "Jogador 2",
    },
  ]);

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
    setWinnerCombo(0);
  };

  const addScorePlayer = (player: 1 | 2) => {
    setPlayers(
      players.map((item, index) =>
        index === player - 1 ? { ...item, score: item.score + 1 } : item
      )
    );
  };
  const editNamePlayer = (data: any) => {
    if (!data.name1 || !data.name2) {
      return;
    }
    setPlayers(
      players.map((item, index) => ({
        ...item,
        name: data[`name${index + 1}`],
      }))
    );
    setAddNames(true);
  };

  const activeMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => clearBoard(), 2000);
  };

  const VerifyEndGame = () => {
    const end = list.every((item) => item !== 0);
    if (end) activeMessage("Empate");
  };
  const VerifyWinner = () => {
    var winner = null;
    for (let item of SequencesCorrect) {
      if (list[item[0]] === 1 && list[item[1]] === 1 && list[item[2]] === 1) {
        winner = 1;
      }
      if (list[item[0]] === 2 && list[item[1]] === 2 && list[item[2]] === 2) {
        winner = 2;
      }

      if (winner === 1 || winner === 2) {
        setWinnerCombo(winner);
        addScorePlayer(winner);
        activeMessage(`Jogador ${winner} venceu`);
        break;
      }
    }
  };

  const ClickElement = (index: number) => {
    if (winnerCombo) {
      return;
    }
    if (list[index] !== 0) {
      return;
    }

    setList((prev) => {
      const listCurrent = [...prev];
      listCurrent[index] = timePlayer;
      return listCurrent;
    });

    setTimePlayer((current) => (current === 1 ? 2 : 1));
  };

  return (
    <ContainerStyled>
      {message && <MessageStyled>{message}</MessageStyled>}

      {!addNames ? (
        <FormStyled onSubmit={handleSubmit(editNamePlayer)}>
          <label>
            <span>Jogador 1</span>
            <input
              {...register("name1")}
              type="text"
              placeholder="Digite o seu nome"
            />
          </label>
          <label>
            <span>Jogador 2</span>
            <input
              {...register("name2")}
              type="text"
              placeholder="Digite o seu nome"
            />
          </label>
          <label>
            <button type="submit">Salvar</button>
          </label>
        </FormStyled>
      ) : (
        <>
          <ScoreboardStyled>
            {players.map((item, index) => (
              <p key={index}>
                {item.name}: <span>{item.score} pontos</span>
              </p>
            ))}
          </ScoreboardStyled>
          <BoxedStyled>
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
          </BoxedStyled>
        </>
      )}
    </ContainerStyled>
  );
};

export default App;
