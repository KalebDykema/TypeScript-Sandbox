import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Kaleb", "pizza", 10);
const invTwo = new Invoice("Crowe", "chicken", 5);
const invoices = [invOne, invTwo];
console.log(invOne.format());
console.log(invTwo.format());
// Form Selector
const form = document.querySelector(".new-item-form");
// Input Selectors
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// Set up form event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
