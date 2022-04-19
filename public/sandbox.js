"use strict";
// Form Selector
var form = document.querySelector(".new-item-form");
// Input Selectors
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// Set up form event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
