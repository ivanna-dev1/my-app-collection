const input = document.getElementById("calcInput");
// !! всі змінні які використовуються мають бути винесені як глобальні змінні
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
// true одразу після "=", щоб нова цифра починала нове число, а не дописувалась до результату
let isResult = false;
console.log(firstNumber);

function clickNumber(number) {
  if (operator === "") {
    if (isResult) {
      firstNumber = "";
      isResult = false;
    }
    firstNumber += number;
    input.value = firstNumber;
    console.log(number);
  } else {
    secondNumber += number;
    input.value = firstNumber + " " + operator + " " + secondNumber;
    console.log(number);
  }
}

function clickSymbol(symbol) {
  if (firstNumber && !secondNumber) {
    isResult = false;
    operator = symbol;
    input.value = firstNumber + " " + symbol + " ";
    console.log(symbol);
  }
  // else if (firstNumber) {
  //   clickEqual() + symbol;
  // }
}

function clickChangeSymbol() {
  if (operator === "") {
    if (firstNumber > 0) {
      firstNumber = "-" + firstNumber;
      input.value = firstNumber;
      console.log(firstNumber);
    } else {
      firstNumber = firstNumber.toString(); // -1 => '-1'
      const stringArray = firstNumber.split(""); //ex. ['-','1']
      stringArray.shift(); //ex. ['-','1'] => ['1']
      const convertedToString = stringArray.join(""); //ex. ['1'] => '1'
      firstNumber = convertedToString;
      input.value = convertedToString;
      console.log(firstNumber);
    }
  } else {
    if (secondNumber > 0) {
      secondNumber = "-" + secondNumber;
      input.value =
        firstNumber + " " + operator + " " + "(" + secondNumber + ")";
      console.log(secondNumber);
    } else {
      secondNumber = secondNumber.toString(); // -1 => '-1'
      const secStringArray = secondNumber.split(""); //ex. ['-','1']
      secStringArray.shift(); //ex. ['-','1'] => ['1']
      const secConvertedToString = secStringArray.join(""); //ex. ['1'] => '1'
      secondNumber = secConvertedToString;
      input.value =
        firstNumber + " " + operator + " " + "(" + secConvertedToString + ")";
      console.log(secondNumber);
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
    console.log(firstNumber);
  } else if (secondNumber) {
    // 200 + 10% => 200 + 20 (10% від першого числа)
    secondNumber = ((parseFloat(firstNumber) * parseFloat(secondNumber)) / 100).toString();
    input.value = firstNumber + " " + operator + " " + secondNumber;
    console.log(secondNumber);
  }
}

function clickPoint() {
  if (operator === "") {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
      input.value = firstNumber;
      console.log(firstNumber);
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
      input.value = firstNumber + " " + operator + " " + secondNumber;
      console.log(secondNumber);
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
        result = a / b;
        break;
    }
    input.value = result;

    // щоб округлити до десятої(2 знаки після коми)
    // .toFixed(2);
    console.log("=" + result);

    const ul = document.getElementById("historyInput");
    let li = document.createElement("li");
    li.innerText =
      firstNumber + " " + operator + " " + secondNumber + " = " + result;

    console.log(li);
    console.log(ul);

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
  console.log("DELETED");
}

function clickSmile() {
  const smile = "Maa-a-ay! 😾 🙀 😿 🐱 🐱 ";
  // for (let i = 0; i < smile.length; i++) {
  //   smile[0] += smile[i + 1];

  clickDelete();
  input.value = smile;
  console.log(smile);
}

let x;
