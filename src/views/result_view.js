"use strict";

const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.displayResult = function(number, prime) {
  const resultElement = document.querySelector("#result");
  const isPrime = function() {
    if (prime) {
      return "";
    } return "not ";
  };
  resultElement.textContent = `${number} is ${isPrime()} a prime number.`;
};

ResultView.prototype.bindEvents = function() {
  let number
  let prime
  PubSub.subscribe("FormView:number-submitted", (event) => {
    number = event.detail;
    console.log(`payload received: ${number}`);
  });
  PubSub.subscribe("PrimeChecker:result-calculated", (event) => {
    prime = event.detail;
    console.log(`payload received: ${prime}`);
    this.displayResult(number, prime);
  })
};

module.exports = ResultView;
