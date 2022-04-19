"use strict";
// Classes
var Invoice = /** @class */ (function () {
    // private client: string;
    // readonly detail: string;
    // public amount: number;
    // constructor (c: string, d: string, a: number) {
    //    this.client = c;
    //    this.detail = d;
    //    this.amount = a;
    // };
    // Typescript makes doing what we did above way easier.
    function Invoice(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.detail;
    };
    return Invoice;
}());
;
var invOne = new Invoice("Kaleb", "pizza", 10);
var invTwo = new Invoice("Crowe", "chicken", 5);
var invoices = [invOne, invTwo];
console.log(invOne.format());
console.log(invTwo.format());
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
