"use client";
import "./style.css";

import { useState } from "react";

export function Board() {
  const winComboArr = ["012", "345", "678", "036", "147", "258", "048", "246"];
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);
  const [order, setOrder] = useState("X");
  const [winCombo, setWinCombo] = useState("");

  const handleSighChange = (item, index) => {
    if (winCombo) {
      return;
    }
    const newArr = items.map((it, ind) => {
      if (ind === index) {
        return order === "X" ? "X" : "O";
      } else {
        return it;
      }
    });
    setItems(newArr);
    if (!winCombo) {
      setOrder(order === "X" ? "O" : "X");
    }
    handleWinCombo(newArr);
  };

  const handleReset = () => {
    setItems(["", "", "", "", "", "", "", "", ""]);
    setOrder("X");
    setWinCombo("");
  };

  const handleWinCombo = (newArr) => {
    let _winCombo = "";

    for (let combo of winComboArr) {
      _winCombo = combo;
      for (let index of combo) {
        if (newArr[index] !== "X") {
          _winCombo = "";
          continue;
        }
      }
      if (_winCombo) {
        break;
      }

      _winCombo = combo;
      for (let index of combo) {
        if (newArr[index] !== "O") {
          _winCombo = "";
          continue;
        }
      }
      if (_winCombo) {
        break;
      }
    }
    if (_winCombo) {
      setWinCombo(_winCombo);
    }
  };

  const getWinerText = () => {
    if (winCombo) {
      if (order === "X") {
        return "Winner: O";
      } else if (order === "O") {
        return "Winner: X";
      }
    } else if (!winCombo) {
      if (!items.includes("")) {
        return "It's a Draw!";
      } else {
        return `Next Player: ${order}`;
      }
    }
  };

  return (
    <div className="game-container ">
      <h2>Tic-Tac-Toe</h2>
      <p>{getWinerText()}</p>
      <section className="grid-container">
        {items.map((item, index) => (
          <button
            onClick={() => handleSighChange(item, index)}
            className={
              winCombo.includes(index) ? "square square-active" : "square"
            }
            key={index}
            disabled={item === "X" || item === "O" || winCombo}
          >
            {item}
          </button>
        ))}
      </section>
      <button id="reset" className="reset" onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
}
export default function App() {
  return (
    <div className="game-wrapper">
      <Board />
    </div>
  );
}

// 1 закріпити за кожною кнопкою індекс з масиву
// 2 на онКлік вмводити в консоль індекс кнопки
// 3 за іцим індексом змінюємо елемент масиву в стейт на той що в змінній Х
// 4 налашт змінну Х,- стейт(нал). якщо зм===Х?зм=О:зм=Х  при кожному онКлік

// 5прописати масив зі строками виграшних комбінацій- XXX345678 і т.д.  (для Х і О)
// 6 перевести стейт з масивом кнопок в строку через джоін
// 7 на кожн кліку масив кнопок чи інклуд виграшну строку (для Х і О)
