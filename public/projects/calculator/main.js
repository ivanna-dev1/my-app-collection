const input = document.getElementById("calcInput");
// !! всі змінні які використовуються мають бути винесені як глобальні змінні
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
// true одразу після "=", щоб нова цифра починала нове число, а не дописувалась до результату
let isResult = false;

function clickNumber(number) {
  if (operator === "") {
    if (isResult) {
      firstNumber = "";
      isResult = false;
    }
    firstNumber += number;
    input.value = firstNumber;
  } else {
    secondNumber += number;
    input.value = firstNumber + " " + operator + " " + secondNumber;
  }
}

function clickSymbol(symbol) {
  if (firstNumber && !secondNumber) {
    isResult = false;
    operator = symbol;
    input.value = firstNumber + " " + symbol + " ";
  }
  // else if (firstNumber) {
  //   clickEqual() + symbol;
  // }
}

function clickChangeSymbol() {
  if (operator === "") {
    // у нуля і порожнього поля знака немає
    if (!firstNumber || parseFloat(firstNumber) === 0) {
      return;
    }
    if (firstNumber > 0) {
      firstNumber = "-" + firstNumber;
      input.value = firstNumber;
    } else {
      firstNumber = firstNumber.toString(); // -1 => '-1'
      const stringArray = firstNumber.split(""); //ex. ['-','1']
      stringArray.shift(); //ex. ['-','1'] => ['1']
      const convertedToString = stringArray.join(""); //ex. ['1'] => '1'
      firstNumber = convertedToString;
      input.value = convertedToString;
    }
  } else {
    if (!secondNumber || parseFloat(secondNumber) === 0) {
      return;
    }
    if (secondNumber > 0) {
      secondNumber = "-" + secondNumber;
      input.value =
        firstNumber + " " + operator + " " + "(" + secondNumber + ")";
    } else {
      secondNumber = secondNumber.toString(); // -1 => '-1'
      const secStringArray = secondNumber.split(""); //ex. ['-','1']
      secStringArray.shift(); //ex. ['-','1'] => ['1']
      const secConvertedToString = secStringArray.join(""); //ex. ['1'] => '1'
      secondNumber = secConvertedToString;
      input.value =
        firstNumber + " " + operator + " " + "(" + secConvertedToString + ")";
    }
  }
}

function clickPersent() {
  if (!firstNumber) {
    return;
  }
  if (operator === "") {
    // 50% => 0.5
    firstNumber = (parseFloat(firstNumber) / 100).toString();
    input.value = firstNumber;
  } else if (secondNumber) {
    // 200 + 10% => 200 + 20 (10% від першого числа)
    secondNumber = ((parseFloat(firstNumber) * parseFloat(secondNumber)) / 100).toString();
    input.value = firstNumber + " " + operator + " " + secondNumber;
  }
}

function clickPoint() {
  if (operator === "") {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
      input.value = firstNumber;
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
      input.value = firstNumber + " " + operator + " " + secondNumber;
    }
  }
}

function clickEqual() {
  if (secondNumber) {
    if (
      firstNumber === "undefined" ||
      secondNumber === "undefined" ||
      result === "undefined" ||
      operator === "undefined"
    ) {
      clickSmile();
      return;
    }

    // перетворюємо строку в число щоб правильно порахувати
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        // на нуль ділити не можна
        if (b === 0) {
          clickSmile();
          return;
        }
        result = a / b;
        break;
    }
    input.value = result;

    // щоб округлити до десятої(2 знаки після коми)
    // .toFixed(2);

    const ul = document.getElementById("historyInput");
    let li = document.createElement("li");
    li.innerText =
      firstNumber + " " + operator + " " + secondNumber + " = " + result;

    // перетворюємо число в строку щоб далі з ним працювати
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isResult = true;
    ul.prepend(li);
  }
}

function clickDelete() {
  input.value = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
  result = "";
  isResult = false;
}

function clickSmile() {
  const smile = "Maa-a-ay! 😾 🙀 😿 🐱 🐱 ";
  // for (let i = 0; i < smile.length; i++) {
  //   smile[0] += smile[i + 1];

  clickDelete();
  input.value = smile;
}

let x;
