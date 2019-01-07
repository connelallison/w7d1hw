"use strict";

const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function() {

};

PrimeChecker.prototype.checkPrime = function(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  } return true;
};

PrimeChecker.prototype.bindEvents = function() {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const number = event.detail;
    console.log(`payload received: ${number}`);
    const prime = this.checkPrime(number);
    PubSub.publish("PrimeChecker:result-calculated", prime);
  });
};


module.exports = PrimeChecker;
