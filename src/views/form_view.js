"use strict";

const PubSub = require('../helpers/pub_sub.js');

const FormView = function() {

};

FormView.prototype.bindEvents = function() {
  const form = document.querySelector("#prime-checker-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const numInput = parseInt(event.target.number.value, 10);
    PubSub.publish("FormView:number-submitted", numInput);
  });
};

module.exports = FormView;
