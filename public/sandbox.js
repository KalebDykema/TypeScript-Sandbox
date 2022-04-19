"use strict";
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    ;
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.detail;
    };
    return Invoice;
}());
;
var invOne = new Invoice("Kaleb", "pizza", 10);
console.log(invOne.format());
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
