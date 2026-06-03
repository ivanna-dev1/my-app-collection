"use client";
import React, { useState, useMemo } from "react";
import "./style.css";

export default function CurrencyConverter() {
  const arrBuild = [
    {
      name: "UAH",
      rate: 1,
    },
    {
      name: "EUR",
      rate: 50.46,
    },
    {
      name: "USD",
      rate: 43.2,
    },
    {
      name: "GBP",
      rate: 57.77,
    },
    {
      name: "JPY",
      rate: 3.33,
    },
    {
      name: "PLN",
      rate: 11.89,
    },
  ];

  const [count, setCount] = useState(1);
  const [startCur, setStartCur] = useState("UAH");
  const [targCur, setTargCur] = useState("EUR");

  // find проход по масиву і видає перше рішення яке відповідає
  // умові. (і-об'єкт.нейм=== Валюта), видає її рейт (видає рейт
  // валюти яка збережена в стейт). Змінюємо валюту через меп вопшин
  // --- 
  // find iterates through the array and returns
  // the first match that satisfies the condition.
  // (i-object.name === Currency), returns its rate (returns the rate
  // of the currency saved in the state). We change the currency through map in option

  const startValue = arrBuild.find((i) => i.name === startCur).rate;
  const targValue = arrBuild.find((i) => i.name === targCur).rate;
  console.log("startCur", startCur, "startValue", startValue);
  console.log("targCur", targCur, "targValue", targValue);

  // countValue calculates the coefficient,
  // which we will then multiply by 2val (target value)
  const countValue = (startValue, count) => {
    const koeficient = count / startValue;
    console.log("koeficient", koeficient);
    return koeficient;
  };

  // Умова, - перераховується тільки
  // 1вал і каунт, тому тільки це є в
  // функції і в мемо.
  // ---
  // Condition - only
  // 1val (startValue) and count are recalculated, so only they are in
  // the function and in memo.
  const res = useMemo(() => countValue(startValue, count), [startValue, count]);

  // The rest is calculated separately with the coefficient
  // +round
  // +2 знаки після коми -> toString.
  const secNumb = res * targValue;
  const numbRound = Math.round(secNumb * 100) / 100;
  const stringNumb = numbRound.toFixed(2);
  console.log("secNumb", secNumb, "numbRound", numbRound, stringNumb);

  return (
    <div className="currency-converter-project">
      <form className="form-wrap">
        <h1>Currency Converter</h1>
        <h4>
          {startCur} to {targCur} Conversion
        </h4>
        <label>
          <input
            className="form-label"
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </label>
        <label>
          <span>Start Currency:</span>
          <select
            className="form-label"
            value={startCur}
            onChange={(e) => setStartCur(e.target.value)}
          >
            {/* Iterate through array elements and
            output currentElem.name 
            */}
            {arrBuild.map((elem) => (
              <option key={elem.name} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Target Currency:</span>
          <select
            className="form-label"
            value={targCur}
            onChange={(e) => setTargCur(e.target.value)}
          >
            {arrBuild.map((elem) => (
              <option key={elem.name} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
        </label>
        <h3>
          Converted Amount: {stringNumb} {targCur}
        </h3>
      </form>
    </div>
  );
}
