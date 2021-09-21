var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitorLoss(initial, quantity, current) {
  if(current === initial) {
    // No profit or loss
    showOutput("No Profit or Loss");
  } else if (current > initial) {
    // profit
    profitPerStock = (current - initial);
    profit = profitPerStock*quantity;
    profitPercentage = (profitPerStock / initial)*100;
    showOutput(`The profit is of ${profit.toFixed(2)} and the percentage is ${profitPercentage.toFixed(2)}%`, "PROFIT");
  } else {
    // loss
    lossPerStock = (initial - current);
    loss = lossPerStock*quantity;
    lossPercentage = (lossPerStock / initial)*100;
    showOutput(`The loss is of ${loss.toFixed(2)} and the percentage is ${lossPercentage.toFixed(2)}%`, "LOSS");
  }
}

function showOutput(message, status) {
  outputBox.innerHTML = message;
  if (status === "PROFIT") {
    outputBox.style.color = "green";
  } else if(status === "LOSS") {
    outputBox.style.color = "red";
  } else {
    outputBox.style.color = "black";
  }
}

function submitHandler() {
  var initial = Number(initialPrice.value);
  var quantity = Number(stocksQuantity.value);
  var current = Number(currentPrice.value);

  if(initial === 0 | quantity === 0 | current === 0) {
    showOutput("Enter all the inputs");
  } else if(initial < 0 | quantity < 0 | current < 0) {
    showOutput("All values should be positive");
  } else {
    calculateProfitorLoss(initial, quantity, current);
  }
}

submitBtn.addEventListener("click", submitHandler);