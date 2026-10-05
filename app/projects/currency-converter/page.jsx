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

  // rate = скільки гривень коштує 1 одиниця валюти.
  // countValue переводить суму в гривні (множимо на курс 1вал),
  // потім ділимо на курс 2вал.
  // ---
  // rate = how many UAH one unit of the currency costs.
  // countValue converts the amount to UAH (multiply by startValue),
  // which we will then divide by 2val (target value)
  const countValue = (startValue, count) => {
    return count * startValue;
  };

  // Умова, - перераховується тільки
  // 1вал і каунт, тому тільки це є в
  // функції і в мемо.
  // ---
  // Condition - only
  // 1val (startValue) and count are recalculated, so only they are in
  // the function and in memo.
  const res = useMemo(() => countValue(startValue, count), [startValue, count]);

  // The rest is calculated separately with the UAH amount
  // +round
  // +2 знаки після коми -> toString.
  const secNumb = res / targValue;
  const numbRound = Math.round(secNumb * 100) / 100;
  const stringNumb = numbRound.toFixed(2);

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
